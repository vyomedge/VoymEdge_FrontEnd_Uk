import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const services = [
  {
    icon: '/ourService1.svg',
    title: "Custom Web App Development",
    description: "Fully tailored solutions, built from scratch.",
  },
  {
    icon: '/ourService2.svg',
    title: "API Integration (REST & GraphQL)",
    description: "Smooth backend connectivity.",
  },
  {
     icon: '/ourService3.svg',
    title: "React Front-End",
    description: "Dynamic UIs with React, Redux, and Hooks.",
  },
  {
     icon: '/ourService4.svg',
    title: "Node.js Backend",
    description: "Scalable and event-driven backend services.",
  },
  {
   icon: '/ourService5.svg',
    title: "Cloud Deployment",
    description: "AWS, Vercel, or Azure setup with CI/CD.",
  },
  {
  icon: '/ourService6.svg',
    title: "Code Maintenance & Upgrades",
    description: "Ongoing support for scalability.",
  },
];

const ServiceCard = ({ icon, title, description }) => (
  <Box
    sx={{
       
      border: "1.8px solid #8A2BE2",
      borderRadius: "12px",
      p: { xs: 2.5, sm: 3 },
      width: "100%",
      maxWidth: 340,
      height: "100%",
      textAlign: "left",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      backgroundColor: "#fff",
      '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: '0px 6px 20px rgba(138, 43, 226, 0.12)',
      },
    }}
  >
    <Box display="flex" alignItems="center" mb={2} 
    >
      <Image src={icon} alt={title} width={50} height={30} style={{ marginRight: 12 }} />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "16px", sm: "18px" },
          color: "#2D2A34",
        }}
      >
        {title}
      </Typography>
    </Box>

    <Typography
      sx={{
        fontSize: { xs: "14px", sm: "15px", md: "18px" },
        fontWeight:"500 ",
        color: "#443B56",
        lineHeight: 1.4,
      }}
    >
      {description}
    </Typography>
  </Box>
);

const MernServices = () => {
  return (
    <Box
      px={{ xs: 5, sm: 3, md: 6 }}
      py={{ xs: 6, sm: 8, md: 10 }}
      maxWidth="1300px"
      mx="auto"
      textAlign="center"
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Sen, serif",
          fontWeight: 600,
          color: "#322C3E",
          fontSize: { xs: "36px", sm: "44px", md: "48px" },
          mb: { xs: 4, sm: 6 },
        }}
      >
      {`  Our MERN Services Include:`}
      </Typography>

      <Grid
        container
        spacing={{ xs: 3, sm: 4 }}
        justifyContent="center" // 
      >
        {services.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            display="flex"
            justifyContent="center" 
          >
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MernServices;
