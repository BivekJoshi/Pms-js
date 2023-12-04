import React, { useEffect, useRef, useState } from 'react';
import { useGetMarketIndex } from '../../hooks/dashboard/useDashboard';
import { Grid, Typography, useTheme } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MarketIndexNav = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetMarketIndex();
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const getChange = (item, isPercent) => {
    if (item > 0) {
      return (
        <Typography
          variant='h6'
          color='green'
          sx={{ display: 'flex', gap: '2px', width: 'max-content' }}
        >
          {isPercent ? `(${item}  %)` : `(${item})`}
          {isPercent ? <KeyboardArrowUpIcon /> : null}
        </Typography>
      );
    } else {
      return (
        <Typography
          variant='h6'
          color='red'
          sx={{ display: 'flex', gap: '2px', width: 'max-content' }}
        >
          {isPercent ? `(${item}  %)` : `(${item})`}
          {isPercent ? <KeyboardArrowDownIcon /> : null}
        </Typography>
      );
    }
  };

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      let animationFrameId;

      const step = () => {
        if (!isPaused) {
          const currentScroll = scrollContainer.scrollLeft;
          const scrollWidth = scrollContainer.scrollWidth;
          const containerWidth = scrollContainer.clientWidth;

          if (currentScroll >= scrollWidth - containerWidth) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 2; // Adjust the speed of scrolling
          }

          animationFrameId = requestAnimationFrame(step);
        }
      };

      const startAnimation = () => {
        if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(step);
        }
      };

      const stopAnimation = () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = undefined;
        }
      };

      scrollContainer.addEventListener('mouseenter', stopAnimation);
      scrollContainer.addEventListener('mouseleave', startAnimation);
      startAnimation();

      return () => {
        stopAnimation();
        scrollContainer.removeEventListener('mouseenter', stopAnimation);
        scrollContainer.removeEventListener('mouseleave', startAnimation);
      };
    }
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      style={{
        overflowX: 'hidden',
        width: '100%',
        position: 'relative',
        backgroundColor: theme.palette.secondary.nav,
        overflow: 'hidden',
      }}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Grid
        sx={{
          display: 'flex',
          gap: '16px',
          padding: '4px',
        }}
      >
        <div style={{ minWidth: '100vw' }}></div>

        {!isLoading &&
          data?.map((item, index) => {
            return (
              <span
                key={index}
                style={{ display: 'flex', gap: '4px', cursor: 'pointer' }}
              >
                <Typography
                  variant='h6'
                  sx={{
                    width: 'max-content',
                    fontWeight: '700',
                    color: 'white',
                  }}
                >
                  {item?.name}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    width: 'max-content',
                    fontWeight: '600',
                    color: 'white',
                  }}
                >
                  {item?.value}
                </Typography>
                {getChange(item?.change, false)}
                {getChange(item?.percent, true)}
              </span>
            );
          })}
        <div style={{ minWidth: '100vw' }}></div>
      </Grid>
    </div>
  );
};

export default MarketIndexNav;
