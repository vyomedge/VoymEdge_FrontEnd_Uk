import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  IconButton,
  Stack,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { footerstyle } from "@/styles/footerstyle";

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const socialLinks = [
    {
      src: "/whatsappicon.svg",
      alt: "WhatsApp",
      url: "https://wa.me/447774709698",
    },
    {
      src: "/instaicon.svg",
      alt: "Instagram",
      url: "https://www.instagram.com/vyomedge_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    { src: "/twittericon.svg", alt: "Twitter", url: "https://x.com/vyomedge" },
    {
      src: "/facebookicon.svg",
      alt: "Facebook",
      url: "https://www.facebook.com/vyomedge",
    },
    {
      src: "/linkedinicon.svg",
      alt: "LinkedIn",
      url: "https://www.linkedin.com/company/vyom-edge/",
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(50, 44, 62, 0.9), rgba(50, 44, 62, 0.9)), url("/footerimag.webp")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        pt: 10,
        pb: 2,
      }}
    >
      <Container>
        <Grid
          item
          xs={12}
          sm={4}
          md={2}
          display="flex"
          justifyContent="space-between"
          pb={3}
        >
          <Box
            sx={{
              gap: "1px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            {isClient && (
              <Box
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  width: "fit-content",
                  "&:hover": { textDecoration: "underline" },
                  mb:3
                }}
              >
                <Typography
                  variant="copytext1"
                  component="copytext1"
                  sx={{
                    fontSize: { xs: "16px", sm: "16px", md: "18px" },
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
            {[
              { label: "Services", href: "/services" },
              { label: "Packages", href: "/packages" },
              { label: "About Us", href: "/aboutus" },
              { label: "Contact", href: "/contactus" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="copytext1"
                  component="copytext1"
                  sx={{
                    fontSize: { xs: "12px", sm: "13px", md: "15px" },
                    fontWeight: 500,
                    // mb: 2,
                    // mt: 2,
                    color: "white",
                    textDecoration: "none",
                    underline: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box>
            <Box align="right">
              <Link href="/" passHref legacyBehavior>
                <a>
                  <Box sx={{ display: "block", mb: 2 }}>
                    <Image
                      src="/logo.svg"
                      alt="Logo"
                      title="Logo"
                      width={80}
                      height={60}
                      style={{ height: "auto" }}
                    />
                  </Box>
                </a>
              </Link>

              <Box
                sx={{
                  textAlign: "right",
                  display: { xs: "grid", md: "grid" },
                  gap: "10px",
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

                {/* <Typography
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
                </Typography> */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "right",
                    gap: 0.2,
                    mt: 0,
                  }}
                >
                  {socialLinks.map(({ src, alt, url }, i) => (
                    <IconButton
                      data-testid="notify-button"
                      key={i}
                      component="a"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={alt}
                      sx={footerstyle.footericonhover}
                    >
                      <Image src={src} alt={alt} title={alt} width={20} height={20} />
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <hr />
      </Container>

      <Box sx={{ color: "white", pt: 2 }}>
        <Container maxWidth="lg">
          <Grid
            container
            sx={{
              display: { xs: "flex", sm: "flex:", md: "flex", lg: "flex" },
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Left - Copyright */}
            <Grid item xs={12} sm={4} md={6}>
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
            <Grid item xs={12} sm={8} md={6}>
              <Typography
                variant="copytext1"
                component="copytext1"
                sx={{ fontSize: "13px", textAlign: "right", color: "white" }}
              >
                <Link
                  href="/privacyPolicy"
                  underline="hover"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {`  Privacy Policy`}
                </Link>{" "}
                <span style={{ color: "lightgreen", fontSize: "20px" }}>
                  &#8226;
                </span>
                <Link
                  href="/termsAndConditions"
                  underline="hover"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {` Terms & Conditions`}
                </Link>{" "}
                <span style={{ color: "lightgreen", fontSize: "20px" }}>
                  &#8226;
                </span>
                <Link
                  href="/disclaimer"
                  underline="hover"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {`  Disclaimer`}
                </Link>{" "}
                <span style={{ color: "lightgreen", fontSize: "20px" }}>
                  &#8226;
                </span>
                <Link
                  href="/cookies"
                  underline="hover"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {`  Cookies`}
                </Link>{" "}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
