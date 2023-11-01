import React from 'react';
import './indicator.css';

const LiveIndicator = ({ open }) => {
  if (open) {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        width='24px'
        className='live-indicator'
      >
        <defs>
          <g id='anims'>
            <circle className='rp1' r='0.1em' />
            <circle className='rp2' r='0.1em' />
            <circle className='rp3' r='0.1em' />
            <circle className='rp4' r='0.1em' />
          </g>
        </defs>
        <circle
          className='background'
          r='50%'
          cx='50%'
          cy='50%'
          fill='#65ff7794'
        />
        <use xlinkHref='#anims' x='50%' y='50%' />
        <circle className='main-circle' r='0.5em' cx='50%' cy='50%' />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        width='24px'
        className='live-indicator-red'
      >
        <defs>
          <g id='anims-red'>
            <circle className='rp1-red' r='0.1em' />
            <circle className='rp2-red' r='0.1em' />
            <circle className='rp3-red' r='0.1em' />
            <circle className='rp4-red' r='0.1em' />
          </g>
        </defs>
        <circle
          className='background-red'
          r='50%'
          cx='50%'
          cy='50%'
          fill='#ff657994'
        />
        <use xlinkHref='#anims-red' x='50%' y='50%' />
        <circle className='main-circle-red' r='0.5em' cx='50%' cy='50%' />
      </svg>
    );
  }
};

export default LiveIndicator;
