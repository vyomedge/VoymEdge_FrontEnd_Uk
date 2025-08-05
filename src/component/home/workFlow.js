import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const workflowSteps = [
  {
    icon: "/workflow1.svg",
    title: "Discovery Call",
    desc: "Understand your goals, budget & timeline.",
  },
  {
    icon: "/workflow2.svg",
    title: "Project Scope & Quote",
    desc: "Detailed proposal with clear deliverables.",
  },
  {
    icon: "/workflow3.svg",
    title: "Agile Execution",
    desc: "Sprint-based deliveries with weekly check-ins.",
  },
  {
    icon: "/workflow4.svg",
    title: "Launch & Support",
    desc: "Post-launch bug fixes, optimisation & marketing.",
  },
];

export default function WorkFlow() {
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        py={{ xs: "20px", sm: "20px", md: "10px" }}
        sx={{
          fontFamily: "sen, sans-serif",
          whiteSpace: "nowrap",
          lineHeight: "130%",
          color: "#322C3E",
          fontSize: { xs: "32px", sm: "46px", md: "45px", lg: "56px" },
          textAlign: "center",
          marginTop:5
        }}
      >
        {`Our Workflow`}
      </Typography>
      <Box
        sx={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          width: "100%",
          py: 5,
          position: "relative",
          background: `linear-gradient(180deg, #FFFFFF 0%, #DCFFFA 100%)`,
        }}
      >
       
        <Box
          sx={{
            display: "inline-flex",
            animation: "scroll-left 25s linear infinite",
            "&:hover": {
              animationPlayState: "paused",
            },
            "@keyframes scroll-left": {
              "0%": { transform: "translateX(0%)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {/* Duplicate content to make loop seamless */}
          {[...workflowSteps, ...workflowSteps].map((step, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                minWidth: "300px",
                px: 3,
              }}
            >
              {/* Icon */}
              <Image src={step.icon} alt={step.title} width={40} height={40} />

              {/* Text */}
              <Box ml={2}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                    fontFamily: "Manrope, sans-serif",
                    color: "#000",
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#555",
                    fontFamily: "Manrope, sans-serif",
                  }}
                >
                  {step.desc}
                </Typography>
              </Box>

              {/* Arrow */}
              {index < workflowSteps.length * 2 - 1 && (
                <Box
                  mx={2}
                  sx={{
                    // transform: isTabletOrMobile ? "rotate(90deg)" : "none",
                    display: "flex",
                    alignItems: "center",
                    width:"100px",
                  }}
                >
                  <Image src="/Arrow.svg" alt="arrow" width={100} height={30} />
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
