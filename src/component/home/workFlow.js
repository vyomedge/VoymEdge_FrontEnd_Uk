import { Grid, Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme, useMediaQuery } from '@mui/material';





function WorkFlow() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    return (
        <Grid alignItems="left"   px={{ xs: "30px", sm: "10px", md: "10px" }}
                py={{ xs: "10px", sm: "10px", md: "20px" }}
                sx={{  background: "linear-gradient(to bottom,rgba(255, 255, 255, 1), rgba(220, 255, 250, 1))",}}>
            <Grid textAlign="left" width="100%"
                >
                <Typography variant='h2' component='h2'
                    px={{ xs: "50px", sm: "50px", md: "130px" }}
                    py={{ xs: "20px", sm: "20px", md: "10px" }}
                    sx={{
                       fontFamily: 'sen, sans-serif',
                        whiteSpace: "nowrap",
                        fontWeight: "500", lineHeight: "130%", color: "#322C3E",
                        fontSize: { xs: "32px", sm: "46px", md: "56px", lg: "56px" }
                    }}>
                    {`Our Workflow`}
                </Typography>
            </Grid>
            <Grid
                container
                display="flex"
                justifyItems="center"
                justifyContent={"center"}
                gap={{ xs: "10px", sm: "20px", md: "50px",lg:"50px" }}
                padding="5px"
            >
                <Grid padding="5px" >
                    <Grid display="flex"
                        textAlign="left"
                          gap={{ xs: "10px", sm: "20px", md: "20px",lg:"20px" }}
                    >
                        <Grid
                        >
                            <Image
                                src="/workflow1.svg"
                                alt="Sample"
                                width={40}
                                height={40}
                                alignItems="center" />
                        </Grid>
                        <Typography
                            variant='copytext1' component='copytext1'
                            width="250px"
                            px={2} sx={{
                                frontFamily: "Manrope, sans-serif",
                                fontWeight: "500", lineHeight: "160%", color: "#000000",
                                fontSize: { xs: "18px", sm: "18px", md: "18px", lg: "18px" }

                            }}>


                            {`Discovery Call `}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mx: 2,
                                transform: (isMobile || isTablet) ? 'rotate(90deg)' : 'none',
                            }}
                        >
                           
                            <Image
                                src="/Arrow.svg"
                                alt="Sample"
                                width={40}
                                height={40}
                                alignItems="center" />
                        </Box>

                    </Grid>
                    <Grid textAlign="left" >
                        <Typography
                           variant='copytext1' component='copytext1'
                            width="250px"  textAlign="left"
                            sx={{
                               frontFamily: "Manrope, sans-serif",
                                fontWeight: "500", lineHeight: "160%", color: "#000000",
                                fontSize: { xs: "18px", sm: "18px", md: "18px", lg: "18px" }
                            }}>
                            {`Understand your goals, budget & timeline.`}</Typography>
                    </Grid>
                </Grid>
                <Grid padding="5px">
                    <Grid display="flex"
                        textAlign="left"
                    >
                        <Grid
                        >
                            <Image
                                src="/workflow2.svg"
                                alt="Sample"
                                width={50}
                                height={40}
                                alignItems="center" />
                        </Grid>
                        <Typography
                           variant='copytext1' component='copytext1'
                            width="250px"
                            px={2} sx={{
                              frontFamily: "Manrope, sans-serif",
                                fontWeight: "500", lineHeight: "160%", color: "#000000",
                                fontSize: { xs: "18px", sm: "18px", md: "18px", lg: "18px" }

                            }}>

                            {`Project Scope & Quote`}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mx: 2,
                                transform: (isMobile || isTablet) ? 'rotate(90deg)' : 'none',
                            }}
                        >
                           
                            <Image
                                src="/Arrow.svg"
                                alt="Sample"
                                width={40}
                                height={40}
                                alignItems="center" />
                        </Box>
                    </Grid>
                    <Grid textAlign="left" >
                        <Typography variant='copytext1' component='copytext1'
                            width="250px"  textAlign="left"
                            sx={{
                                frontFamily: "Manrope, sans-serif",
                                fontWeight: "500", lineHeight: "160%", color: "#000000",
                                fontSize: { xs: "18px", sm: "18px", md: "18px", lg: "18px" }
                            }}>
                            {`Detailed proposal with clear deliverables`}</Typography>
                    </Grid>
                </Grid>
                <Grid padding="5px">
                    <Grid display="flex"
                        textAlign="left"
                    >
                        <Grid
                        >
                            <Image
                                src="/workflow3.svg"
                                alt="Sample"
                                width={40}
                                height={40}
                                alignItems="center" />
                        </Grid>
                        <Typography
                        variant='copytext1' component='copytext1'
                            width="250px"
                            px={2} sx={{
                               frontFamily: "Manrope, sans-serif",
                                fontWeight: "500", lineHeight: "160%", color: "#000000",
                                fontSize: { xs: "18px", sm: "18px", md: "18px", lg: "18px" }

                            }}>

                            {`Agile Execution`}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mx: 2,
                                transform: (isMobile || isTablet) ? 'rotate(90deg)' : 'none',
                            }}
                        >
                           
                            <Image
                                src="/Arrow.svg"
                                alt="Sample"
                                width={40}
                                height={40}
                                alignItems="center" />
                        </Box>
                    </Grid>
                    <Grid textAlign="left" >
                        <Typography
                          variant='copytext1' component='copytext1'
                            width="250px"  textAlign="left"
                            sx={{
                               frontFamily: "Manrope, sans-serif",
                                fontWeight: "500", lineHeight: "160%", color: "#000000",
                                fontSize: { xs: "18px", sm: "18px", md: "18px", lg: "18px" }
                            }}>
                    {`Sprint-based deliveries with weekly check-ins`}</Typography>
                    </Grid>
                </Grid>
                <Grid padding="5px">
                    <Grid display="flex"
                        textAlign="left"
                    >
                        <Grid
                        >
                            <Image
                                src="/workflow4.svg"
                                alt="Sample"
                                width={40}
                                height={40}
                                alignItems="center" />
                        </Grid>

                    </Grid>

                    <Grid textAlign="left" >
                        <Typography  variant='copytext1' component='copytext1'
                            width="250px"  textAlign="left"
                            sx={{
                               frontFamily: "Manrope, sans-serif",
                                fontWeight: "500", lineHeight: "160%", color: "#000000",
                                fontSize: { xs: "18px", sm: "18px", md: "18px", lg: "18px" }
                            }}
                           >
                            {`Post-laur`}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default WorkFlow;


























