import React from "react";
import { Button } from "@mui/material";

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
      data-testid="notify-button"
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        px: 3,
        py: 1.5,
        mt: 2,
        border: "none",
        borderRadius: "5px",
        textTransform: "none",
        fontWeight: 600,
        fontSize: "1rem",
        color: "#fff", // text color
        background:
          "linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))",

        transition: "all 0.3s ease",
        "&:hover": {
          opacity: 0.85,
          boxShadow: "0 0 10px rgba(211, 0, 229, 0.4)",
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

/* <CustomButton2
                onClick={() => console.log('Booked!')}
                sx={{ borderRadius: '5px', mt: 4, fontSize: '15px', fontWeight:"500" }}>
              {`Get a Free Strategy Session`}
  </CustomButton2>*/
