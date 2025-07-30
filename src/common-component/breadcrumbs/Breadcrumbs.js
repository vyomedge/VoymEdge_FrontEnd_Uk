import React from 'react';
import { Breadcrumbs, Typography, Box } from '@mui/material';
import { Home, NavigateNext } from '@mui/icons-material';
import NextLink from 'next/link';
import Image from 'next/image';

const BreadcrumbsComponent = ({
  items = [],
  separator = <NavigateNext fontSize="small" sx={{ color: '#DAA412' }} />,
  showHomeIcon = true,
  maxItems = 8,
  homeIconColor = '#DAA412',
  sx = {}
}) => {
  if (!items || items.length === 0) return null;

  return (
    <Box sx={{ py: 2, px: 2, ...sx }}>
      <Breadcrumbs
        separator={separator}
        maxItems={maxItems}
        aria-label="breadcrumb"
        sx={{
          '& .MuiBreadcrumbs-separator': {
            color: 'text.secondary',
          },
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isHome = item.isHome || item.href === '/' || item.href === '/home';

          const icon = isHome && showHomeIcon && (
            item.icon === 'svg' ? (
              <Image
                src="/home.svg"
                alt="Home"
                width={16}
                height={16}
                style={{ marginRight: 6 }}
              />
            ) : (
              <Home sx={{ mr: 0.5, color: homeIconColor }} fontSize="small" />
            )
          );

          if (isLast || !item.href) {
            return (
              <Typography
                key={index}
                color="#FFFFFF"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 500,
                  fontSize: { xs: '12px', md: '14px' },
                }}
              >
                {icon}
                {item.label}
              </Typography>
            );
          }

          return (
            <Box
              key={index}
              component={NextLink}
              href={item.href}
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: '#FFFFFF',
                fontSize: { xs: '13px', md: '14px' },
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {icon}
              {item.label}
            </Box>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsComponent;
