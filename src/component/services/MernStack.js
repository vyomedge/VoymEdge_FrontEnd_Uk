import React from 'react';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import CustomButton2 from '@/common-component/button/customButton2';

const MernStack = () => {
  const theme = useTheme();
  const isMobileOrTab = useMediaQuery(theme.breakpoints.down('md')); // true for xs, sm, md

  return (
    <Grid container>
      <Grid
        display="flex"
         alignItems="center"
        justifyContent="center"
        flexDirection={{ xs: "column",sm:"column", md: "row" , lg:"row"}}
        align="center"
       
        gap={{ xs: 4, sm: 5, md: 6 }}
        px={{ xs: 4, sm: 6, md: 10}}
        py={{ xs: 6, sm: 8, md: 8 }}
      >
        {/* Image Section */}
        <Box
          width={{ xs: "100%", md: "50%" }}
          display="flex"
          justifyContent="center"
          justifyItems="center"
        >
          <Image
            src="/servicesPic1.png"
            alt="MERN Stack"
            width={575}
            height={430}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>

        {/* Text Section */}
        <Box
          width={{ xs: "100%",sm:"50%", md: "40%" }}
          textAlign={isMobileOrTab ? 'center' : 'left'}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Sen, serif",
              fontWeight: 500,
              lineHeight: "130%",
              color: "#322C3E",
              fontSize: { xs: "32px", sm: "40px", md: "42px",lg:'48px' },
              mb: 2,
              whiteSpace:"nowrap"
            }}
          >
          {`  Custom MERN Stack`} <br />{` Development`}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Manrope, serif",
              fontWeight: 500,
              fontSize: { xs: "18px", md: "24px" },
              lineHeight: "160%",
              color: "#000",
              mb: 2,
            }}
          >
         {`   Build Powerful, Scalable Web Applications`}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Manrope, serif",
              fontWeight: 500,
              fontSize: { xs: "15px", md: "18px" },
              lineHeight: "160%",
              color: "#000",
              mb: 3,
            }}
          >
           {` We develop fast, secure, and responsive applications using the MERN stack — MongoDB, Express.js, React.js, and Node.js. Ideal for real-time platforms, SaaS products, CRMs, dashboards, and more.`}
          </Typography>

          <CustomButton2 data-testid="notify-button"
            onClick={() => console.log('Booked!')}
            sx={{
              mx: isMobileOrTab ? 'auto' : 0,
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              borderRadius: '5px',
            }}
          >
           {` Book a free consultation`}
          </CustomButton2>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MernStack;
