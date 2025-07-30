import { Box, Typography, Button } from '@mui/material';
import React from 'react'

const Partner = () => {
    return (
        <Box textAlign="left"
              px={{ xs: "50px", sm: "55px", md: "60px", lg: "100px" }}
              py={{ xs: "10px", sm: "20px", md: "30px", lg: "30px" }}
          >
              <Typography variant='h2' component='h2' sx={{
                  fontFamily: 'sen, serif',
                  whiteSpace:"nowrap",
                  fontWeight: "500", lineHeight: "130%", color: "#322C3E",
                  fontSize: { xs: "32px", sm: "46px", md: "56px", lg: "56px" }
              }}>
                  {`Your Strategic Partner`}
              </Typography >
              <Typography variant='copytext1' component='copytext1' sx={{
                  fontFamily: 'Manrope, serif',
                  fontWeight: "500", lineHeight: "160%", color: "#443B56",
                  fontSize: { xs: "18px", sm: "18px", md: "18px", lg: "18px" }
              }}>
                  {`Strategi partners for UK companies ready to accelerate their digital presence. Backed by a senior 
                  team of developers, designers, and marketers in India and a virtual office presence in the UK, VyomEdge UK combines global talent with local insight.`}
              </Typography>
              <br />
              <Typography
                  variant="copytext2"
                  component="div"
                 
                  sx={{
                      fontFamily: 'Manrope, serif',
                      fontWeight: 500,
                      lineHeight: "160%",
                      color: "#443B56",
                      fontSize: { xs: "15px", sm: "15px", md: "15px", lg: "15px" },
                      py:"15px"
                      
                  }}
                  dangerouslySetInnerHTML={{
                      __html: `Whether you're building a <span style="color:#7600C4">SaaS platform</span> in Manchester, 
                                      <span style="color:#7600C4">automating business workflows </span> in Birmingham, or
                                      <span style="color:#7600C4">optimising your eCommerce SEO</span> in London, we’re equipped to support your success.`
                  }}
              />
  
  
          </Box>
    )
}

export default Partner;