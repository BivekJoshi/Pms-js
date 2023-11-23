import { useTheme } from '@emotion/react';
import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';

const SubscriptionCard = ({ section, index }) => {
  const theme = useTheme();

  return (
    <>
      <Box
        bgcolor={theme.palette.background.alt}
        color={theme.palette.text.main}
        sx={{
          paddingBottom: '16px',
          marginBottom: '16px',
          borderRadius: '6px',
        }}
        key={index}
      >
        <div style={{ position: 'relative' }}>
          <img
            src={section?.bg}
            style={{
              width: '100%',
            }}
          />
          <div
            style={{ position: 'absolute', top: '20%', left: '3%', zIndex: 99 }}
          >
            <Typography variant='h5' sx={{ fontWeight: 700, color: '#fff' }}>
              {section?.title}
            </Typography>
            <Typography variant='h5' sx={{ fontWeight: 700, color: '#fff' }}>
              {section?.subtitle && section?.subtitle}
            </Typography>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            padding: '0 20px',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <div>
            {section.items.map((item, itemIndex) => (
              <>
                <Typography
                  variant='h5'
                  style={{ color: theme.palette.text.light }}
                >
                  <div
                    key={itemIndex}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '6px 5px',
                    }}
                  >
                    <div
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '5px',
                        backgroundColor: item.bulletColor,
                      }}
                    />
                    {item.text}
                  </div>
                </Typography>
              </>
            ))}
          </div>
        </div>
        {index !== 0 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center ',
            }}
          >
            <Button
              variant='contained'
              style={{
                backgroundColor:
                  index === 0 && theme.palette.mode === 'dark'
                    ? 'black'
                    : section?.buttonColor,
              }}
            >
              Subscribe
            </Button>
          </div>
        )}
      </Box>
    </>
  );
};

export default SubscriptionCard;
