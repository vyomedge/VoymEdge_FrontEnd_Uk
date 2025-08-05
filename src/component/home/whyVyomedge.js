import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import React from "react";
import Image from "next/image";

const WhyVyomedge = () => {
  const cardData = [
    {
      title: "UK Working Hours & Communication",
      subheading: " & Communication",
      icon: "/why1.svg",
      bgColor: "#4C3A73",
      textColor: "#FFFFFF",
    },
    {
      title: "Cost-Effective without compromise",
      subheading: "without compromise",
      icon: "/why2.svg",
      bgColor: "#4C3A73",
      textColor: "#FFFFFF",
    },
    {
      title: "UK Virtual Presence",
      icon: "/why3.svg",
      bgColor: "#4C3A73",
      textColor: "#FFFFFF",
    },
    {
      title: "Agile,Transparent, and Scalable",
      subheading: "and Scalable",
      icon: "/why4.svg",
      bgColor: "#4C3A73",
      textColor: "#FFFFFF",
    },
    {
      title: "Compliance & Confidentiality.",
      subheading: "Confidentiality.",
      icon: "/why4.png",
      bgColor: "#4C3A73",
      textColor: "#FFFFFF",
    },
  ];
  return (
    // <Box
    //   display="flex"
    //   justifyContent="center"
    //   alignItems="center"
    //   textAlign="center"
    //   sx={{
    //     px: { xs: 2, sm: 6, md: 8, lg: 14 },
    //     py: { xs: 8, sm: 8, md: 5, lg: 4 },
    //     flexDirection: "column", // If you want vertical stacking
    //     textAlign: "center", // Ensures text is centered as well
    //   }}
    // >
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        padding="0px 0px 30px 0px"
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "56px" },
            fontFamily: "sen, sans-serif",
            color: "#322C3E",
            lineHeight: 1.3,
            padding: "20px",
            marginTop:"30px",
            textAlign:"center"
          }}
        >
          {` Why VyomEdge for UK Businesses?`}
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {cardData.map((item, i) => (
            <Grid item key={i}>
              <Paper
                elevation={0}
                sx={{
                  width: "290px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  bgcolor: item.bgColor,
                  color: item.textColor,
                  border: item.border,
                  px: 5,
                  py: 2,
                  borderRadius: "8px",
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                />
                <Box textAlign="left">
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      fontFamily: "Manrope, sans-serif",
                      lineHeight: "140%",
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* {item.subheading && (
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: "14px",
                        fontFamily: "Manrope, sans-serif",
                        lineHeight: "140%",
                      }}
                    >
                      {item.subheading}
                    </Typography>
                  )} */}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
    // {/* </Box> */}
  );
};

export default WhyVyomedge;
