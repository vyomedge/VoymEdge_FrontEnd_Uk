// components/HeroSection.js
import CustomButton1 from "@/common-component/button/customButton1";
import Link from "next/link";
import { Box, Typography, Stack, Button, Container } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import ConnectModal from "@/common-component/model/ConnectModel";
import BorderAnimatedLinkButton from "@/common-component/button/botton";

export default function HeroSection() {
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
    <Box
      width="100%"
      sx={{
        background:
          "linear-gradient(to bottom,rgba(255, 255, 255, 1), rgba(220, 255, 250, 1))",
        px: 0,
        pt: { xs: 10, sm: 8, md: 8, lg: 8 },
      }}
    >
      <ConnectModal open={open} setOpen={setOpen} />
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },

          justifyContent: "space-between",
          // padding: { xs: "10px 0px", sm: "25px 0px", md: "60px 10px" },
        }}
        gap={3}
      >
        {/* Text Section */}
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          position="relative"
        >
          <Box
            sx={{
              zIndex: 5,
              width: { xs: "100%", sm: "100%", md: "100%" },
              height: { xs: "100%", sm: "100%", md: "100%", lg: "50%" },
              position: { xs: "initial", sm: "initial", md: "absolute" },
              top: { xs: "20px", sm: "100px", md: "40px", lg: "60px" },
              left: { xs: 0, sm: 0, md: 0 },
              mt: { xs: "4px", sm: "15px", md: 0, lg: 0 },
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              fontWeight="regular"
              sx={{
                fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "54px" },
                fontFamily: "sen, sans-serif",
                textAlign: { xs: "left", sm: "left", md: "left" },
                m: 2,
              }}
            >
              Scalable Digital Solutions <br /> for{" "}
              <Box
                sx={{
                  display: "inline-block",
                  position: "relative",
                  px: 1,
                }}
              >
                {/* Corner Decorations */}
                {/* Top Left */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "10px",
                    height: "10px",
                    borderTop: "3px solid rgba(118, 0, 196, 1)",
                    borderLeft: "3px solid rgba(118, 0, 196, 1)",
                    animation: "blink 1s infinite",
                    "@keyframes blink": {
                      "0%": { opacity: 1 },
                      "50%": { opacity: 0.5 },
                      "100%": { opacity: 1 },
                    },
                  }}
                />
                {/* Top Right */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "10px",
                    height: "10px",
                    borderTop: "3px solid rgba(118, 0, 196, 1)",
                    borderRight: "3px solid rgba(118, 0, 196, 1)",
                    animation: "blink 1s infinite",
                    "@keyframes blink": {
                      "0%": { opacity: 1 },
                      "50%": { opacity: 0.5 },
                      "100%": { opacity: 1 },
                    },
                  }}
                />
                {/* Bottom Left */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "10px",
                    height: "10px",
                    borderBottom: "3px solid rgba(118, 0, 196, 1)",
                    borderLeft: "3px solid rgba(118, 0, 196, 1)",
                    animation: "blink 1s infinite",
                    "@keyframes blink": {
                      "0%": { opacity: 1 },
                      "50%": { opacity: 0.5 },
                      "100%": { opacity: 1 },
                    },
                  }}
                />
                {/* Bottom Right */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "10px",
                    height: "10px",
                    borderBottom: "3px solid rgba(118, 0, 196, 1)",
                    borderRight: "3px solid rgba(118, 0, 196, 1)",
                    animation: "blink 1s infinite",
                    "@keyframes blink": {
                      "0%": { opacity: 1 },
                      "50%": { opacity: 0.5 },
                      "100%": { opacity: 1 },
                    },
                  }}
                />

                {/* Gradient Text */}
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(76, 255, 231, 1), rgba(118, 0, 196, 1), rgba(211, 0, 229, 1))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "sen, sans-serif",
                    position: "relative",
                    zIndex: 1,
                    backgroundSize: "200% 200%", // makes room for animation
                    animation: "gradientMove 3s linear infinite",

                    "@keyframes gradientMove": {
                      "0%": {
                        backgroundPosition: "0% 0%",
                      },
                      "50%": {
                        backgroundPosition: "100% 100%",
                      },
                      "100%": {
                        backgroundPosition: "0% 0%",
                      },
                    },
                  }}
                >
                {`UK Businesses`}
                </Box>
              </Box>
            </Typography>

            <Typography
              variant="p"
              component={"p"}
              sx={{
                color: "#443B56",
                mb: 2,
                fontWeight: 500,
                fontSize: { xs: "15px", sm: "15px", md: "15px" },
                frontFamily: "Manrope, sans-serif",
                textAlign: { xs: "left", sm: "left", md: "left" },
                ml: 2,
                mr: 2,
              }}
            >
              {`  From cutting-edge web applications to data-driven marketing, VyomEdge UK delivers smart, secure, and scalable technology tailored to British business needs.`}
            </Typography>
            <Typography
              variant="p"
              component={"p"}
              sx={{
                color: "#443B56",
                textAlign: { xs: "left", md: "left" },
                fontSize: { xs: "15px", sm: "15px", md: "15px" },
                frontFamily: "Manrope, sans-serif",
                fontWeight: 500,
                whiteSpace: { xs: "wrap", md: "nowrap" },
                mb: 0,
                ml: 2,
                mr: 2,
              }}
            >
              {`We code. We design. We market. You grow.`}
            </Typography>
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              spacing={0}
              marginTop={{ xs: 0, sm: 0, md: 4, lg: 3 }}
              marginLeft={2}
              alignContent={{
                xs: "center",
                sm: "flex-start",
                md: "flex-start",
              }}
            >
              <BorderAnimatedLinkButton
                handleClick={handleForm}
                title={`Get a Free Strategy Session`}
              />
            </Stack>
          </Box>
        </Box>
        <Box
          ml={3}
          mr={3}
          sx={{
            flex: 0.5,
            // borderRadius: 2,
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: { xs: 250, sm: 400, md: 450, lg: 500 },
              height: { xs: 250, sm: 400, md: 450, lg: 500 },
              position: "relative",
              margin: "auto",
            }}
          >
            <Image
              src="/bannerimage.png"
              alt="vyomedge banner image"
              fill
              style={{
                objectFit: "contain",
              }}
              title="vyomedge banner image"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
