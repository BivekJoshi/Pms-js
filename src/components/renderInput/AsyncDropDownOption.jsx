import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../api/axiosInterceptor';
import { Autocomplete, TextField } from '@mui/material';
import { getIn } from 'formik';

const AsyncDropDownOption = ({ element, formik, index,isFieldArray }) => {
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
    }, [element.path, element.reference, formik.values]); //eslint-disable-line

    useEffect(() => {
        if (selectedValue && formik.values[element.name] !== selectedValue.value) {
            formik.setFieldValue(element.name, selectedValue.value || "");
        }
    }, [selectedValue, element.name]); //eslint-disable-line

    
    const formValues = isFieldArray
    ? getIn(formik.values, element.name)
    : formik.values[element.name]

    const handleOnChange = (event, newValue) => {
        setSelectedValue(newValue);
        if (element?.clearField) {
            for (let i = 0; i < element.clearField.length; i++) {
                formik.setFieldValue(element.clearField[i],  "");
            }
        }
    };

    return (
        <div>
            <Autocomplete
                id={element.name}
                name={element.name}
                options={options}
                getOptionLabel={(option) => option?.label || ""}
                value={selectedValue || {label:formValues,name:formValues} || ""}
            
                
                onChange={handleOnChange}
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
