import React from 'react';
import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    Stack,
    Chip,
} from '@mui/material';
import CustomButton2 from '@/common-component/button/customButton2';
import Image from 'next/image';

const packages = [
    {
        icon: "/package1.svg",
        title: 'Starter Package',
        subtitle: 'Kickstart Your Digital Presence',
        price: '£499 – £999',
        time: ' (one-time)',
        features: [
            '5-Page Website (WordPress/MERN)',
            'Mobile Responsive Design',
            'Basic SEO Setup (Metadata + GMB Setup)',
            'Social Media Profile Setup (FB, IG, LinkedIn)',
            '1-Month Support (minor edits & backup)',
            'SSL, Domain & Hosting Support',
        ],
        perfect: 'Perfect for: Local businesses, solopreneurs, early-stage startups',
        goal: 'Goal: Establish online presence with basic branding.',
    },
    {
        icon: "/package2.svg",
        title: 'Growth Package',
        subtitle: 'Get Found & Convert',
        price: '£1,299 – £1,999',
        time: ' £1,299 – £1,999',
        time: '(one-time, or £299/month for 6 months)',
        features: [
            '7-10 Page Website (or landing + funnel system)',
            'UI/UX Design + Copywriting',
            'On-Page SEO + Google Business Optimization',
            'Local Keyword Research + Ranking Plan',
            'Social Media Content Plan (15 posts/month)',
            'Monthly Reports',
            'Email Integration (Mailchimp/SMTP setup)',
            '3-month performance tracking',
        ],
        perfect: 'Perfect for: Growing businesses looking for performance & reach',
        goal: 'Goal: SEO & social setup for business leads & visibility.',
    },
    {
        icon: "/package3.svg",
        title: 'Scale Package',
        subtitle: 'Digital Growth Engine',
        price: '£1,299 – £1,999',
        time: '(one-time, or £299/month for 6 months)',
        features: [
            'Full Website Redesign (or App + Web Dev Bundle)',
            'SEO (On-page + Local + Monthly Off-Page)',
            'Paid Ads Setup (Meta + Google, £500 ad budget suggested)',
            'UI/UX Redesign or Prototype',
            'Content Writing (Blogs + Product Copy)',
            'Monthly Strategy & Consultation Calls',
            'Dedicated Account Manager',
            'Tech Support (bug fixes, uptime checks)',
        ],
        perfect: 'Perfect for: Helping established brands grow digitally',
        goal: 'Goal: Full- funnel digital growth - traffic, leads & conversions.',
    },
];

const PriceCards = () => {
    return (
        <Box px={{ xs: 2, md: 8 }} py={{ xs: 6, md: 4 }} bgcolor="#f9f9ff">
            <Typography textAlign="center"
                variant="h2"
                sx={{
                    fontFamily: "Sen, serif",
                    fontWeight: 500,
                    lineHeight: "130%",
                    color: "#322C3E",
                    fontSize: { xs: "32px", sm: "40px", md: "42px", lg: '48px' },
                    mb: 2,
                    whiteSpace: "nowrap"
                }}
            >
                {`Package Structure`}
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {packages.map((pkg, idx) => (
                    <Grid item xs={12} sm={6} md={4} key={idx}>
                        <Card
                            elevation={3}
                            sx={{
                                borderRadius: '16px',
                                p: 2,
                                height: '100%',
                                backgroundColor: '#fff',
                            }}
                        >
                            <CardContent>
                                {/* Header */}
                                <Box display="flex" justifyContent="left" alignItems="left" gap={10} mb={2}>

                                    <Image src={pkg.icon} alt={pkg.title} width={30} height={30} style={{ marginRight: 12 }} />
                                    <Box>
                                        <Typography fontWeight={600} fontSize="18px" color="#2D2A34">
                                            {pkg.title}
                                        </Typography>
                                        <Typography fontSize="14px" color="#888">
                                            {pkg.subtitle}
                                        </Typography>
                                    </Box>
                                

                                </Box>

                                {/* Price */}
                                <Typography
                                    variant="h4"
                                    fontWeight={700}
                                    color="#2D2A34"
                                    mt={1}
                                >
                                    {pkg.price}
                                </Typography>
                                <Typography fontSize="13px" color="#666" mb={2}>
                                    {pkg.time}
                                </Typography>

                                {/* Feature List */}
                                <Stack spacing={1.2} mb={3}>
                                    {pkg.features.map((feature, i) => (
                                        <Box key={i} display="flex" alignItems="center">
                                            <Box
                                                sx={{
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: '50%',
                                                    backgroundColor: '#fff',
                                                    border: '1px solid #e0e0e0',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <defs>
                                                        <linearGradient id="gradient-check" x1="0" y1="0" x2="1" y2="1">
                                                            <stop offset="0%" stopColor="#FF00FF" />
                                                            <stop offset="50%" stopColor="#8A2BE2" />
                                                            <stop offset="100%" stopColor="#00FFFF" />
                                                        </linearGradient>
                                                    </defs>
                                                    <path
                                                        d="M20.285 6.709a1 1 0 0 0-1.414-1.418L9 15.164l-3.871-3.87a1 1 0 1 0-1.415 1.415l4.578 4.577a1 1 0 0 0 1.414 0l10.579-10.577z"
                                                        fill="url(#gradient-check)"
                                                    />
                                                </svg>


                                            </Box>
                                            <Typography fontSize="14px" color="#2D2A34">
                                                {feature}
                                            </Typography>

                                        </Box>
                                    ))}
                                </Stack>

                                <Typography fontSize="14px" color="#2D2A34">
                                    {pkg.perfect}
                                </Typography>

                                {/* Goal Chip */}
                                <Chip
                                    label={pkg.goal}
                                    sx={{
                                        fontSize: '12px',
                                        background: '#4CFFE733',
                                        color: '#000',
                                        mt: 1,
                                        borderRadius: '8px',
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PriceCards;
