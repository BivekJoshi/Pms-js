import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CircularUploadProgress = ({ value }) => {
    
    return (
        <>
      {value === 100 ? (
        <CheckCircleIcon sx={{ fontSize: "2rem", color: "rgba(86.95, 38, 150.96, 1)" }} />
      ) : (
        <div style={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress variant="determinate" value={value} />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="p" fontSize={10} component="div" color="#000">
              {value}%
            </Typography>
          </div>
        </div>
      )}
    </>
    );
};

export default CircularUploadProgress;