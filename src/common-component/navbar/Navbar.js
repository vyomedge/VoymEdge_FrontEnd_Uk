// src/common-component/navbar/Navbar.js
import React, { useState, useEffect } from "react";
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
import { usePathname } from "next/navigation";
import CustomButton1 from "../button/customButton1";
import ConnectModal from "@/common-component/model/ConnectModel";
import BorderAnimatedLinkButton from "../button/botton";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "About Us", href: "/aboutus" },
  { label: "Contact", href: "/contactus" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
  const pathname = usePathname();
  const isDarkBg = true;

  const handleForm = () => {
    setOpen(true);
  };

  // useEffect(() => {
  //   const alreadyShown = localStorage.getItem("Formshown");
  //   if (!alreadyShown) {
  //     const timer = setTimeout(() => {
  //       setOpen(true);
  //       localStorage.setItem("Formshown", "true");
  //     }, 5000);
  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyShown = sessionStorage.getItem("Formshown");
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("Formshown", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!mounted) return null; // or return a loading skeleton

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "white",
        boxShadow: "none",
        backdropFilter: "inherit",
        WebkitBackdropFilter: "inherit",
        height: "80px",
      }}
    >
      <ConnectModal open={open} setOpen={setOpen} />

      <Container>
        <Toolbar disableGutters sx={{ justifyContent: "center" }}>
          {!isMobile ? (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{ px: 2, py: 1, width: "fit-content" }}
              gap={0.5}
            >
              {/* Logo */}
              <Link href="/" passHref>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{
                    position: "absolute",
                    top: 18,
                    left: 0,
                    zIndex: 6,
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src="/VElogo.svg"
                    alt="Logo"
                    width={250}
                    height={31}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Box>
              </Link>

              {/* Nav Links */}
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      sx={{
                        color: isActive ? "#D300E5" : "#443B56",
                        borderRadius: "20px",
                        textTransform: "none",
                        fontWeight: 500,
                        px: 1,
                        py: 0.5,
                        // minWidth: "auto",
                        fontSize: "15px",
                        // position: "relative",
                        top: 10,
                        right: -30,
                        fontFamily: "sen, sans-serif",
                      }}
                    >
                      {item.label}
                    </Button>
                  </Link>
                );
              })}

              {/* CTA Button */}
              {/* <CustomButton1
                sx={{
                  position: "absolute",
                  top: 18,
                  right: 0,
                  zIndex: 6,
                  borderRadius: "5px",
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
              </CustomButton1> */}
              <BorderAnimatedLinkButton
                sx={{
                  position: "absolute",
                  top: 5,
                  right: 0,
                  zIndex: 6,
                  borderRadius: "5px",
                  backgroundColor: "transparent",
                  // border: "2px solid #4CFFE7",
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  fontWeight: 500,
                }}
                handleClick={handleForm}
                title={`Build With Us`}
              />
            </Box>
          ) : (
            // Mobile View
            <Box
              display="flex"
              justifyContent="space-between"
              width="100%"
              py="20px"
            >
              <Link href="/" passHref>
                <Image
                  src="/VElogo.svg"
                  alt="Logo"
                  width={160}
                  height={35}
                  style={{ cursor: "pointer" }}
                />
              </Link>

              <IconButton onClick={toggleDrawer(true)}>
                <Image
                  src="/hamburgmenu.png"
                  alt="Logo"
                  width={25}
                  height={20}
                  style={{ cursor: "pointer", resize: "contain" }}
                  onClick={toggleDrawer(true)}
                />
              </IconButton>

              <Drawer
                anchor="right"
                open={openDrawer}
                onClose={toggleDrawer(false)}
                PaperProps={{ sx: { zIndex: 1300 } }}
              >
                <Box width={250} role="presentation">
                  <IconButton
                    onClick={() => setOpenDrawer(false)}
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      zIndex: 9999,
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <List
                    sx={{
                      // background:
                      //   "linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))",
                      color: "#000",
                      height: "90vh",
                      padding: "50px 20px 0px 20px",
                    }}
                  >
                    {navItems.map((item, index) => {
                      const isActive = pathname === item.href;
                      return (
                        <React.Fragment key={index}>
                          <Link href={item.href} passHref legacyBehavior>
                            <ListItem disablePadding>
                              <ListItemButton
                                component="a"
                                onClick={() => setOpenDrawer(false)}
                              >
                                <ListItemText
                                  primary={item.label}
                                  sx={{
                                    textAlign: "center",
                                    color: isActive ? "#D300E5" : "#443B56",
                                  }}
                                />
                              </ListItemButton>
                            </ListItem>
                          </Link>
                          <hr />
                        </React.Fragment>
                      );
                    })}

                    <BorderAnimatedLinkButton
                      sx={{
                        position: "absolute",
                        bottom: 25,
                        right: 50,
                        zIndex: 6,
                        borderRadius: "5px",
                        backgroundColor: "transparent",
                        border: "2px solid #4CFFE7",
                        px: 3,
                        py: 1,
                        textTransform: "none",
                        fontWeight: 500,
                      }}
                      handleClick={handleForm}
                      title={`Build With Us`}
                    />
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
