import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CustomBreadcrumbs = ({
  links = [],
  current,
  sx = {},
  ...props
}) => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{
        fontSize: '0.95rem',
        fontWeight: 500,
        color: '#333',
        ...sx,
      }}
      {...props}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          underline="hover"
          color="inherit"
          href={link.href}
        >
          {link.label}
        </Link>
      ))}

      {current && (
        <Typography color="text.primary" sx={{ fontWeight: 600 }}>
          {current}
        </Typography>
      )}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
