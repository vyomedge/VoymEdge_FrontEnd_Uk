import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  List,
  ListItem,
  Avatar,
  Container,
} from "@mui/material";
import Image from "next/image";
import { IconButton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";
import CustomButton2 from "@/common-component/button/customButton2";

const WeOffer = () => {
  const cardData = [
    {
      title: "Custom MERN Stack Development",
      subtitle: "Build fast, scalable web apps with MongoDB.",
      line: "Express, React, and Node.js.",
      image: "/WeOffer1.png",
      features: [
        "REST/GraphQL APIs",
        "Cloud deployment",
        "React Hooks",
        "CI/CD pipelines",
      ],
    },
    {
      title: "Python & Django Development",
      subtitle: "Secure, backend-heavy apps using Django,",
      line: "Flask & FastAPI.",
      image: "/WeOffer2.png",
      features: [
        "PostgreSQL",
        "Redis",
        "Celery tasks",
        "Role-based access",
        "GDPR-ready",
      ],
    },
    {
      title: "UI/UX Design & Prototyping",
      subtitle: "Intuitive, accessible interfaces built with Figma.",
      line: "& Adobe XD.",
      image: "/WeOffer3.png",
      features: [
        "WireFrames",
        "Design systems",
        "WCAG compliance",
        "UX audits",
      ],
    },
    {
      title: "Digital Marketing & SEO (UK)",
      subtitle: "Targeted strategies for UK visibility & growth.",
      image: "/WeOffer4.png",
      features: [
        "Local SEO",
        "Technical audits",
        "Meta/Google Ads",
        "UK-focused content",
      ],
    },
  ];
  return (
    <Box textAlign="center">
      <Box
        px={{ xs: "50px", sm: "55px", md: "60px", lg: "100px" }}
        py={{ xs: "10px", sm: "20px", md: "30px", lg: "30px" }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontFamily: "sen, sans-serif",
            whiteSpace: "nowrap",
            lineHeight: "130%",
            color: "#322C3E",
            fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "56px" },
          }}
        >
          {` What We Offer`}
        </Typography>
        <Typography
          variant="p"
          component="p"
          textAlign="center"
          sx={{
            frontFamily: "Manrope, sans-serif",
            fontWeight: 500,
            lineHeight: "160%",
            color: "#443B56",
            fontSize: { xs: "15px", sm: "15px", md: "15px", lg: "15px" },
          }}
        >
          {` Scalable tech solutions, smart design, and UK-focused marketing, all under one roof.`}
        </Typography>
      </Box>
      <Box
        sx={{
          // px: { xs: 2, sm: 6 },
          // py: { xs: 4, sm: 4},
          pb: 4,
          background:
            "linear-gradient(to bottom,rgba(255, 255, 255, 1), rgba(220, 255, 250, 1))",
        }}
      >
        <Container>
          <Grid
            container
            spacing={{ lg: 4, md: 2, sm: 2, xs: 2 }}
            justifyContent="center"
          >
            {cardData.map((card, index) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                <Card
                  elevation={3}
                  sx={{
                    position:"relative",
                    textAlign: "left",
                    borderRadius: 1.5,
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-3px)",
                    },
                    px: "20px",
                    pt: "20px",
                    pb: "10px",
                    width: {
                      xs: 300,
                      sm: 330,
                      md: 400,
                      lg: 400,
                    },
                    height: {
                      md: "100%",
                      sm: "100%",
                      xs: "auto",
                    },
                    "&:hover .hover-box": {
                      opacity: 1,
                      visibility: "visible",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", height: 200 }}>
                    <Image
                      src={card.image}
                      alt={card.title}
                      layout="fill"
                      // objectFit="cover"
                      title="vyomedge offer image"
                    />
                  </Box>
                  {/* <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                    }}
                    textAlign="left"
                  > */}
                  <Box sx={{ mt: 2 }}>
                    <Typography
                      variant="h3"
                      component="h3"
                      sx={{
                        frontFamily: "Manrope, sans-serif",
                        fontWeight: 500,
                        fontSize: "20px",
                        mb: 1,
                        background:
                          "linear-gradient(135deg, rgba(211, 0, 229, 1) , rgba(118, 0, 196, 1),rgba(76, 255, 231, 1))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block",
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      sx={{
                        frontFamily: "Manrope, sans-serif",
                        color: "#555",
                        mb: 0,
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      {card.subtitle}
                    </Typography>
                    <Typography
                      sx={{
                        frontFamily: "Manrope, sans-serif",
                        color: "#555",
                        mb: 0,
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      {card.line}
                    </Typography>

                    <List dense sx={{ pl: 3 }}>
                      {card.features.map((feature, i) => (
                        <ListItem
                          key={i}
                          sx={{
                            frontFamily: "Manrope, sans-serif",
                            pl: 0,
                            fontSize: "12px",
                            fontWeight: 500,
                            color: "#444",
                            display: "list-item",
                            listStyle: "disc",
                          }}
                        >
                          {feature}
                        </ListItem>
                      ))}
                    </List>
                    {/* </CardContent> */}
                  </Box>
                  <Box
                    className="hover-box"
                    sx={{
                      position: "absolute",
                      bottom: "20px",
                      right: "20px",
                      justifyContent: "flex-end",
                      visibility: {
                        lg: "hidden",
                        md: "hidden",
                        sm: "visible",
                        xs: "visible",
                      },
                      opacity: {
                        lg: 0,
                        md: 0,
                        sm: 1,
                        xs: 1,
                      },
                      transition: "opacity 0.5s ease, visibility 0.5s ease",
                    }}
                  >
                    <Link href="/services" passHref>
                      <IconButton
                        data-testid="notify-button"
                        sx={{
                          bgcolor: "#E3F2FD",
                          color: "#D300E5",
                          border: "2px solid #4CFFE7",
                          width: 40,
                          height: 40,
                          "&:hover": {
                            cursor: "pointer",
                          },
                        }}
                      >
                        <KeyboardArrowRightIcon />
                      </IconButton>
                    </Link>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Link href="/services"> 
             <CustomButton2
                  data-testid="notify-button"
                
                  sx={{
                    borderRadius: "5px",
                    mt: 1,
                    fontSize: "15px",
                    fontWeight: "500",
                    mt:"25px"
                  }}
                >
                  {`View all services`}
                </CustomButton2>
          </Link>
        </Container>
      </Box>
    </Box>
  );
};

export default WeOffer;
