import { Grid, Typography, Box, Container } from "@mui/material";
import React from "react";

const OurMission = () => {
  return (
    <Container>
      <Grid
        textAlign="center"
        py={{ xs: "5px", sm: "5px", md: "10px", lg: "10px" }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: "sen, sans-serif",
              whiteSpace: "nowrap",
              lineHeight: "130%",
              color: "#322C3E",
              fontSize: { xs: "32px", sm: "46px", md: "56px", lg: "56px" },
              textAlign: "center",
              position: "relative",
              display: "inline-block",
              marginBottom:3,
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "3px",
                background:
                  "linear-gradient(to right, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))",
              },
            }}
          >
            {`Our Mission`}
          </Typography>
          <br />
          <Typography
            variant="p"
            component="p"
            mb={{xs:2, md:5}}
            sx={{
              frontFamily: "Manrope, sans-serif",
              fontWeight: "500",
              lineHeight: "160%",
              color: "#443B56",
              fontSize: { xs: "18px", sm: "18px", md: "18px", lg: "18px" },
            }}
            dangerouslySetInnerHTML={{
              __html: `
                  To empower British businesses
                  <Image src="/ArrowG.svg" alt="arrow" title="arrow" style="
                  height: 24px;
                  width: 24px;
                  display: inline-block;
                  vertical-align: middle;
                  margin: 0 6px;
                "/>
                  from high-growth startups to well-established enterprises
                   <Image src="/ArrowG.svg" alt="arrow" title="arrow" style="
                  height: 24px;
                  width: 24px;
                  display: inline-block;
                  vertical-align: middle;
                  margin: 0 6px;
                "/>
                  with robust digital products and results-driven marketing strategies,
                  delivered by a globally competitive offshore team.
                `,
            }}
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default OurMission;
