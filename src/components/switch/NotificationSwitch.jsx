import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { FormLabel } from '@mui/material';

export const ThemeSwitch = styled((props) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default function CustomizedSwitches({
  id,
  name,
  checked,
  label,
  onChange,
  formLabel,
  trueLabel,
  falseLabel,
  multiLabelEnable,
}) {
  const [checkedState, setCheckedState] = React.useState(false);

  React.useEffect(() => {
    setCheckedState(checked);
  }, [checked]);

  const getLabel = () => {
    if (multiLabelEnable) {
      return checkedState ? trueLabel : falseLabel;
    } else {
      return label;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {formLabel && <FormLabel>{formLabel}</FormLabel>}
      <FormControlLabel
        label={getLabel()}
        control={
          <ThemeSwitch
            sx={{ m: 1 }}
            name={name}
            id={id}
            checked={checkedState}
            onChange={onChange}
          />
        }
      />
    </div>
  );
}
