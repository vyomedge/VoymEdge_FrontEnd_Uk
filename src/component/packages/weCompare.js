import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  SvgIcon,
  Container,
} from '@mui/material';
import Image from 'next/image';

const features = [
  { name: 'Website Design', starter: true, growth: true, scale: true },
  { name: 'SEO Setup', starter: false, growth: true, scale: true },
  { name: 'Content Writing', starter: false, growth: true, scale: true },
  { name: 'Paid Ads Mgmt', starter: false, growth: false, scale: true },
  { name: 'Monthly Reports', starter: false, growth: true, scale: true },
  { name: 'Support', starter: '1 Month', growth: '3 Months', scale: 'Ongoing' },
  { name: 'Price', starter: '£499+', growth: '£1,499+', scale: '£1,999+' },
];

const ComparisonTable = () => {
  return (
    <Container>
      <Box sx={{ py: 6, background: '#fff', width: '100%' }}>
        <Typography
          textAlign="center"
          variant="h2"
          component="h2"
          sx={{
            fontFamily: 'sen, sans-serif',
            fontWeight: 500,
            lineHeight: '130%',
            color: '#322C3E',
            fontSize: { xs: '28px', sm: '36px', md: '42px', lg: '48px' },
            mb: 4,
            whiteSpace: 'nowrap',
          }}
        >
          {`  How We Compare`}
        </Typography>

        <Box
          sx={{
            overflowX: 'auto',
            scrollbarWidth: 'thin',

          }}
        >
          <Grid
            container
            justifyContent="center"
            sx={{
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              minWidth: '800px',
            }}
          >
            {/* Left Column */}
            <Grid item xs={12} md={6} p={1} width={"25%"}>
              <Paper
                elevation={4}
                sx={{
                  py: 2,
                  px: { xs: 2, md: 3 },
                  borderRadius: 2,
                  backgroundColor: '#fff',
                  height: '100%',
                  textAlign: 'center',
                  boxShadow: '0px 0px 20px rgba(0,0,0,0.1)',
                }}
              >
                <Typography
                  component="h6"
                  variant='h6'
                  sx={{
                    frontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: '18px', md: '24px' },
                    mb: 3,
                    color: '#443B56',
                  }}
                >
                  {`  Features`}
                </Typography>

                {features.map((item, idx) => (
                  <Box                  >
                    <Typography
                      component="p"
                      variant='p'
                      key={idx}
                      sx={{
                        frontFamily: "Manrope, sans-serif",
                        fontWeight: 500,
                        fontSize: { xs: '16px', md: '20px' },
                        color: '#443B56',
                        mb: { xs: 4.5, sm: 4.5, md: 3.5 },
                        whiteSpace: 'nowrap',
                      }}>
                      {item.name}
                    </Typography>

                  </Box>
                ))}
              </Paper>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={7} width={"75%"}>
              <TableContainer >
                <Table sx={{ width: '100%', tableLayout: 'auto' }}>
                  <TableHead>
                    <TableRow>
                      {['Starter', 'Growth', 'Scale'].map((plan, i) => (
                        <TableCell
                          key={i}
                          align="center" frontFamily="Manrope, sans-serif"
                          sx={{
                            fontSize: { xs: '16px', md: '20px' },
                            fontWeight: 600,
                            color: '#443B56',
                            whiteSpace: 'nowrap',
                            minWidth: 140,
                          }}
                        >
                          {plan}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {features.map((row, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          backgroundColor: i % 2 === 0 ? '#fff' : '#FCFAFF',
                          borderBottom: '1px solid #f1f1f1',

                        }}
                      >
                        {['starter', 'growth', 'scale'].map((key, j) => (
                          <TableCell
                            key={j}
                            align="center"
                            sx={{
                              py: 2,
                              minWidth: 140,
                              whiteSpace: 'nowrap',
                              alignItems: "center"
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",   // vertical center
                                justifyContent: "center", // horizontal center
                                height: "100%",
                                padding:"2px"
                              }}
                            >
                              {row[key] === true ? (
                                <Image
                                  src="/Tick.svg"
                                  alt="Tick Icon"
                                  width={24}
                                  height={24}
                                />
                              ) : row[key] === false ? (
                                <Image
                                  src="/cross.svg"
                                  alt="cross Icon"
                                  width={24}
                                  height={24}
                                />
                              ) : (
                                <Typography
                                  frontFamily="Manrope, sans-serif"
                                  sx={{
                                    fontSize: { xs: '16px', md: '18px' },
                                    color: '#443B56',
                                    fontWeight: 500,
                                  }}
                                >
                                  {row[key]}
                                </Typography>
                              )}
                            </Box>
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ComparisonTable;
