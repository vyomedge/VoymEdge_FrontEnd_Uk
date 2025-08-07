import React from "react";
import {
  Box,
  Typography,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import WbCloudySharpIcon from "@mui/icons-material/WbCloudySharp";

const services = [
  {
    label: "Manufacturing & Automation",
    icon: "/service3.svg",
    gradient:
      "linear-gradient(135deg, rgba(211, 0, 229, 1) , rgba(118, 0, 196, 1),rgba(76, 255, 231, 1))",
  },
  {
    label: "Legal, Local Government & Public Services",
    icon: "/service4.svg",
    gradient:
      "linear-gradient(135deg, rgba(211, 0, 229, 1) , rgba(118, 0, 196, 1),rgba(76, 255, 231, 1))",
  },
  {
    label: "Education & eLearning Platforms",
    icon: "/service5.svg",
    gradient:
      "linear-gradient(135deg, rgba(211, 0, 229, 1) , rgba(118, 0, 196, 1),rgba(76, 255, 231, 1))",
  },
  {
    label: "Fintech & SaaS Startups",
    icon: WbCloudySharpIcon,
    gradient:
      "linear-gradient(135deg, rgba(211, 0, 229, 1) , rgba(118, 0, 196, 1),rgba(76, 255, 231, 1))",
  },
  {
    label: "Healthcare & Clinics",
    icon: "/service1.svg",
    gradient:
      "linear-gradient(135deg, rgba(211, 0, 229, 1) , rgba(118, 0, 196, 1),rgba(76, 255, 231, 1))",
  },
  {
    label: "eCommerce & Retail",
    icon: "/service2.svg",
    gradient:
      "linear-gradient(135deg, rgba(211, 0, 229, 1) , rgba(118, 0, 196, 1),rgba(76, 255, 231, 1))",
  },
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const containerSize = isMobile ? 280 : isTablet ? 350 : 520;
  const radius = isMobile ? 110 : isTablet ? 140 : 220;
  const avatarSize = isMobile ? 50 : isTablet ? 80 : 100;
  const centerSize = isMobile ? 80 : isTablet ? 100 : 140;

  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        pb: 8,
        textAlign: "center",
        background: "linear-gradient(to bottom, #ffffff, #e6ffff)",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "56px" },
          fontFamily: "sen, sans-serif",
          color: "#322C3E",
          lineHeight: "130%",
          flexWrap: "wrap",
        }}
      >
        {` Industries We Serve in the UK`}
      </Typography>
      {/* <Typography
                variant='h2'
                component="h2"
                sx={{
                    fontSize: { xs: "30px", sm: "46px", md: "56px", lg: "56px" },
                    fontFamily: 'sen, sans-serif',
                    fontWeight: "500",
                    color: "#322C3E",
                    lineHeight: "130%",

                }}>
                {`UK`}
            </Typography> */}

      {/* Orbit Container */}
      <Box
        sx={{
          position: "relative",
          width: containerSize,
          height: containerSize,
          mx: "auto",
          my: { xs: 2, sm: 3, md: 0, lg: 0 },
        }}
      >
        {/* Orbiting Icons */}
        {services.map((service, index) => {
          const angle = (index / services.length) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <Box
              key={index}
              sx={{
                frontFamily: "Manrope, sans-serif",
                position: "absolute",
                left: `calc(50% + ${x}px - ${avatarSize / 2}px)`,
                top: `calc(50% + ${y}px - ${avatarSize / 2}px)`,
                width: avatarSize,
                height: avatarSize + 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  width: avatarSize,
                  height: avatarSize,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  background: service.gradient,
                  p: { xs: 1, sm: 2, md: 3, lg: 3 },
                }}
              >
                {typeof service.icon === "string" ? (
                  <Box
                    component="img"
                    src={service.icon}
                    alt={service.label}
                    title={service.label}
                    sx={{ width: "100%", height: "100%" }}
                  />
                ) : (
                  <service.icon
                    sx={{ fontSize: avatarSize * 0.6, color: "#fff" }}
                  />
                )}
              </Avatar>

              <Typography
                variant="caption"
                sx={{
                  mt: 0.5,
                  fontSize: { xs: "0.6rem", sm: "0.75rem" },
                  textAlign: "center",
                  maxWidth: 120,
                }}
              >
                {service.label}
              </Typography>
            </Box>
          );
        })}

        {/* Center Circle */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: centerSize,
            height: centerSize,
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid #ccc",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            p: 3,
          }}
        >
          <Avatar
            src="/logo.svg"
            alt="Center Icon"
            title="Center Icon"
            variant="circular"
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
