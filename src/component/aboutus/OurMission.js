import { Grid, Typography, Box } from '@mui/material';
import React from 'react'

const OurMission = () => {
    return (
        <Grid textAlign="center"
            px={{ xs: "40px", sm: "115px", md: "80px", lg: "225px" }}
            py={{ xs: "5px", sm: "5px", md: "30px", lg: "30px" }}
         
        >
            <Box sx={{ width: '100%', maxWidth: 1500, textAlign: {xs:"left", sm:"left", md:"center"} }}>
            <Typography variant='copytext1' 
            component='copytext1'
            mb={4}  
            sx={{
                fontFamily: 'Manrope, serif',  
                width:"100px",
                fontWeight: "500", lineHeight: "160%", color: "#443B56",
                fontSize: { xs: "18px", sm: "18px", md: "18px", lg: "18px" }
            }}
                dangerouslySetInnerHTML={{
                    __html: `
      To empower British businesses
      <span style="
        display:inline-block;
        font-weight: bold;
        background: linear-gradient(135deg, #8A2BE2, #DA70D6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0 6px;
        font-size: 24px;
      ">→</span>
      from high-growth startups to well-established enterprises
      <span style="
        display:inline-block;
        font-weight: bold;
        background: linear-gradient(135deg, #8A2BE2, #DA70D6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0 6px;
        font-size: 24px;
      ">→</span>
      with robust digital products and results-driven marketing strategies,
      delivered by a globally competitive offshore team.
    `
                }}
            />

            <Typography variant='h2' component='h2' sx={{
                fontFamily: 'sen, serif',
                whiteSpace: "nowrap",
                fontWeight: "500", lineHeight: "130%", color: "#322C3E",
                fontSize: { xs: "32px", sm: "46px", md: "56px", lg: "56px" },
                textAlign:"center"
            }}>
                {`Our Mission`}
            </Typography>
            </Box>
        </Grid>
    )
}

export default OurMission;