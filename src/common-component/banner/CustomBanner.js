import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const CustomBanner = ({
  title,
  subtitle,
  sx = {},
  textAlign = "center",
  padding = 8,
  breadcrumbs,
  ...props
}) => {
  return (
    <Grid
      overflow={"hidden"}
      alignItems="center"
      textAlign={textAlign}
      padding={10}
      paddingBottom={5}
      paddingLeft={2}
      paddingRight={2}
      sx={{
        background:
          "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(220, 255, 250, 1))",
        overflow: "hidden",
        ...sx,
      }}
      {...props}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontFamily: "sen, sans-serif",
          whiteSpace: "wrap",
          // fontWeight: 500,
          lineHeight: "130%",
          color: "#322C3E",
          fontSize: { xs: "30px", sm: "42px", md: "54px", lg: "56px" },
          paddingTop: { lg: 5, md: 5, sm: 3, sx: 2 },
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontFamily: "sen, sans-serif",
          whiteSpace: "wrap",
          lineHeight: "130%",
          color: "#443B56",
          fontSize: { xs: "20px", sm: "22px", md: "24px", lg: "24px" },
          mt: 2,
          color: "#333",
        }}
      >
        {subtitle}
      </Typography>

        <Box
          sx={{
            border: "1px solid #444",
            borderRadius: "4px",
            display: "flex",
            width: "fit-content",
            padding: "4px 20px",
            justifySelf: "center",
            marginTop: "20px",
            cursor: "default",
          }}
        >
          {breadcrumbs?.map((val, index) => (
            <React.Fragment key={val.goesto}>
              <Link href={val.goesto}>
                <Box
                  component="span"
                  sx={{
                    fontWeight: "bold", 
                    fontFamily: "sen, sans-serif",
                    cursor: index == 0 ? "pointer" : "default",
                    color:
                      index == 0
                        ? "#333"
                        : {
                            background:
                              "linear-gradient(260.31deg, #4CFFE7 0%, #7600C4 41.58%, #D300E5 87.79%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: "transparent", // fallback for non-webkit browsers
                          },
                  }}
                >
                  {val.name}
                </Box>
              </Link>
              {index < breadcrumbs.length - 1 && (
                <Box component="span" sx={{ mx: 1 }}>
                  <DoubleArrowIcon
                    sx={{ fontSize: 18, mx: 0.5, color: "#222" }}
                  />
                </Box>
              )}
            </React.Fragment>
          ))}
        </Box>

      <Box
        sx={{
          position: "absolute",
          left: "0px",
          top: "120px",
          background:
            "linear-gradient(260.31deg, #4CFFE7 0%, #7600C4 41.58%, #D300E5 87.79%)",
          height: 50,
          width: 50,
          borderRadius: "50%",
          opacity: 1,
          filter: "blur(20px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          right: "0px",
          top: "120px",
          background:
            "linear-gradient(260.31deg, #4CFFE7 0%, #7600C4 41.58%, #D300E5 87.79%)",
          height: 100,
          width: 100,
          borderRadius: "50%",
          opacity: 0.7,
          filter: "blur(20px)",
        }}
      />
    </Grid>
  );
};

export default CustomBanner;
