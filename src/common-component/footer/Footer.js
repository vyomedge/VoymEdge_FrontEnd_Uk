import React from 'react'
import { Box, Grid, Typography, Container, IconButton, Stack } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { LinkedIn } from "@mui/icons-material";



export default function Footer() {
  return (
    <Box sx={{
      bgcolor: "#322C3E",
      py: { xs: 3, sm: 5, md: 4 },
      px: { xs: 3, sm: 5, md: 5 }
    }}>
      <Container>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "16px", sm: "16px", md: "18px" },
            mb: 1, fontWeight: 500, color: "white",
            fontFamily: "Manrope,Sans-serif",
            textDecoration: "none",
            underline: "none",
            "&:hover": {
              textDecoration: "underline",
              cursor: "pointer"
            },
          }}
        >
          {` Back to top`}
        </Typography>
        <Grid item xs={12} sm={4} md={4}
          display="flex"
          justifyItems="center"
          justifyContent="space-between"
          gap={{ xs: 3, sm: 5, md: 1 }}
        >
          <Box

            sx={{
              textAlign: "left", width: "130px",
              py: { xs: 3, sm: 5, md: 1 },
              px: { xs: 3, sm: 5, md: 1 },

              display: { xs: "contents", md: "grid" }, gap: "1px"
            }}>

            <Stack> {[
              { label: "About Us", href: "/" },
              { label: "Contact", href: "/" },
              { label: "Packages", href: "/" },
              { label: "Services", href: "/" },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }} >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "14px", sm: "14px", md: "18px" }, fontWeight: 500,
                    mb: 2,
                    mt:1,
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
          <Box alignItems="end">
            <Link href="/" passHref legacyBehavior>
              <a>
                <Box sx={{ display: "inline-block" }}>
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={70}
                    height={60}
                    style={{ height: "auto" }}

                  />
                </Box>
              </a>
            </Link>

            {/* Contact */}
            <Grid item xs={12} sm={4} md={2}>
              <Box sx={{
                textAlign: "left",
                width: "250px",
                padding: { xs: "1px", md: "10px" },
                display: { xs: "grid", md: "grid" },
                gap: "5px",
              }}
              >
                <Typography variant="body2" sx={{ fontSize: { xs: "14px", sm: "14px", md: "18px" }, mb: 1, fontWeight: 500, color: "white" }}>

                  <Box
                    component="a"
                    href="aaaas.com"
                    style={{ color: "white", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                    onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                  >
                    info@vyomedge.com
                  </Box>
                </Typography>

                <Typography variant="body2" sx={{ fontSize: { xs: "14px", sm: "14px", md: "18px" }, mb: 1, fontWeight: 500, color: "white" }}>
                  +91 7974186754
                </Typography>



                <Box>
                  {[
                    { icon: FacebookIcon, url: "https://www.facebook.com" },
                    { icon: InstagramIcon, url: "https://www.instagram.com" },
                    { icon: TwitterIcon, url: "https://twitter.com" },
                    { icon: YouTubeIcon, url: "https://www.youtube.com" },
                    { icon: LinkedIn, url: "https://www.linkedin.com" },
                  ].map(({ icon: Icon, url }, i) => (
                    <IconButton
                      key={i}
                      sx={{ color: "white", p: 0.5 }}
                      size="small"
                      component="a"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon fontSize="small" />
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>

      </Container>
       {/* Bottom mustard section */}
      <Box sx={{  color: "white", py: 0.5 }}>
        <Container maxWidth="lg">
          <Grid container sx={{ display: { xs: "block", md: "flex" } }} alignItems="center" justifyContent="space-between">
            {/* Left - Copyright */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "13px",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
               Copyright © 2025. vyomedge
              </Typography>
            </Grid>

            {/* Center - Policies */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="body2"

                sx={{ fontSize: "13px", textAlign: "center", color: "white" }}
              >
               
                <Link href="/privacy-policy" underline="hover" style={{ color: "white", textDecoration: "none" }}>
                  Privacy Policy
                </Link>{" "}
                .
                <Link href="/terms" underline="hover" style={{color: "white", textDecoration: "none" }}>
                  Terms & Conditions
                </Link>{" "}
                .
                <Link href="/disclaimer" underline="hover" style={{ color: "white", textDecoration: "none" }}>
                  Disclaimer
                </Link>{" "}
                </Typography>
            </Grid>

         
          </Grid>
        </Container>
      </Box>
    </Box>


  )
}
