import React from 'react'
import { Box, Typography, Stack, Grid } from '@mui/material';
import Image from 'next/image';

const features = [
    "NDA & GDPR Compliance",
    "Dedicated Account Manager for UK Region",
    "UK-Level Quality, Indian-Level Cost",
    "Tech-Driven with Marketing Vision",
    "Virtual Office in London for Local Presence",
];

const ClientTrust = () => {
    return (
        <Grid display="flex"
            flexDirection={{ xs: "column", sm: "column", md: "row", lg: "row" }}
            alignItems="center"
            justifyContent="space-evenly"
            width="100%"
            sx={{ background: 'linear-gradient(to bottom,#ffffff, #f0fefe )' }}
            gap={{ xs: 4, sm: 5, md: 8, lg: 4 }}
            px={{ xs: 2, sm: 6, md: 2, lg: 2 }}
            py={{ xs: 4, sm: 2, md: 2, lg: 2 }}
        >
            <Box py={1} textAlign="center" sx={{ width: { xs: "100%", sm: "100%", md: "50%", lg: "40%" } }}>
                <Typography
                    variant='h2' component='h2' sx={{
                        fontFamily: 'sen, serif',
                        whiteSpace: "nowrap",
                        fontWeight: "500", lineHeight: "130%", color: "#322C3E",
                        fontSize: { xs: "32px", sm: "46px", md: "56px", lg: "56px" }
                    }}
                >
                    {` Why UK Clients`}
                    <br />
                    {`  Trust VyomEdge`}
                </Typography>

                <Stack spacing={1} alignItems="center">
                    {features.map((text, index) => (
                        <Box

                            px={{ xs: 2, sm: 2, md: 2, lg: 2 }}
                            py={{ xs: 2, sm: 2, md: 2, lg: 2 }}
                            key={index}
                            sx={{
                                textAlign: { xs: "left", sm: "left", md: "center" },
                                borderRadius: '8px',
                                backgroundColor: '#fff',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                                minWidth: '300px',
                                maxWidth: '100%',
                                width: { xs: '90%', sm: '75%', md: '50%', lg: "50%" },
                            }}
                        >
                            <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#322C3E' }}>
                                {text}

                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </Box >
            <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center" justifyContent="center"
                px={{ xs: 2, sm: 3, md: 3, lg: 2 }}
              sx={{ width: { xs: '90%', sm: '100%', md: '50%', lg: "50%" },}}
            >
                <Box sx={{ width: '100%', maxWidth: 530, textAlign: 'left' }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Manrope, serif',
                            fontWeight: 500,
                            lineHeight: '160%',
                            color: '#443B56',
                            fontSize: { xs: '18px', sm: '18px', md: '18px', lg: "18px" },
                            mb: 4,
                        }}
                        dangerouslySetInnerHTML={{
                            __html: `
                       We understand the challenges UK businesses face when outsourcing — lack of clarity, 
                       time-zone friction, missed expectations. With VyomEdge UK, you experience none of that. We combine the 
                        <span style="color:#7600C4">cost advantage of offshore</span> teams with the
                    <span style="color:#7600C4">professionalism and precision of UK agencies.</span>`
                        }}
                    />

                    <Box
                        width={{ xs: "100%", md: "100%" }}
                        display="flex"
                        justifyContent="center"
                    >
                        <Image
                            src="/clientTrust.png"
                            alt="Aboutus UK"
                            width={500}
                            height={430}

                        />
                    </Box>
                </Box>
            </Grid>
        </Grid >

    )
}

export default ClientTrust;