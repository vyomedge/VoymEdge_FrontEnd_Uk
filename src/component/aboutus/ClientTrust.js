import React from "react";
import { Box, Typography, Stack, Grid, Container } from "@mui/material";
import Image from "next/image";

const features = [
  "NDA & GDPR Compliance",
  "Dedicated Account Manager for UK Region",
  "UK-Level Quality, Indian-Level Cost",
  "Tech-Driven with Marketing Vision",
  "Virtual Office in London for Local Presence",
];

const ClientTrust = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          paddingTop: 4,
          background: `linear-gradient(180deg, #FFFFFF 0%, #E5FFFB 100%)`,
        }}
      >
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 7, lg: 7 }}
            paddingBottom={5}
            //   columns={{ xs: 4, sm: 8, md: 4 }}
          >
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Box py={1}>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontFamily: "sen, sans-serif",
                    whiteSpace: "nowrap",
                    lineHeight: "130%",
                    color: "#322C3E",
                    fontSize: {
                      xs: "22px",
                      sm: "32px",
                      md: "40px",
                      lg: "40px",
                    },
                  }}
                >
                  {` Why UK Clients`}
                  <br />
                  {`  Trust VyomEdge`}
                </Typography>
                <br />
                {features.map((text, index) => (
                  <Box
                    px={{ xs: 2, sm: 2, md: 2, lg: 2 }}
                    py={{ xs: 2, sm: 2, md: 2, lg: 2 }}
                    mb={2}
                    key={index}
                    sx={{
                      textAlign: { xs: "left", sm: "left", md: "center" },
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                      boxShadow: "0px 0px 2px #ddd",
                      Width: "300px",
                      // maxWidth: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#322C3E",
                      }}
                    >
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Box sx={{ width: "100%", textAlign: "left" }}>
                <Typography
                  sx={{
                    frontFamily: "Manrope, sans-serif",
                    fontWeight: 500,
                    lineHeight: "160%",
                    color: "#443B56",
                    fontSize: {
                      xs: "18px",
                      sm: "18px",
                      md: "18px",
                      lg: "18px",
                    },
                    mb: 4,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `
                       We understand the challenges UK businesses face when outsourcing — lack of clarity, 
                       time-zone friction, missed expectations. With VyomEdge UK, you experience none of that. We combine the 
                        <span style="color:#7600C4">cost advantage of offshore</span> teams with the
                    <span style="color:#7600C4">professionalism and precision of UK agencies.</span>`,
                  }}
                />

                <Box
                  width={{ xs: "100%", md: "100%" }}
                  display="flex"
                  justifyContent="center"
                >
                  <Image
                    src="/clientTrust.png"
                    alt="Aboutus UK"
                    width={500}
                    height={430}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ClientTrust;
