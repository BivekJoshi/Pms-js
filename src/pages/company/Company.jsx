import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCompanyById } from '../../hooks/company/useCompany';
import { List, ListItem } from '@mui/material';

const Company = () => {
    const { id } = useParams();
    const { data: companyData, isLoading } = useGetCompanyById(id);

    return (
        <div>
           
            <List>
                <ListItem>{companyData?.id}</ListItem>
                <ListItem>{companyData?.companyInfo}</ListItem>
                <ListItem>{companyData?.sector}</ListItem>
                <ListItem>{companyData?.symbol}</ListItem>
            </List>
           
        </div>
    );
};

export default Company;