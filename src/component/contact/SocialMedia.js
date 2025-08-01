'use client';

import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const socialIcons = [
    { src: '/whatsappicon1.svg', alt: 'WhatsApp', url: 'https://www.whatsapp.com' },
    { src: '/instaicon1.svg', alt: 'Instagram', url: 'https://www.instagram.com/vyomedge_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { src: '/twittericon1.svg', alt: 'Twitter', url: 'https://x.com/vyomedge' },
    { src: '/facebookicon1.svg', alt: 'Facebook', url: 'https://www.facebook.com/vyomedge' },
    { src: '/linkedinicon1.svg', alt: 'LinkedIn', url: 'https://www.linkedin.com/company/vyom-edge/' },
];

const contactIcons = [
    { src: '/contactIcon1.svg', alt: 'Phone',label:"     +44 7774709698" },
    { src: '/contactIcon2.svg', alt: 'Email', label: "info@vyomedge.com" },
    { src: '/contactIcon3.svg', alt: 'Location', label:"50 Bostocks Lane, Risley, Derby, England, DE723SX" },
];

const SocialMedia = () => {
    return (
        <Box
            sx={{
                px: { xs: 4, sm: 6, md: 6, lg:6 },
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
                            maxWidth: 500,
                            mx: 'auto',
                            borderRadius: 2,
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                        }}
                    >
                        <Image
                            src="/Contact.png"
                            alt="Aboutus UK"
                            width={400}
                            height={430}
                            style={{ maxWidth: "100%", height: "auto" }}
                        />

                        {/* Social Icons Overlay */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1,
                                justifyContent: 'center',
                                position: 'absolute',
                                bottom: 16,
                                left: 0,
                                right: 0,
                            }}
                        >
                            {socialIcons.map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    passHref
                                >
                                    <IconButton
                                        data-testid="notify-button"
                                        sx={{

                                            backgroundColor: '#fff',
                                            transition: '0.3s',
                                            '&:hover': {
                                                background:
                                                    'linear-gradient(to right, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                                                color: '#fff',
                                            },
                                        }}
                                    >
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={20}
                                            height={20}
                                            style={{ objectFit: 'fill' }}
                                        />
                                       
                                      
                                    </IconButton>
                                </Link>
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
                                fontFamily: 'sen, sans-serif',
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
                                frontFamily: "Manrope, sans-serif",
                                fontWeight: 500,
                                fontSize: { xs: "15px", md: "15px" },
                                lineHeight: "160%",
                                mt: 1,
                                color: '#4B4B4B',
                                maxWidth: 360,
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
                                <Box  display={'flex'} gap={4} key={i} sx={{ my: 2 }}>
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={30}
                                        height={30}
                                        style={{ objectFit: 'fill' }}
                                    />
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontWeight: 500,
                                            color: 'inherit', // to support color change on hover
                                            textTransform: 'none',
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
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
