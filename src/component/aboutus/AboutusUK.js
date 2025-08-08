import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import CustomButton2 from "@/common-component/button/customButton2";

const AboutusUK = () => {
  const theme = useTheme();
  const isMobileOrTab = useMediaQuery(theme.breakpoints.down("md")); // true for xs, sm, md

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          paddingTop: 4,
        }}
      >
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 7, lg: 7 }}
            paddingBottom={5}
            //   columns={{ xs: 4, sm: 8, md: 4 }}
          >
            <Grid size={{ xs: 12, sm: 12, md: 5, lg: 4 }}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  mx: "auto",
                  borderRadius: 2,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Image
                  src="/aboutusUK.png"
                  alt="Aboutus UK"
                  title="Aboutus vyomedge"
                  width={500}
                  height={430}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 7, lg: 8 }}>
              <Box textAlign={{ xs: "center", md: "left" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "sen, sans-serif",
                    lineHeight: "130%",
                    color: "#322C3E",
                    fontSize: {
                      xs: "24px", // mobile
                      sm: "32px", // tablet
                      md: "40px", // laptop
                      lg: "48px", // desktop
                    },
                    mb: 2,
                    whiteSpace: "nowrap",
                  }}
                >
                  {`About VyomEdge UK`}
                </Typography>

                <Typography
                  sx={{
                    frontFamily: "Manrope, sans-serif",
                    fontSize: { xs: "18px", md: "24px" },
                    lineHeight: "160%",
                    color: "#000",
                    mb: 2,
                  }}
                >
                  {`Your Offshore Tech & Marketing Partner, Built for the UK Market`}
                </Typography>

                <Typography
                  sx={{
                    frontFamily: "Manrope, sans-serif",
                    fontSize: { xs: "15px", md: "18px" },
                    lineHeight: "160%",
                    color: "#444",
                    mb: 3,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `  <span style="color:#7600C4">VyomEdge UK</span>
            is a dedicated division of VyomEdge — a trusted Indian IT & digital marketing firm — built exclusively to serve 
             <span style="color:#7600C4">UK-based businesses </span> with high-quality, scalable, and cost-effective digital solutions`,
                  }}
                />

                <Typography
                  sx={{
                    frontFamily: "Manrope, sans-serif",
                    fontSize: { xs: "15px", md: "18px" },
                    lineHeight: "160%",
                    color: "#444",
                    mb: 0,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: ` With over a decade of combined team experience, we specialize in
            <span style="color:#7600C4"> MERN Stack development, Python solutions, UI/UX design,</span>
             and   <span style="color:#7600C4">digital marketing </span> support tailored to meet the unique demands of UK startups, agencies, and enterprises.`,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutusUK;
