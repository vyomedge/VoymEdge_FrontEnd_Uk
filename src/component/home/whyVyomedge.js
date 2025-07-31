import { Box, Typography, Grid, Paper } from '@mui/material';
import React from 'react'
import Image from 'next/image';

const WhyVyomedge = () => {
    const cardData = [
        {
            title: "UK Working Hours",
            subheading: " & Communication",
            icon: "/why1.svg",
            bgColor: "#4C3A73",
            textColor: "#FFFFFF"
        },
        {
            title: "Cost-Effective",
            subheading: "without compromise",
            icon: "/why2.svg",
            bgColor: "#4C3A73",
            textColor: "#FFFFFF"
        },
        {
            title: "UK Virtual Presence",
            icon: "/why3.svg",
            bgColor: "#4C3A73",
            textColor: "#FFFFFF"
        },
        {
            title: "Agile,Transparents,",
            subheading: "and Scalable",
            icon: "/why4.svg",
            bgColor: "#4C3A73",
            textColor: "#FFFFFF"
        },
        {
            title: "Compliance & ",
            subheading: "Confidentiality.",
            icon: "/why4.png",
            bgColor: "#4C3A73",
            textColor: "#FFFFFF"
        }
    ];
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            sx={{
                px: { xs: 2, sm: 6, md: 8, lg: 14 },
                py: { xs: 8, sm: 8, md: 5, lg: 4 },
                flexDirection: "column", // If you want vertical stacking
                textAlign: "center",     // Ensures text is centered as well
            }}
        >
            <Box>
                <Typography
                    variant='h2'
                    component="h2"
                    sx={{
                        fontSize: { xs: "36px", sm: "46px", md: "56px", lg: "56px" },
                      fontFamily: 'sen, sans-serif',
                        fontWeight: "500",
                        color: "#322C3E",
                        lineHeight: "130%",
                        padding: "20px"
                    }}>
                    {` Why VyomEdge for UK Businesses?`}
                </Typography>
                {<Grid container spacing={3} justifyContent="center">
                    {cardData.map((item, i) => (
                        <Grid item key={i} xs={12} sm={6} md={3} lg={3}>
                            <Paper
                                elevation={0}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    bgcolor: item.bgColor,
                                    color: item.textColor,
                                    px: 6,
                                    py: 1.5,
                                    borderRadius: "8px",
                                    width: "100%"
                                }}
                            >
                                <Image src={item.icon} alt={item.title} width={60} height={50} />
                                <Box textAlign="left">
                                    <Typography
                                        variant="copytext1"
                                        component="copytext1"
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: "18px bold",
                                            frontFamily: "Manrope, sans-serif",
                                            lineHeight: "160%",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography

                                        sx={{
                                            fontWeight: 700,
                                            fontSize: "18px bold",
                                           frontFamily: "Manrope, sans-serif",
                                            lineHeight: "160%",

                                        }}
                                    >
                                        {item.subheading}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>}
            </Box>
        </Box>
    )
}

export default WhyVyomedge;