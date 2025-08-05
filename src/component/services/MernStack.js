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
import { useEffect, useState } from "react";
import ConnectModal from "@/common-component/model/ConnectModel";

const MernStack = () => {
  const theme = useTheme();
  const isMobileOrTab = useMediaQuery(theme.breakpoints.down("md")); // true for xs, sm, md

  const [open, setOpen] = useState(false);

  const handleForm = () => {
    setOpen(true);
  };

  useEffect(() => {
    const alreadyShown = localStorage.getItem("Formshown");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem("Formshown", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <>
      <ConnectModal open={open} setOpen={setOpen} />
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
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
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
                  src="/servicesPic1.png"
                  alt="MERN Stack"
                  width={575}
                  height={430}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "sen, sans-serif",
                    fontWeight: 500,
                    lineHeight: "130%",
                    color: "#322C3E",
                    fontSize: {
                      xs: "32px",
                      sm: "40px",
                      md: "42px",
                      lg: "48px",
                    },
                    mb: 2,
                    whiteSpace: "nowrap",
                  }}
                >
                  {`  Custom MERN Stack`} <br />
                  {` Development`}
                </Typography>

                <Typography
                  sx={{
                    frontFamily: "Manrope, sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: "18px", md: "24px" },
                    lineHeight: "160%",
                    color: "#000",
                    mb: 2,
                  }}
                >
                  {`   Build Powerful, Scalable Web Applications`}
                </Typography>

                <Typography
                  sx={{
                    frontFamily: "Manrope, sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: "15px", md: "18px" },
                    lineHeight: "160%",
                    color: "#000",
                    mb: 3,
                  }}
                >
                  {` We develop fast, secure, and responsive applications using the MERN stack — MongoDB, Express.js, React.js, and Node.js. Ideal for real-time platforms, SaaS products, CRMs, dashboards, and more.`}
                </Typography>

                <CustomButton2
                  data-testid="notify-button"
                  onClick={handleForm}
                  sx={{
                    mx: isMobileOrTab ? "auto" : 0,
                    display: "block",
                    fontSize: "15px",
                    fontWeight: 500,
                    borderRadius: "5px",
                  }}
                >
                  {` Book a free consultation`}
                </CustomButton2>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MernStack;
