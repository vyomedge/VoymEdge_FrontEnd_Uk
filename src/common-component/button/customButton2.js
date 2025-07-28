import React from 'react';
import { Button } from '@mui/material';

const CustomButton2 = ({
  children,
  onClick,
  startIcon,
  endIcon,
  sx = {},
  ...props
}) => {
  return (
    <Button
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        px: 1,
        py: 1,
        border: 'none',
        borderRadius: 0,
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '1rem',
        color: '#fff', // text color
        background: 'linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',

        transition: 'all 0.3s ease',
        '&:hover': {
          opacity: 0.85,
          boxShadow: '0 0 10px rgba(211, 0, 229, 0.4)',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton2;
