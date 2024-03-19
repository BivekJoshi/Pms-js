import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React, { useState } from 'react';
import IndividualDPKyc from './IndividualDPKyc';
import IndividualDpKycDocument from './IndividualDpKycDocument';

const IndividualDpKycPannel = () => {
    const [activeTab, setActiveTab] = useState('1');
    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleNext = () => {
        setActiveTab('2');
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={activeTab}>
                {/* <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Item One" value="1" />
                    <Tab label="Item Two" value="2" />
                </TabList> */}
                <TabPanel value="1">
                    <IndividualDPKyc onNext={handleNext} />
                </TabPanel>
                <TabPanel value="2">
                    <IndividualDpKycDocument />
                </TabPanel>
            </TabContext>
        </Box>
    );
};

export default IndividualDpKycPannel;
