import React from 'react'
import { Box, Grid, Typography, Container, IconButton, Stack } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const socialLinks = [
    { src: '/whatsappicon.svg', alt: 'WhatsApp', url: 'https://wa.me/447774709698' },
    { src: '/instaicon.svg', alt: 'Instagram', url: 'https://www.instagram.com/vyomedge_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { src: '/twittericon.svg', alt: 'Twitter', url: 'https://x.com/vyomedge' },
    { src: '/facebookicon.svg', alt: 'Facebook', url: 'https://www.facebook.com/vyomedge' },
    { src: '/linkedinicon.svg', alt: 'LinkedIn', url: 'https://www.linkedin.com/company/vyom-edge/' },
  ];

  return (
    <Box 
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(50, 44, 62, 0.9), rgba(50, 44, 62, 0.9)), url("/footerimag.webp")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        py: 5,
      }}>
      <Container >
        {isClient && (
          <Box
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              width: 'fit-content',
              "&:hover": { textDecoration: 'underline' },
            }}
          >

            <Typography
              variant="copytext1"
              component="copytext1"
              sx={{
                fontSize: { xs: "16px", sm: "16px", md: "18px" },
                py: { xs: 0, sm: 1, md: 1, lg: 1 },
                fontWeight: 500,
                color: "white",
                fontFamily: "Manrope, Sans-serif",
              }}
            >
              {` Back to top`}
            </Typography>
            <KeyboardArrowUpIcon sx={{ color: "#4CFFE7", mr: 1 }} />
          </Box>
        )}
        <Grid item xs={12} sm={4} md={2}
          display="flex"
          justifyItems="flex-end"
          justifyContent="space-between"
          gap={{ xs: 3, sm: 5, md: 1 }}
        >
          <Box
            sx={{
              // textAlign: "left", width: "130px",
              py: { xs: 3, sm: 5, md: 3 },
              display: { xs: "contents", md: "grid" },
              gap: "1px",
              lineHeight: "30px"
            }}>
            <Stack> {[

              { label: "Services", href: "/services" },
              { label: "Packages", href: "/packages" },
              { label: "About Us", href: "/aboutus" },
              { label: "Contact", href: "/contactus" },

            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }} >
                <Typography
                  variant="copytext1"
                  component="copytext1"
                  sx={{
                    fontSize: { xs: "14px", sm: "14px", md: "18px" },
                    fontWeight: 500,
                    mb: 2,
                    mt: 2,
                    color: "white",
                    textDecoration: "none",
                    underline: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}>
                  {item.label}
                </Typography>

              </Link>

            ))}</Stack>
          </Box>
          <Box >
            <Box align="right" py="8px" >
              < Link href="/" passHref legacyBehavior>
                <a>
                  <Box sx={{ display: "block" }}>
                    <Image
                      src="/logo.svg"
                      alt="Logo"
                      width={80}
                      height={60}
                      style={{ height: "auto" }}
                    />
                  </Box>
                </a>
              </Link>

              {/* Contact */}
              <Grid item xs={12} sm={4} md={2}>
                <Box sx={{
                  textAlign: "right",
                  // width: "250px",
                  px: { xs: "8px", md: "10px" },
                  py: { xs: "1px", md: "10px" },
                  display: { xs: "grid", md: "grid" },
                  gap: "5px",
                }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "15px", color: "#E4E4E4", fontWeight: 400 }}
                  >

                    <Box
                      component="a"
                      href="mailto:info@vyomedge.com"
                      style={{ color: "white", textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        (e.target.style.textDecoration = "underline")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.textDecoration = "none")
                      }
                    >
                      info@vyomedge.com
                    </Box>
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ fontSize: "15px", color: "#E4E4E4", fontWeight: 400 }}
                  >

                    <a
                      href="tel:+447774709698"
                      style={{ color: "#E4E4E4", textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        (e.target.style.textDecoration = "underline")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.textDecoration = "none")
                      }
                    >
                      +44 7774709698
                    </a>
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: "right", gap: 2, mt: 0 }}>
                    {socialLinks.map(({ src, alt, url }, i) => (
                      <IconButton data-testid="notify-button"
                        key={i}
                        component="a"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={alt}
                        sx={{ p: 0 }}
                      >
                        <Image src={src} alt={alt} width={20} height={20} />
                      </IconButton>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Grid >
      </Container >
      {/* Bottom section */}
      < Box sx={{ color: "white", py: 0 }
      }>
        <Container maxWidth="lg">
          <Grid container sx={{ display: { xs: "block", sm: "flex:", md: "flex", lg: "flex" } }} alignItems="center" justifyContent="space-between">
            {/* Left - Copyright */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="copytext1"
                component="copytext1"
                sx={{
                  fontSize: "13px",
                  textAlign: { xs: "left", sm: "left", md: "left", lg: "left" },
                }}
              >
                {`  Copyright © 2025. vyomedge`}
              </Typography>
            </Grid>

            {/* Center - Policies */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="copytext1"
                component="copytext1"

                sx={{ fontSize: "13px", textAlign: "right", color: "white" }}
              >

                <Link href="/privacyPolicy" underline="hover" style={{ color: "white", textDecoration: "none" }}>
                  {`  Privacy Policy`}
                </Link>{" "}
                .
                <Link href="/termsAndConditions" underline="hover" style={{ color: "white", textDecoration: "none" }}>
                  {` Terms & Conditions`}
                </Link>{" "}
                .
                <Link href="/disclaimer" underline="hover" style={{ color: "white", textDecoration: "none" }}>
                  {`  Disclaimer`}
                </Link>{" "}
                .
                <Link href="/cookies" underline="hover" style={{ color: "white", textDecoration: "none" }}>
                  {`  Cookies`}
                </Link>{" "}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box >
    </Box >


  )
}
