import { Box, Typography, Grid, Paper } from '@mui/material';
import React from 'react'
import Image from 'next/image';

const WeWork = () => {
    const cardData = [
        {
            title: "UK Working Hours",
            subheading: " & Communication",
            icon: "/aboutusIcon1.svg",
            bgColor: "#FFFFFF",
            textColor: "#443B56",
            border: " 2px solid #7600C4"
        },
        {
            title: "Cost-Effective",
            subheading: "without compromise",
            icon: "/aboutusIcon2.svg",
            bgColor: "#FFFFFF",
            textColor: "#443B56",
            border: " 2px solid #7600C4"
        },
        {
            title: "UK Virtual Presence",
            icon: "/aboutusIcon3.svg",
            bgColor: "#FFFFFF",
            textColor: "#443B56",
            border: " 2px solid #7600C4"
        },
        {
            title: "Agile,Transparents,",
            subheading: "and Scalable",
            icon: "/aboutusIcon4.svg",
            bgColor: "#FFFFFF",
            textColor: "#443B56",
            border: " 2px solid #7600C4"
        },
        {
            title: "Compliance & ",
            subheading: "Confidentiality.",
           icon: "/aboutusIcon5.svg",
            bgColor: "#FFFFFF",
            textColor: "#443B56",
            border: " 2px solid #7600C4"
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
                py: { xs: 2, sm: 8, md: 5, lg: 4 },
                flexDirection: "column", // If you want vertical stacking
                textAlign: "center",     // Ensures text is centered as well
                mb: 3
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
                    {`How We Work`}
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
                                    border: item.border,
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
                                            fontWeight: 500,
                                            fontSize: "18px bold",
                                           frontFamily: "Manrope, sans-serif",
                                            lineHeight: "160%",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography

                                        sx={{
                                            fontWeight: 500,
                                            fontSize: "18px bold",
                                            fontFamily: "Manrope, sans-serif",
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

export default WeWork;