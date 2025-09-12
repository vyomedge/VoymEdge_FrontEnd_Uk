import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CustomButton1 from "../button/customButton1";
import CustomButton2 from "../button/customButton2";
import Link from "next/link";
import BorderAnimatedLinkButton from "../button/botton";

const FreeCall = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(to bottom,rgba(255, 255, 255, 1), rgba(220, 255, 250, 1))",
          py:3
      }}
    >
      <Container>
        <Grid position="relative" alignItems="center" textAlign="center" pb={3}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: "sen, sans-serif",
              whiteSpace: "wrap",
              lineHeight: "130%",
              color: "#08070aff",
              fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "48px" },
            }}
          >
            {`Let's bring your digital vision to life`}
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: "sen, sans-serif",
              whiteSpace: "wrap",
              fontWeight: "500",
              lineHeight: "130%",
              fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "56px" },
              background:
                "linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {`affordable, reliable, and seamlessly.`}
          </Typography>

          <Typography
             variant="p"
            component="p"
            sx={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 500,
              lineHeight: "160%",
              color: "#443B56",
              fontSize: { xs: "15px", sm: "15px", md: "15px", lg: "15px" },
              py: "10px",
            }}
          >
            Speak to our{" "}
            <Box
               variant="p"
            component="p"
              sx={{
                position: "relative",
                display: "inline-block",
                pb: "2px",
                backgroundImage:
                  "linear-gradient(90deg, #D300E5 0%, #7600C4 50%, #4CFFE7 100%)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 1px",
                backgroundPosition: "0 100%",
              }}
            >
             {` UK consultant`}
            </Box>{" "}
            or{" "}
            <Box
               variant="p"
            component="p"
              sx={{
                position: "relative",
                display: "inline-block",
                pb: "2px",
                backgroundImage:
                  "linear-gradient(90deg, #D300E5 0%, #7600C4 50%, #4CFFE7 100%)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 1px",
                backgroundPosition: "0 100%",
              }}
            >
             {` request a free proposal.`}
            </Box>
          </Typography>
          <Box display="flex" gap={2} justifyContent="center">
            <Link href="tel:+447774709698" passHref legacyBehavior style={{ textDecoration: "none" }}>
             
                <CustomButton1
                  data-testid="notify-button"
                  onClick={() => console.log("Booked!")}
                  sx={{
                    borderRadius: "5px",
                    mt: 1,
                    fontSize: "15px",
                    fontWeight: "500",
                    textTransform: "lowercase",
                  }}
                >
                  {`Book a Free Call`}
                </CustomButton1>
             
            </Link>
            <Link href="/packages" passHref legacyBehavior style={{ textDecoration: "none" }}>
           
                <CustomButton2
                  data-testid="notify-button"
                  onClick={() => console.log("Booked!")}
                  sx={{
                    borderRadius: "5px",
                    mt: 1,
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {`Get a Quote Now`}
                </CustomButton2>
            
            </Link>
          </Box>

          <Box
            sx={{
              position: "absolute",
              left: "0px",
              bottom: "20px",
              background:
                "linear-gradient(260.31deg, #4CFFE7 0%, #7600C4 41.58%, #D300E5 87.79%)",
              height: 50,
              width: 50,
              borderRadius: "50%",
              opacity: 1,
              filter: "blur(15px)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              right: "0px",
              top: "0px",
              background:
                "linear-gradient(260.31deg, #4CFFE7 0%, #7600C4 41.58%, #D300E5 87.79%)",
              height: 25,
              width: 25,
              borderRadius: "50%",
              opacity: 0.7,
              filter: "blur(8px)",
            }}
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default FreeCall;
