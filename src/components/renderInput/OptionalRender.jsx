import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

const OptionalRender = ({ element, formik }) => {
    const { t } = useTranslation();
    const [showDependent, setShowDependent] = useState(false);

    useEffect(() => {
        if (element.isDependent && element.dependent) {
            const dependency = element.dependent.every(dependency => {
                return formik.values[dependency.field] === dependency.value;
            });
            console.log(dependency, "dependency")
            setShowDependent(dependency);
        }
    }, [element, formik.values]);

    return (
        <>
            {showDependent && (
                <Autocomplete
                    name={element.name}
                    options={element.options}
                    getOptionLabel={(option) => t(option?.label) || ""}
                    value={element?.options?.find((option) => option?.value === formik.values[element.name])}
                    onChange={(event, newValue) => {
                        formik.setFieldValue(element.name, newValue?.value);
                    }}
                    fullWidth
                    renderInput={(params) => {
                        return (
                            <TextField
                                {...params}
                                label={t(element.label)}
                                error={formik.touched[element.name] && Boolean(formik.errors[element.name])}
                                required={element.required}
                                helperText={formik.touched[element.name] && formik.errors[element.name]}
                                variant="outlined"
                            />
                        );
                    }}
                />
            )}
        </>
    );
};

export default OptionalRender;
