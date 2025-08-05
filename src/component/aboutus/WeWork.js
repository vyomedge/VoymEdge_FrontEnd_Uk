import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import React from "react";
import Image from "next/image";

const WeWork = () => {
  const cardData = [
    {
      title: "UK Working Hours",
      subheading: " & Communication",
      icon: "/aboutusIcon1.svg",
      bgColor: "#FFFFFF",
      textColor: "#443B56",
      border: "1px solid #7600C4",
    },
    {
      title: "Cost-Effective",
      subheading: "without compromise",
      icon: "/aboutusIcon2.svg",
      bgColor: "#FFFFFF",
      textColor: "#443B56",
      border: "1px solid #7600C4",
    },
    {
      title: "UK Virtual Presence",
      icon: "/aboutusIcon3.svg",
      bgColor: "#FFFFFF",
      textColor: "#443B56",
      border: "1px solid #7600C4",
    },
    {
      title: "Agile,Transparent,",
      subheading: "and Scalable",
      icon: "/aboutusIcon4.svg",
      bgColor: "#FFFFFF",
      textColor: "#443B56",
      border: "1px solid #7600C4",
    },
    {
      title: "Compliance & ",
      subheading: "Confidentiality.",
      icon: "/aboutusIcon5.svg",
      bgColor: "#FFFFFF",
      textColor: "#443B56",
      border: "1px solid #7600C4",
    },
  ];
  return (
    <>
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          sx={{
            px: { xs: 2, sm: 6, md: 8, lg: 14 },
            py: { xs: 2, sm: 8, md: 5, lg: 4 },
            flexDirection: "column", // If you want vertical stacking
            textAlign: "center", // Ensures text is centered as well
          }}
        >
          <Box>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: "28px", sm: "32px", md: "48px", lg: "48px" },
                fontFamily: "sen, sans-serif",
                color: "#322C3E",
                lineHeight: "130%",
                padding: "20px",
              }}
            >
              {`How We Work`}
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {cardData.map((item, i) => (
                <Grid item key={i}>
                  <Paper
                    elevation={0}
                    sx={{
                      width: "290px",
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      bgcolor: item.bgColor,
                      color: item.textColor,
                      border: item.border,
                      px: 2,
                      py: 2,
                      borderRadius: "4px",
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={50}
                      height={50}
                    />
                    <Box textAlign="left">
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "16px",
                          fontFamily: "Manrope, sans-serif",
                        }}
                      >
                        {item.title}
                      </Typography>

                      {item.subheading && (
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "14px",
                            fontFamily: "Manrope, sans-serif",
                          }}
                        >
                          {item.subheading}
                        </Typography>
                      )}
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{ background: `linear-gradient(180deg, #FFFFFF 0%, #E5FFFB 100%)`,py:5 }}
      >
        <Container>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "48px" },
              fontFamily: "sen, sans-serif",
              color:"#222"
            }}
          >
            Let’s Build Something Together
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "13px", sm: "18px", md: "18px", lg: "18px" },
            }}
          >
            Ready to take your UK business to the next level? Let’s discuss how
            VyomEdge UK can support your growth.
          </Typography>
        </Container>
      </Box>

      {/* fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "48px" }, */}
    </>
  );
};

export default WeWork;
