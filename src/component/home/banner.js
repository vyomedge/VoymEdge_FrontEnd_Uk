// components/HeroSection.js
import CustomButton1 from "@/common-component/button/customButton1";
import Link from "next/link";
import { Box, Typography, Stack, Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function HeroSection() {
  const [open, setOpen] = useState(false)
  const [autoOpened, setAutoOpened] = useState(false);
  const handleSession = () => {
    setOpen(true)
  };



  return (
    <Box
      width="100%"
      sx={{
        background: "linear-gradient(to bottom,rgba(255, 255, 255, 1), rgba(220, 255, 250, 1))",
        px: { xs: 0, sm: 1, md: 0, lg: 0 },
        py: { xs: 8, sm: 8, md: 5, lg: 6 },


      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },

          justifyContent: "space-between",
          padding: { xs: "10px 0px", sm: "25px 0px", md: "60px 10px" },
        }}
        gap={3}

      >
        {/* Text Section */}
        <Box flex={1} display="flex" flexDirection="column" justifyContent="center" position="relative"
        >


          <Box sx={{
            zIndex: 5, width: { xs: '100%', sm: '100%', md: '100%' },
            height: { xs: '100%', sm: "100%", md: '100%', lg: '50%' },
            position: { xs: "initial", sm: "initial", md: "absolute" },
            top: { xs: "20px", sm: "100px", md: "40px", lg: "60px" },
            left: { xs: 0, sm: 0, md: 0, }, mt: { xs: "4px", sm: "15px", md: 0, lg: 0 }
          }}>
            <Typography
              variant="h1"
              component="h1"
              fontWeight="regular"
              sx={{

                // position:"absolute",
                fontSize: { xs: "36px", sm: "46px", md: "54px" },
                fontFamily: 'sen, serif',
                width: "300px",
                textAlign: { xs: "left", sm: "left", md: "left" },
                ml: 5,
                mb: 1,
                whiteSpace: { xs: 'wrap', sm: 'nowrap', md: 'nowrap', lg: 'nowrap' },
              }}
              dangerouslySetInnerHTML={{
                __html: `
                          Scalable Digital Solutions <br/> for 
                          <span style="
                            background: linear-gradient(135deg, rgba(76, 255, 231, 1), rgba(118, 0, 196, 1), rgba(211, 0, 229, 1));
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            display: inline-block;
                          ">
                            UK Businesses
                          </span>
                        `
              }}>
            </Typography>

            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: "#443B56", mb: 2, fontWeight: 500,
                fontSize: { xs: "14px", sm: "15px", md: "15px" },
                frontFamily: "Manrope,Sans-serif",
                textAlign: { xs: "left", sm: "left", md: "left" },
                ml: 5,
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
                fontSize: { xs: "14px", sm: "15px", md: "15px" },
                frontFamily: "Manrope,Sans-serif",
                fontWeight: 500,
                whiteSpace: { xs: 'wrap', md: 'nowrap' },
                mb: 3,
                ml: 5,
              }}
            >
              {`We code. We design. We market. You grow.`}
            </Typography>
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              spacing={2}
              marginTop={{ xs: 0, sm: 0, md: 4, lg: 5 }}
              marginLeft={5}
              alignContent={{ xs: "center", sm: "flex-start", md: "flex-start" }}
            >
              <Link href="/contactus" passHref legacyBehavior>
                <a style={{ textDecoration: 'none' }}>
                  <CustomButton1
                    onClick={() => console.log('Booked!')}
                    sx={{ borderRadius: '5px', mt: 4, fontSize: '15px', fontWeight: "500" }}
                  >
                    {`Get a Free Strategy Session`}
                  </CustomButton1>

                </a>
              </Link>

            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            position: "relative",
            display: "flex",
            justifyContent: {
              xs: "center", // mobile
              sm: "center", // tablet
              md: "flex-end" // desktop
            },
            right: {
              xs: 0,
              sm: 0,
              md: "20px", // apply offset only in desktop
            },
            alignItems: "center",
            width: { xs: "100%", sm: "100%", md: "450px", lg: "550px" },  // responsive width
            height: { xs: "200px", sm: "200px", md: "300px", lg: "400px" }, // responsive height
            mx: "auto" // center horizontally
          }}
        >
          <Image
            src="/bannerimage.png"
            alt="Banner"
            fill  // important for full responsiveness
            style={{ objectFit: "contain" }} // or "cover" based on your need
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 600px"
          />
        </Box>

      </Box>
    </Box>
  );
}


