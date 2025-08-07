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
            position: "relative",
            display: "inline-block",
            px: 3,
            py: 1.5,
            mt: 2,
            fontSize: { xs: "15px", sm: "15px", md: "16px", lg: "16px" },
            fontWeight: 600,
            borderRadius: "5px",
            background: "transparent",
            cursor: "pointer",
            textAlign: "center",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            background:
              "linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))",

            // Create the animated border with a pseudo element
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "5px",
              padding: "2px", // border thickness
              background:
                "linear-gradient(270deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1), rgba(211, 0, 229, 1))",
              backgroundSize: "600% 600%",
              animation: "moveGradient 4s linear infinite",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", // clip content area
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              pointerEvents: "none",
            },

            // Add keyframes for background animation
            "@keyframes moveGradient": {
              "0%": { backgroundPosition: "0% 50%" },
              "50%": { backgroundPosition: "100% 50%" },
              "100%": { backgroundPosition: "0% 50%" },
            },

            "&:hover": {
              background: `linear-gradient(260.31deg, #4CFFE7 0%, #7600C4 41.58%, #D300E5 87.79%)`,
              WebkitBackgroundClip: "unset",
              WebkitTextFillColor: "unset",
              color: "#fff",
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