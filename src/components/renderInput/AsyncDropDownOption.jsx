import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../api/axiosInterceptor';
import { Autocomplete, TextField } from '@mui/material';

const AsyncDropDownOption = ({ element, formik, index }) => {
    console.log("index", index)
    const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                if (!element.path || !element.reference) return;
                let referenceValue = "";
                if (element.reference === 'province') {
                    referenceValue = formik.values.addresses[index].province;
                } else if (element.reference === 'district') {
                    referenceValue = formik.values.addresses[index].district;
                }
                if (!referenceValue) {
                    setOptions([]);
                    return;
                }
                const response = await axiosInstance.get(`${element.path}?${element.reference}=${referenceValue || "0"}`);
                const data = response.data;

                const optionsData = data?.map((item) => ({
                    label: item.name,
                    value: item.name,
                }));
                setOptions(optionsData);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData();
    }, [element.path, element.reference, formik.values]);

    useEffect(() => {
        if (selectedValue && formik.values[element.name] !== selectedValue.value) {
            formik.setFieldValue(element.name, selectedValue.value);
        }
    }, [selectedValue, element.name]);

    return (
        <div>
            <Autocomplete
                id={element.name}
                name={element.name}
                options={options}
                getOptionLabel={(option) => option?.label || ""}
                value={selectedValue || null}
                onChange={(event, newValue) => {
                    setSelectedValue(newValue);
                }}
                fullWidth
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={element.label}
                        error={formik.touched[`addresses[${index}].${element.name}`] && Boolean(formik.errors[`addresses[${index}].${element.name}`])}
                        helperText={formik.touched[`addresses[${index}].${element.name}`] && formik.errors[`addresses[${index}].${element.name}`]}
                        variant="outlined"
                    />
                )}
            />
        </div>
    );
};

export default AsyncDropDownOption;
