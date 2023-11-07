import { useTheme } from '@emotion/react';
import { Button, Typography } from '@mui/material';
import React from 'react';

const ProfileButton = ({ userInfoData }) => {
  const theme = useTheme();
  return (
    <div>
      {userInfoData === 'PREMIUM_PLUS' ? (
        <>
          <Button
            className='primium-gradient-button'
            sx={{
              alignSelf: 'center',
              border: '1px solid #7A757F',
              borderRadius: '8px',
              padding: '2px 10px',
              color: 'black',
              gap: '9px',
              width: 'fit-content',
              '&:hover': {
                bgcolor: '#E28C12',
              },
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='19'
              height='18'
              viewBox='0 0 19 18'
              fill='none'
            >
              <path
                d='M1.62494 5.875H17.8749M1.13354 6.35195L9.24877 16.8777C9.30775 16.9546 9.38363 17.0169 9.47053 17.0598C9.55744 17.1026 9.65304 17.1249 9.74994 17.1249C9.84684 17.1249 9.94245 17.1026 10.0294 17.0598C10.1163 17.0169 10.1921 16.9546 10.2511 16.8777L18.3663 6.35195C18.4461 6.24807 18.4924 6.12235 18.4991 5.99153C18.5057 5.8607 18.4723 5.73095 18.4035 5.61953L15.6507 1.17617C15.5941 1.08422 15.5148 1.00828 15.4205 0.955567C15.3263 0.902856 15.2201 0.875122 15.1121 0.875H4.38783C4.27982 0.875122 4.17363 0.902856 4.07935 0.955567C3.98507 1.00828 3.90583 1.08422 3.84916 1.17617L1.09643 5.61953C1.02754 5.73095 0.994198 5.8607 1.00083 5.99153C1.00746 6.12235 1.05374 6.24807 1.13354 6.35195Z'
                stroke={theme.palette.mode === 'dark' ? 'white' : 'black'}
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M15.375 1.5L13.5 5.875M13.5 5.875L9.75 0.875L6 5.875M13.5 5.875L9.75 16.5L6 5.875M4.125 1.5L6 5.875'
                stroke={theme.palette.mode === 'dark' ? 'white' : 'black'}
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <Typography
              pt='2px'
              textTransform='capitalize'
              variant='h6'
              fontWeight='400'
              color={theme.palette.text.main}
            >
              Premium
            </Typography>
          </Button>
        </>
      ) : userInfoData === 'PREMIUM' ? (
        <>
          <Button
            className='radial-gradient-button'
            sx={{
              alignSelf: 'center',
              border: '1px solid #7A757F',
              borderRadius: '8px',
              padding: '2px 10px',
              color: 'black',
              gap: '9px',
              width: 'fit-content',
              '&:hover': {
                bgcolor: '#E28C12',
              },
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='16'
              viewBox='0 0 20 16'
              fill='none'
            >
              <path
                d='M3.7 15H16.3M1 1L3.7 11.5H16.3L19 1L13.6 7.125L10 1L6.4 7.125L1 1Z'
                stroke={theme.palette.mode === 'dark' ? 'white' : 'black'}
                stroke-width='1.25'
                stroke-linecap='round'
                stroke-linejoin='round'
                // fill={theme.palette.mode === 'dark' ? 'white' : 'black'}
              />
            </svg>
            <Typography
              pt='2px'
              textTransform='capitalize'
              variant='h6'
              fontWeight='400'
              color={theme.palette.text.main}
            >
              Standard
            </Typography>
          </Button>
        </>
      ) : (
        <>
          <Button
            sx={{
              alignSelf: 'center',
              bgcolor: '#E28C12',
              border: '1px solid #7A757F',
              borderRadius: '8px',
              padding: '2px 10px',
              color: 'black',
              gap: '9px',
              width: 'fit-content',
              '&:hover': {
                bgcolor: '#ff9600',
              },
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='18'
              viewBox='0 0 15 18'
              fill='none'
            >
              <path
                d='M5.27679 10.0198L6.11143 7.50439L3.915 6.03705H6.65893L7.5 3.49529L8.34107 6.03705H11.085L8.88214 7.50341L9.71786 10.0188L7.5 8.45889L5.27679 10.0198ZM2.14286 18V11.5749C1.46429 10.9672 0.9375 10.2554 0.5625 9.43971C0.1875 8.62593 0 7.75431 0 6.82483C0 4.92233 0.7275 3.30939 2.1825 1.98603C3.63679 0.662009 5.40929 0 7.5 0C9.59071 0 11.3632 0.662009 12.8175 1.98603C14.2725 3.30939 15 4.92233 15 6.82483C15 7.75366 14.8125 8.62561 14.4375 9.44069C14.0625 10.2558 13.5357 10.9665 12.8571 11.573V17.998L7.5 16.5356L2.14286 17.998V18ZM7.5 12.6747C9.28571 12.6747 10.8036 12.1059 12.0536 10.9685C13.3036 9.831 13.9286 8.44979 13.9286 6.82483C13.9286 5.19987 13.3036 3.81865 12.0536 2.68118C10.8036 1.54371 9.28571 0.974976 7.5 0.974976C5.71429 0.974976 4.19643 1.54371 2.94643 2.68118C1.69643 3.81865 1.07143 5.19987 1.07143 6.82483C1.07143 8.44979 1.69643 9.831 2.94643 10.9685C4.19643 12.1059 5.71429 12.6747 7.5 12.6747ZM3.21429 16.6175L7.5 15.5255L11.7857 16.6175V12.3958C11.1879 12.7956 10.5239 13.1043 9.79393 13.3221C9.06464 13.5405 8.3 13.6497 7.5 13.6497C6.7 13.6497 5.93536 13.5405 5.20607 13.3221C4.47607 13.105 3.81214 12.7962 3.21429 12.3958V16.6175Z'
                fill={theme.palette.mode === 'dark' ? 'white' : 'black'}
              />
            </svg>
            <Typography
              pt='2px'
              textTransform='capitalize'
              variant='h6'
              fontWeight='400'
              color={theme.palette.text.main}
            >
              Basic
            </Typography>
          </Button>
        </>
      )}
    </div>
  );
};

export default ProfileButton;
