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
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const features = [
  { name: 'Website Design', starter: true, growth: true, scale: true },
  { name: 'SEO Setup', starter: false, growth: true, scale: true },
  { name: 'Content Writing', starter: false, growth: true, scale: true },
  { name: 'Paid Ads Mgmt', starter: false, growth: false, scale: true },
  { name: 'Monthly Reports', starter: false, growth: true, scale: true },
  { name: 'Support', starter: '1 Month', growth: '3 Months', scale: 'Ongoing' },
  { name: 'Price', starter: '£499+', growth: '£1,299+', scale: '£2,499+' },
];

const GradientCheckIcon = () => (
  <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: '1.6rem' }}>
    <defs>
      <linearGradient id="check-gradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="rgba(211, 0, 229, 1)" />
        <stop offset="50%" stopColor="rgba(118, 0, 196, 1)" />
        <stop offset="100%" stopColor="rgba(76, 255, 231, 1)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#check-gradient)"
      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
    />
  </SvgIcon>
);

const CrossIcon = () => (
  <CloseIcon sx={{ fontSize: '1.4rem', color: '#2E2E2E' }} />
);

const ComparisonTable = () => {
  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 6 }, background: '#fff', width: '100%' }}>
      <Typography
        textAlign="center"
        variant="h2"
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
          maxWidth: '1600px',
          mx: 'auto',
          overflowX: 'auto',
          scrollbarWidth: 'thin',
        }}
      >
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            minWidth: '800px',
          }}
        >
          {/* Left Column */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={4}
              sx={{
                py: 2,
                px: { xs: 2, md: 8 },
                borderRadius: 2,
                backgroundColor: '#fff',
                height: '100%',
                textAlign: 'center',
                boxShadow: '0px 8px 20px rgba(0,0,0,0.1)',
              }}
            >
              <Typography
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
                <Box
                  key={idx}
                  sx={{
                   frontFamily: "Manrope, sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: '16px', md: '20px' },
                    color: '#443B56',
                    mb:{xs:4.5, sm:4.5 ,md: 3.5},
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.name}
                </Box>
              ))}
            </Paper>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={7} sx={{  px: { xs: 2, md: 8, lg:8 }}}>
            <TableContainer >
              <Table sx={{ width: '100%', tableLayout: 'auto' }}>
                <TableHead>
                  <TableRow>
                    {['Starter', 'Growth', 'Scale'].map((plan, i) => (
                      <TableCell
                        key={i}
                        align="center"  frontFamily= "Manrope, sans-serif"
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
                          }}
                        >
                          {row[key] === true ? (
                            <GradientCheckIcon />
                          ) : row[key] === false ? (
                            <CrossIcon />
                          ) : (
                            <Typography
                             frontFamily= "Manrope, sans-serif"
                              sx={{
                                fontSize: { xs: '16px', md: '18px' },
                                color: '#443B56',
                                fontWeight: 500,
                              }}
                            >
                              {row[key]}
                            </Typography>
                          )}
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
  );
};

export default ComparisonTable;
