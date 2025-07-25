import React from 'react';
import { Grid, Typography } from '@mui/material';

const CustomBanner = ({
  title,
  subtitle,
  sx = {},
  textAlign = 'center',
  padding = 8,
  ...props
}) => {
  return (
    <Grid
      alignItems="center"
      textAlign={textAlign}
      padding={padding}
      sx={{
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(220, 255, 250, 1))',
        ...sx,
      }}
      {...props}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontFamily: 'sen, serif',
          whiteSpace: 'wrap',
          fontWeight: 500,
          lineHeight: '130%',
          color: '#322C3E',
          fontSize: { xs: '24px', sm: '42px', md: '54px', lg: '56px' },
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontFamily: 'sen, serif',
          whiteSpace: 'wrap',
          fontWeight: 500,
          lineHeight: '130%',
          color: '#443B56',
          fontSize: { xs: '20px', sm: '22px', md: '24px', lg: '24px' },
          mt: 2,
        }}
      >
        {subtitle}
      </Typography>
    </Grid>
  );
};

export default CustomBanner;
