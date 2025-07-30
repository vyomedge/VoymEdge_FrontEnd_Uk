import React from 'react';
import { Button } from '@mui/material';

const CustomButton1 = ({
    children,
    onClick,
    startIcon,
    endIcon,
    sx = {},
    ...props
}) => {
    return (
        <Button data-testid="notify-button"
            onClick={onClick}
            startIcon={startIcon}
            endIcon={endIcon}
            sx={{
                backgroundColor: 'transparent',
                border: '2px solid #4CFFE7',
                px: 1,
                py: 1,
                borderRadius: 0,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                background: 'linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: 'all 0.3s ease',
                '&:hover': {
                    backgroundColor: '#4cffef1a',
                    boxShadow: '0 0 8px rgba(76, 255, 231, 0.4)',
                    borderColor: '#d300e5',
                },
                ...sx,
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default CustomButton1;


/* <CustomButton1
                onClick={() => console.log('Booked!')}
                sx={{ borderRadius: '5px', mt: 4, fontSize: '15px', fontWeight:"500" }}>
              {`Get a Free Strategy Session`}
  </CustomButton1>*/