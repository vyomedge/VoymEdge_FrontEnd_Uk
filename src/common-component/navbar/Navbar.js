// src/common-component/navbar/Navbar.js
import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';


const navItems = [

  { label: "About Us", href: "/" },
  { label: "Contact", href: "/" },
  { label: "Packages", href: "/" },
  { label: "Services", href: "/" },

];



export default function Navbar() {
  console.log("Navbar rendered");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const pathname = usePathname();
  const isDarkBg = true;
  const iconColor = isDarkBg ? '#FFFFFF' : '#DCFFFA';
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        boxShadow: "none",

      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "center" }}>
          {!isMobile ? (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
              sx={{
                px: 2,
                py: 1,
                width: "fit-content",
              }}
              gap={0}
            >

              {navItems.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <Link key={index} href={item.href} style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        color: isActive ? "black" : "#FFFFFF",
                        borderRadius: "20px",
                        textTransform: "none",
                        fontWeight: 500,
                        px: 2,
                        py: 0.5,
                        minWidth: "auto",
                        fontSize: "14px",
                        position: "relative", top: 10, right: -30, 

                      }}
                    >
                      {item.label}
                    </Button>
                  </Link>

                );
              })}
              <Button
                sx={{
                  position: "absolute", top: 18, right: 200, zIndex: 6,
                  backgroundColor: "transparent",
                  border: "2px solid #4CFFE7",

                  px: 3,
                  py: 1,
                  textTransform: "none",
                  fontWeight: 500,

                  // Gradient text magic:
                  background: 'linear-gradient(135deg, rgba(76, 255, 231, 1) 0%,rgba(118, 0, 196, 1) 50%,rgba(211, 0, 229, 1) 90%)',
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",

                  // Optional: hover effect
                  "&:hover": {
                    backgroundColor: "#4cffef1a",
                  },
                }}
              >
                {`Build with us`}
              </Button>
            </Box>

          ) : (
            <Box display="flex" justifyContent="space-between" width="100%" py="20px" px="15px">
              <Link href="/" passHref>
                <Image src="/VElogo.svg" alt="Logo" width={130} height={31} style={{ cursor: 'pointer' }} />
              </Link>
              <Box
              >
                <IconButton edge="end" color="inherit" onClick={() => setOpenDrawer(true)}
                  sx={{

                    background: isDarkBg
                      ? 'linear-gradient(135deg, rgba(76, 255, 231, 1) 0%,rgba(118, 0, 196, 1) 50%,rgba(211, 0, 229, 1) 100%)'
                      : 'linear-gradient(135deg, rgba(76, 255, 231, 1) 0%,rgba(118, 0, 196, 1) 50%,rgba(211, 0, 229, 1) 100%)',
                    color: isDarkBg ? '#FFFFFF' : '#000000',
                    boxShadow: 'none',
                  }}>
                  <MenuIcon />
                </IconButton>
              </Box>
              <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}
                PaperProps={{
                  sx: {
                    zIndex: 1300, 
                  },
                }}>



                {/* Menu Items */}
                <Box width={250} role="presentation" onClick={() => setOpenDrawer(false)}>
                  <List
                    sx={{

                      color: "#CBEFFF",
                      height: "667px",
                      padding: "15% 25%",
                    }}
                  >
                    {navItems.map((item, index) => (
                      <React.Fragment key={index}>
                        <ListItem disablePadding>
                          <ListItemButton component="a" href={item.href}>
                            <ListItemText primary={item.label} />
                          </ListItemButton>
                        </ListItem>
                        <hr />
                      </React.Fragment>
                    ))}
                  </List>
                </Box>
              </Drawer>


            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
