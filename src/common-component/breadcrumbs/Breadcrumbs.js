import React from 'react';
import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRouter } from 'next/router';

const BreadcrumbsButton = ({ items = [] }) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: 'inline-block',
        px: 2,
        py: 1,
        borderRadius: 2,
        background: '#322C3E',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.05)',
        '&:hover': {
          background: 'linear-gradient(to right, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
          '& a, & .MuiTypography-root': {
            color:'#322C3E',
          },
        },
      }}
    >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="medium" />}
        aria-label="breadcrumb"
        sx={{ fontSize: 14 }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          if (isLast) {
            return (
              <Typography key={index} color="text.primary" fontWeight={500}>
                {item.label}
              </Typography>
            );
          } else {
            return (
              <Link
                key={index}
                underline="hover"
                color="inherit"
                onClick={() => router.push(item.href)}
                sx={{ cursor: 'pointer', fontWeight: 500 }}
              >
                {item.label}
              </Link>
            );
          }
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsButton;
