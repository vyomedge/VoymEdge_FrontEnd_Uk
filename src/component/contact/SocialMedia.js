'use client';

import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';

const socialIcons = [
    { src: '/whatsappicon1.svg', alt: 'WhatsApp', url: 'https://www.whatsapp.com' },
    { src: '/instaicon1.svg', alt: 'Instagram', url: 'https://www.instagram.com/vyomedge_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { src: '/twittericon1.svg', alt: 'Twitter', url: 'https://x.com/vyomedge' },
    { src: '/facebookicon1.svg', alt: 'Facebook', url: 'https://www.facebook.com/vyomedge' },
    { src: '/linkedinicon1.svg', alt: 'LinkedIn', url: 'https://www.linkedin.com/company/vyom-edge/' },
];

const contactIcons = [
    { src: '/contactIcon1.svg', alt: 'Phone' },
    { src: '/contactIcon2.svg', alt: 'Email' },
    { src: '/contactIcon3.svg', alt: 'Location' },
];

const SocialMedia = () => {
    return (
        <Box
            sx={{
                px: { xs: 4, sm: 6, md: 6 },
                py: { xs: 6, sm: 8, md: 7 },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                background: 'linear-gradient(to bottom,rgba(255, 255, 255, 1),rgba(229, 255, 251, 1))',
            }}
        >
            <Grid
                container
                spacing={6}
                alignItems="center"
                justifyContent="center"
                sx={{
                    maxWidth: '1000px',
                    width: '100%',
                }}
            >
                {/* Left Image + Social Icons */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: 400,
                            mx: 'auto',
                            borderRadius: 2,
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                        }}
                    >
                        <Box
                            component="img"
                            src="/contact.png"
                            alt="contact-image"
                            sx={{ width: '100%', borderRadius: 2 }}
                        />

                        {/* Social Icons Overlay */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                justifyContent: 'center',
                                position: 'absolute',
                                bottom: 16,
                                left: 0,
                                right: 0,
                            }}
                        >
                            {socialIcons.map((item, i) => (
                                <IconButton data-testid="notify-button"
                                    key={i}
                                    component="a"
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        p: 1,
                                        backgroundColor: '#fff',
                                        borderRadius: '50%',
                                        transition: '0.3s',
                                        '&:hover': {
                                            background:
                                                'linear-gradient(to right, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                                        },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={item.src}
                                        alt={item.alt}
                                        sx={{ width: 20, height: 20 }}
                                    />
                                </IconButton>
                            ))}
                        </Box>
                    </Box>
                </Grid>

                {/* Right Text +  Icons */}
                <Grid item xs={12} md={6}>
                    <Box textAlign={{ xs: 'center', md: 'left' }}>
                        <Typography
                            variant='h2'
                            component="h2"
                            sx={{
                                fontFamily: "Sen",
                                fontWeight: 500,
                                lineHeight: "130%",
                                color: "#322C3E",
                                fontSize: { xs: "32px", sm: "40px", md: "42px", lg: '48px' },
                                mb: 2,
                            }}
                        >
                            {` Contact Us`}
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: "Manrope",
                                fontWeight: 500,
                                fontSize: { xs: "15px", md: "15px" },
                                lineHeight: "160%",
                                mt: 1,
                                color: '#4B4B4B',
                                maxWidth: 500,
                                mx: { xs: 'auto', md: 0 },
                                position: 'relative',
                                display: 'inline-block',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: -4,
                                    left: 0,
                                    width: '100%',
                                    height: '3px',
                                    background:
                                        'linear-gradient(to right, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                                },
                            }}
                        >
                            {`We’re always ready to discuss new ideas, business challenges, or tech upgrades.
                             Whether you need a full-stack development team or digital growth support, we’re just a
                              message away.`}
                        </Typography>

                        {/* Contact Icons */}
                        <Box sx={{ mt: 5, ml: 1 }}>
                            {contactIcons.map((item, i) => (
                                <Box key={i} sx={{ my: 2 }}>
                                    <Box
                                        component="img"
                                        src={item.src}
                                        alt={item.alt}
                                        sx={{
                                            width: 28,
                                            height: 28,
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SocialMedia;
