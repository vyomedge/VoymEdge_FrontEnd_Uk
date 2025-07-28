import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import CustomButton1 from '@/common-component/button/customButton1';
import CustomButton2 from '@/common-component/button/customButton2';

const LetsChat = () => {
    return (
        <Grid alignItems="center"
            textAlign="center"
            pb={3}
            sx={{
                background: "linear-gradient(to bottom,rgba(255, 255, 255, 1), rgba(220, 255, 250, 1))"
            }} >
            <Typography variant='h2' component='h2' sx={{
                fontFamily: 'sen, serif',
                whiteSpace: "wrap",
                fontWeight: "500", lineHeight: "130%", color: "#08070aff",
                fontSize: { xs: "24px", sm: "42px", md: "54px", lg: "56px" }
            }}>
                {`Not sure where to start?`}
            </Typography>
            <Typography
                variant='h2' component='h2' sx={{
                    fontFamily: 'sen, serif',
                    whiteSpace: "wrap",
                    fontWeight: "500", lineHeight: "130%",
                    fontSize: { xs: "24px", sm: "42px", md: "54px", lg: "56px" },
                    background: 'linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                {`Let's chat.`}
            </Typography>

           
            <Box display="flex" gap={2} px={2}
                justifyContent="center">
                <CustomButton1
                    onClick={() => console.log('Booked!')}
                    sx={{ borderRadius: '5px', mt: 1,
                        fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "15px" },
                         fontWeight: "500" }}
                >
                    {`See the Packages - Pick Yours`}
                </CustomButton1>

                <CustomButton2
                    onClick={() => console.log('Booked!')}
                    sx={{ borderRadius: '5px', mt: 1,
                         fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "15px" },
                          fontWeight: "500" }}
                >
                    {`Book a Call - Start Scaling`}
                </CustomButton2>

            </Box>
        </Grid>
    )
}

export default LetsChat;