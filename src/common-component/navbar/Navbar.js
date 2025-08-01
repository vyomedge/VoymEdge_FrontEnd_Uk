// src/common-component/navbar/Navbar.js
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import CustomButton1 from '../button/customButton1';
import ConnectModal from "@/common-component/model/ConnectModel";


const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "About Us", href: "/aboutus" },
  { label: "Contact", href: "/contactus" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const pathname = usePathname();
  const isDarkBg = true;

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
    <AppBar position="fixed"
      sx={{
        background: "white",
        boxShadow: "none",
        backdropFilter: "inherit",
        WebkitBackdropFilter: "inherit",
        height:"80px"

      }}
    >
      <ConnectModal open={open} setOpen={setOpen} />

      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "center" }}>
          {!isMobile ? (
            <Box display="flex" alignItems="center" 
            justifyContent="space-between" 
            sx={{ px: 2, py: 1, width: "fit-content" }} 
            gap={0.5}>
              {/* Logo */}
              <Link href="/" passHref>
                <Box
                  display="flex"
                  alignItems="center"
                 
                  sx={{
                    position: "absolute",
                    top: 18,
                    left: { xs: 10, sm: -50, md: "10px", lg: 0 },
                    zIndex: 6,
                    cursor: "pointer",
                  }}
                >
                  <Image src="/VElogo.svg" alt="Logo" width={250} height={31} style={{ maxWidth: "100%", height: "auto" }} />
                </Box>
              </Link>

              {/* Nav Links */}
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                
                  <Link key={index} href={item.href} style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        color: isActive ? "#D300E5" : "#443B56",
                        borderRadius: "20px",
                        textTransform: "none",
                        fontWeight: 500,
                        px: 2,
                        py: 0.5,
                        minWidth: "auto",
                        fontSize: "14px",
                        position: "relative",
                        top: 10,
                        right: -30,
                      }}
                    >
                      {item.label}
                    </Button>
                  </Link>
                );
              })}

              {/* CTA Button */}
              <CustomButton1
                sx={{
                  position: "absolute",
                  top: 18,
                  right: 160,
                  zIndex: 6,
                  borderRadius:"5px",
                  backgroundColor: "transparent",
                  border: "2px solid #4CFFE7",
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  fontWeight: 500,
                }}
                onClick={handleForm}
              >
                {`Build With Us`}
              </CustomButton1>
            </Box>
          ) : (
            // Mobile View
            <Box display="flex" justifyContent="space-between" width="100%" py="20px" px="15px">
              <Link href="/" passHref>
                <Image src="/VElogo.svg" alt="Logo" width={130} height={31} style={{ cursor: 'pointer' }} />
              </Link>

              <IconButton onClick={() => setOpenDrawer(true)}
                sx={{
                  background: 'linear-gradient(135deg, rgba(76, 255, 231, 1), rgba(118, 0, 196, 1), rgba(211, 0, 229, 1))',
                  color: isDarkBg ? '#FFFFFF' : '#000000',
                  boxShadow: 'none',
                }}>
                <MenuIcon />
              </IconButton>

              <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)} PaperProps={{ sx: { zIndex: 1300 } }}>
                <Box width={250} role="presentation" onClick={() => setOpenDrawer(false)}>
                  <List
                    sx={{
                      background: 'linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                      color: "#CBEFFF",
                      height: "100vh",
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
