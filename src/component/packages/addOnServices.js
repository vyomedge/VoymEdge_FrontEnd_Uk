import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const services = [
  { name: 'Landing Page (1-page funnel)', price: '£199–£299' },
  { name: 'Logo + Brand Kit Design', price: '£149' },
  { name: 'SEO Audit Report', price: '£49' },
  { name: 'Website Speed Optimization', price: '£99' },
  { name: 'Instagram Reels Pack (5 reels)', price: '£89' },
  { name: 'Monthly Social Media Management', price: 'from £199/month' },
  { name: 'WhatsApp Chatbot Setup', price: '£79' },
  { name: 'GMB Optimization', price: '£59' },
  { name: 'Mobile App Development', price: 'from £999' },
  { name: 'IT Staff Augmentation', price: 'Custom Quote' },
];

const AddOnServices = () => {
  return (
    <Box sx={{ 
      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(220, 255, 250, 1))', textAlign: 'center' }}>
      {/* Title */}
      <Typography textAlign="center"
        variant="h2"
        sx={{
         fontFamily: 'sen, sans-serif',
          fontWeight: 500,
          lineHeight: "130%",
          color: "#322C3E",
          fontSize: { xs: "32px", sm: "40px", md: "42px", lg: '48px' },
          mb: 2,
          whiteSpace: "nowrap"
        }}
      >
        {` Add-On Services`}
        <br />
        {`(Optional Charges)`}
      </Typography>



      {/* Table */}
      <TableContainer sx={{ maxWidth: 700, mx: 'auto' ,
         background:"white",
         boxShadow:2,
         border:"none",
         borderRadius:"15px",
         padding:"20px"
         }
         } 
         p={{md:3,sm:2,xs:1}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  frontFamily: "Manrope, sans-serif",
                  fontWeight: 500,
                  fontSize: { xs: "18px", md: "24px" },
                  borderBottom: '2px solid #D273FF',
                  lineHeight: "160%",
                  color: "#000",
                  mb: 2,
                }}
              >
                {`   Service`}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                frontFamily: "Manrope, sans-serif",
                  fontWeight: 500,
                  fontSize: { xs: "18px", md: "24px" },
                  borderBottom: '2px solid #D273FF',
                  lineHeight: "160%",
                  color: "#000",
                  mb: 2,
                }}

              >
                {`  Price `}
                <Box component="span" sx={{
                  background: 'linear-gradient(to right, rgba(211, 0, 229, 1),rgba(118, 0, 196, 1),rgba(76, 255, 231, 1))', // blue gradient
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold' // optional
                }}>{`(GBP)`}</Box>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {services.map((item, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    frontFamily: "Manrope, sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: "15px", md: "18px" },
                    lineHeight: "160%",
                    color: "#3C3C3C",
                    borderBottom: 'none',

                  }}
                >
                  {item.name}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                   frontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: "15px", md: "18px" },
                    lineHeight: "160%",
                    color: "#3C3C3C",
                    borderBottom: 'none',

                  }}
                >
                  {item.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AddOnServices;
