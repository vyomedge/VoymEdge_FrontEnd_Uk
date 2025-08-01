import React from 'react';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import CustomButton2 from '@/common-component/button/customButton2';

const AboutusUK = () => {
  const theme = useTheme();
  const isMobileOrTab = useMediaQuery(theme.breakpoints.down('md')); // true for xs, sm, md

  return (
    <Grid container>
      <Grid
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        gap={{ xs: 4, sm: 5, md: 6 }}
        px={{ xs: 4, sm: 6, md: 10}}
        py={{ xs: 4, sm: 8, md: 8 }}
      >
        {/* Image Section */}
        <Box
          width={{ xs: "100%", md: "50%" }}
          display="flex"
          justifyContent="center"
        >
          <Image
            src="/aboutusUK.png"
            alt="Aboutus UK"
            width={500}
            height={430}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>

        {/* Text Section */}
        <Box
          width={{ xs: "100%",sm:"80%", md: "50%" }}
          textAlign={isMobileOrTab ? 'left' : 'left'}
        >
          <Typography
            variant="h2"
            sx={{
            fontFamily: 'sen, sans-serif',
              fontWeight: 500,
              lineHeight: "130%",
              color: "#322C3E",
              fontSize: { xs: "32px", sm: "40px", md: "42px",lg:'48px' },
              mb: 2,
              whiteSpace:"nowrap"
            }}
          >
        {`About VyomEdge UK`}
          </Typography>

          <Typography
            sx={{
              frontFamily: "Manrope, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "18px", md: "24px" },
              lineHeight: "160%",
              color: "#000",
              mb: 2,
            }}
          >
         {`Your Offshore Tech & Marketing Partner, Built for the UK Market`}
          </Typography>

          <Typography
            sx={{
             frontFamily: "Manrope, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "15px", md: "18px" },
              lineHeight: "160%",
              color: "#000",
              mb: 3,
            }}
             dangerouslySetInnerHTML={{
                      __html:`  <span style="color:#7600C4">VyomEdge UK</span>
            is a dedicated division of VyomEdge — a trusted Indian IT & digital marketing firm — built exclusively to serve 
             <span style="color:#7600C4">UK-based businesses </span> with high-quality, scalable, and cost-effective digital solutions`
                  }}
              />
        

  <Typography
            sx={{
               frontFamily: "Manrope, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "15px", md: "18px" },
              lineHeight: "160%",
              color: "#000",
              mb: 0,
            }}
             dangerouslySetInnerHTML={{
                      __html:` With over a decade of combined team experience, we specialize in
            <span style="color:#7600C4"> MERN Stack development, Python solutions, UI/UX design,</span>
             and   <span style="color:#7600C4">digital marketing </span> support tailored to meet the unique demands of UK startups, agencies, and enterprises.`
                  }}
              />
        
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutusUK;
