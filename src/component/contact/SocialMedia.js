"use client";

import React from "react";
import { Box, Grid, Typography, IconButton, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  {
    src: "/whatsappicon1.svg",
    alt: "WhatsApp",
    url: "https://www.whatsapp.com",
  },
  {
    src: "/instaicon1.svg",
    alt: "Instagram",
    url: "https://www.instagram.com/vyomedge_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  { src: "/twittericon1.svg", alt: "Twitter", url: "https://x.com/vyomedge" },
  {
    src: "/facebookicon1.svg",
    alt: "Facebook",
    url: "https://www.facebook.com/vyomedge",
  },
  {
    src: "/linkedinicon1.svg",
    alt: "LinkedIn",
    url: "https://www.linkedin.com/company/vyom-edge/",
  },
];

const contactIcons = [
  // { src: "/contactIcon1.svg", alt: "Phone", label: "     +44 7774709698" },
  { src: "/contactIcon2.svg", alt: "Email", label: "info@vyomedge.com" },
  {
    src: "/contactIcon3.svg",
    alt: "Location",
    label: "50 Bostocks Lane, Risley, Derby, England, DE723SX",
  },
];

const SocialMedia = () => {
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
            spacing={{ xs: 2, md: 7, lg: 10 }}
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
                  src="/contact.png"
                  alt="contackus UK"
                  title="contackus UK"
                  width={400}
                  height={430}
                  style={{ maxWidth: "100%", height: "auto" }}
                />

                {/* Social Icons Overlay */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "center",
                    position: "absolute",
                    bottom: 16,
                    left: 0,
                    right: 0,
                  }}
                >
                  {socialIcons.map((item, i) => (
                    <Link
                      key={i}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref
                    >
                      <IconButton
                        data-testid="notify-button"
                        sx={{
                          backgroundColor: "#fff",
                          transition: "0.3s",
                          "&:hover": {
                            background:
                              "linear-gradient(to right, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))",
                            color: "#fff",
                          },
                        }}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          title={item.alt}
                          width={20}
                          height={20}
                          style={{ objectFit: "fill" }}
                        />
                      </IconButton>
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 7, lg: 8 }}>
              <Box textAlign={{ xs: "center", md: "left" }}>
                <Typography
                  variant="h2"
                  component="h2"
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
                  }}
                >
                  {` Contact Us`}
                </Typography>

                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    frontFamily: "Manrope, sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: "15px", md: "16px" },
                    lineHeight: "160%",
                    mt: 1,
                    color: "#4B4B4B",
                    mx: { xs: "auto", md: 0 },
                    position: "relative",
                    display: "inline-block",
                    marginTop: "20px",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -14,
                      left: 0,
                      width: "50%",
                      height: "2px",
                      background:
                        "linear-gradient(to right, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))",
                    },
                  }}
                >
                  {`We’re always ready to discuss new ideas, business challenges, or tech upgrades.
                             Whether you need a full-stack development team or digital growth support, we’re just a
                              message away.`}

                </Typography>
             
                <Box sx={{ mt: 5, ml: 1 }}>
                  {contactIcons.map((item, i) => (
                      
                    <Box display={"flex"} alignItems={"center"} gap={2} key={i} sx={{ my: 2, }} textAlign={"left"}>
                    <Link
                        key={i}
                        href={item.label}

                        rel="noopener noreferrer"
                        passHref
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          title={item.alt}
                          width={30}
                          height={30}
                          style={{ objectFit: "fill" }}
                        />
                        </Link>
                        <Link
                        key={i}
                        href={item.label}

                        rel="noopener noreferrer"
                        passHref
                      >
                        <Typography
                          variant="p"
                          component="p"
                          sx={{
                            fontWeight: 500,
                            color: "inherit",
                            textTransform: "none",
                            textAlign: "start",
                          }}
                        >
                          {item.label}
                        </Typography>
                     </Link>
                    </Box>
                     
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SocialMedia;
