// components/HeroSection.js
import CustomButton1 from "@/common-component/button/customButton1";
import Link from "next/link";
import { Box, Typography, Stack, Button } from "@mui/material";
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
        background: "linear-gradient(to bottom,rgba(255, 255, 255, 1), rgba(220, 255, 250, 1))",
        px: { xs: 0, sm: 0, md: 0, lg: 0 },
        py: { xs: 8, sm: 8, md: 6, lg: 10 },


      }}
    >
      <ConnectModal open={open} setOpen={setOpen} />
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
                fontFamily: 'sen, sans-serif',
                width: "300px",
                textAlign: { xs: "left", sm: "left", md: "left" },
                ml: 4,
                mb: 1, mr: 4,
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
                fontSize: { xs: "15px", sm: "15px", md: "15px" },
                  frontFamily: "Manrope, sans-serif",
                textAlign: { xs: "left", sm: "left", md: "left" },
                ml: 4, mr: 4,
                
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
                whiteSpace: { xs: 'wrap', md: 'nowrap' },
                mb: 3,
                ml: 4,
                mr: 4
              }}
            >
              {`We code. We design. We market. You grow.`}
            </Typography>
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              spacing={0}
              marginTop={{ xs: 0, sm: 0, md: 4, lg: 3 }}
              marginLeft={4}
              alignContent={{ xs: "center", sm: "flex-start", md: "flex-start" }}
            >
              <BorderAnimatedLinkButton handleClick={handleForm} />


            </Stack>
          </Box>
        </Box>
        <Box
          ml={3}
          mr={3}
          sx={{
            flex: 0.5,
            // borderRadius: 2,
            zIndex: 1
          }}
        >
          <Image
            src="/bannerimage.png"
            alt="Bridal Hero"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "top",
              display: "block",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}


