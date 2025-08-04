import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import CustomButton1 from '../button/customButton1';
import CustomButton2 from '../button/customButton2';
import Link from 'next/link';

const FreeCall = () => {
    return (
        <Grid alignItems="center"
            textAlign="center"
            pb={3}
            sx={{
                background: "linear-gradient(to bottom,rgba(255, 255, 255, 1), rgba(220, 255, 250, 1))"
            }} >
            <Typography variant='h2' component='h2' sx={{
                   fontFamily: 'sen, sans-serif',
                whiteSpace: "wrap",
                
                fontWeight: "500", lineHeight: "130%", color: "#08070aff",
                fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "56px" }
            }}>
                {`Let's bring your digital vision to life`}
            </Typography>
            <Typography
                variant='h2' component='h2' sx={{
                      fontFamily: 'sen, sans-serif',
                    whiteSpace: "wrap",
                    fontWeight: "500", lineHeight: "130%",
                    fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "56px" },
                    background: 'linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                {`affordable, reliable, and seamlessly.`}
            </Typography>

            <Typography variant="copytext2"
                component="div"

                sx={{
                    frontFamily: "Manrope, sans-serif",
                    fontWeight: 500,
                    lineHeight: "160%",
                    color: "#443B56",
                    fontSize: { xs: "15px", sm: "15px", md: "15px", lg: "15px" },
                    py: "10px"

                }}>
                {`Speak to our UK consultant or request a free proposal.`}
            </Typography>
            <Box   display="flex" gap={2}
            justifyContent="center">
                  <Link href="tel:+447774709698" passHref legacyBehavior>
                <a style={{ textDecoration: 'none' }}>
                  <CustomButton1 data-testid="notify-button"
                    onClick={() => console.log('Booked!')}
                    sx={{ borderRadius: '5px', mt: 1, fontSize: '15px', fontWeight: "500" }}
                >
                    {`Book a Free Call`}
                </CustomButton1>
                
                </a>
              </Link>
                <Link href="/packages" passHref legacyBehavior>
                <a style={{ textDecoration: 'none' }}>
                    <CustomButton2 data-testid="notify-button"
                    onClick={() => console.log('Booked!')}
                    sx={{ borderRadius: '5px', mt: 1, fontSize: '15px', fontWeight: "500" }}
                >
                    {`Get a Quote Now`}
                </CustomButton2>

                </a>
              </Link>
               
              

            </Box>
        </Grid>
    )
}

export default FreeCall;