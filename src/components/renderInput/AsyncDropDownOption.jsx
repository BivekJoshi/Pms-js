import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../api/axiosInterceptor';
import { Autocomplete, TextField } from '@mui/material';

const AsyncDropDownOption = ({ element, formik }) => {
    const [disOptions, setDisOptions] = useState([]);
    const [munOptions, setMunOptions] = useState([]);
    const { addresses } = formik.values;
    const selectedValue = addresses?.[0]?.[element.reference] || "0";

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (addresses[0].province) {
                    const response = await axiosInstance.get(`${element.path}?${element.reference}=${selectedValue}`);
                    const data = response.data;
                    const options = data?.map((item) => {
                        return {
                            label: item.name,
                            value: item.name,
                        }
                    })
                    setDisOptions(options);
                }

                if (addresses[0].district) {
                    const response = await axiosInstance.get(`${element.path}?${element.reference}=${selectedValue}`);
                    const data = response.data;
                    const options = data?.map((item) => {
                        return {
                            label: item.name,
                            value: item.name,
                        }
                    })
                    setMunOptions(options);
                }
            } catch (err) {
                console.log(err.message);
            }
        };

        if (element.type === "asyncDropDownOption") {
            fetchData();
        }

    }, [element.reference, element.path, selectedValue]);
    const asyncOptions = addresses[0]?.province ? disOptions : addresses[0]?.district ? munOptions : null;

    return (
        <div>
            <Autocomplete
                id={element.name}
                name={element.name}
                options={asyncOptions}
                getOptionLabel={(option) => option?.label || ""}
                value={asyncOptions?.find(option => option.value === formik.values[element.name]) || null}
                onChange={(event, newValue) => {
                    formik.setFieldValue(element.name, newValue?.value || "");
                }}
                fullWidth
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={element.label}
                        error={formik.touched[element.name] && Boolean(formik.errors[element.name])}
                        helperText={formik.touched[element.name] && formik.errors[element.name]}
                        variant="outlined"
                    />
                )}
            />
        </div>
    );
};

export default AsyncDropDownOption;
