import { Box, Typography } from '@mui/material';
import React from 'react'
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const WorkFlow = () => {
    return (
        <Box>
            <Typography
                variant='h2'
                component="h2"
                textAlign="left"
                sx={{
                    fontSize: { xs: "30px", sm: "44px", md: "56px", lg: "56px" },
                    fontFamily: "sen,serif",
                    fontWeight: "500",
                    color: "#322C3E",
                    lineHeight: "130%",
                    pl: "20px"
                }}>
                {`Our Work Flow`}
            </Typography>
            <Box></Box>
            <Box
                container
                display="flex"
                justifyContent="space-evenly"
                justifyItems="center"
            >
                <Box
                    container
                    display="flex"
                    justifyContent="space-evenly"
                    justifyItems="center"
                    gap={4}

                >
                    <Image
                        src="/workFlow1.svg"
                        alt="Logo"
                        width={50}
                        height={31}
                        style={{ display: "inline-block", maxWidth: "100%", height: "auto" }}
                    />
                    <Typography>Descovery Call</Typography>
                    <ArrowForwardIcon
                        sx={{
                            fontSize: 28,
                            color: '#000',
                        }}
                    />
                </Box>
                <Box
                    container
                    display="flex"
                    justifyContent="space-evenly"
                    justifyItems="center"
                    gap={4}
                >
                    <Image
                        src="/workFlow2.svg"
                        alt="Logo"
                        width={50}
                        height={31}
                        style={{ display: "inline-block", maxWidth: "100%", height: "auto" }}
                    />
                    <Typography>{`Project Scope & Quote`}</Typography>
                    <ArrowForwardIcon
                        sx={{
                            fontSize: 28,
                            color: '#000',
                        }}
                    />
                </Box>
                <Box
                    container
                    display="flex"
                    justifyContent="space-evenly"
                    justifyItems="center"
                    gap={4}
                >
                    <Image
                        src="/workFlow3.svg"
                        alt="Logo"
                        width={50}
                        height={31}
                        style={{ display: "inline-block", maxWidth: "100%", height: "auto" }}
                    />
                    <Typography>{`Agile Execution`}</Typography>
                    <ArrowForwardIcon
                        sx={{
                            fontSize: 28,
                            color: '#000',
                        }}
                    />
                </Box>
                <Box
                    container
                    display="flex"
                    justifyContent="space-evenly"
                    justifyItems="center"

                >
                    <Image
                        src="/workFlow4.svg"
                        alt="Logo"
                        width={50}
                        height={31}
                        style={{ display: "inline-block", maxWidth: "100%", height: "auto" }}
                    />

                </Box>
            </Box>
        </Box>
    )
}

export default WorkFlow;