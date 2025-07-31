import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomBanner from '@/common-component/banner/CustomBanner';
import SEO from '@/common-component/SEO/seo';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(3),
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  borderRadius: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  color: '#001538',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: 0,
    width: '50px',
    height: '3px',
    backgroundColor: "#011d4a",
    borderRadius: '2px',
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  '&::before': {
    content: '"•"',
    color: '#001538',

    fontWeight: 600,
    position: 'absolute',
    left: '8px',
  },
  paddingLeft: theme.spacing(3),
}));

const termsData = {
  title: "Terms & Conditions",
  lastUpdated: "1 August 2025",
  companyName: "VyomEdge",
  website: "www.vyomedge.com",

  sections: [
    {
      title: "1. Introduction",
      content: "These Terms & Conditions (“Terms”) govern your use of this website and any services provided by VyomEdge UK. By accessing or using www.vyomedge.com, you accept these Terms in full. If you disagree with any part of these Terms, please do not use our website",
    },
    {
      title: "2. About Us",
      content: " This website is operated by VyomEdge, a digital service provider offering web development, design, and digital marketing solutions to UK-based businesses.",
      email: "info@vyomedge.com",

    },
    {
      title: "3.  Use of the Website",
      content: "You agree to use this site only for lawful purposes and in a way that does not infringe the rights of others, restrict their use of the website, or violate applicable laws.",
    },
    {
      title: "4.  Intellectual Property",
      content: "All content, design elements, branding, and source code (unless otherwise noted) are the intellectual property of VyomEdge. Unauthorised copying, distribution, or reuse is strictly prohibited.",
    },
    {
      title: "5. Service Engagement Terms",
      content: "Engagements for services (development, design, or marketing) shall be governed by separate written agreements or proposals shared by email. These documents will outline project scope, fees, timelines, deliverables, and payment terms.",
      additionalContent: "Unless otherwise stated:",
      items: [
        "Work begins upon receipt of written confirmation or deposit",
        "Cancellation policies apply based on engagement terms",
        "VyomEdge UK retains the right to decline or terminate services for breach of agreement"
      ]
    },
    {
      title: "6. Limitation of Liability",
      content: "We shall not be liable for any direct, indirect, or consequential loss or damage arising from the use of this website or from services rendered, except in cases of wilful negligence or breach of contract under UK law.",
    
    },
    {
      title: "7. Privacy & Data",
      content: "Our site may include links to external websites. We are not responsible for the content, accuracy, or privacy practices of those third-party sites.",
    },
    {
      title: "8. Links to Other Websites",
      content: "Our site may include links to external websites. We are not responsible for the content, accuracy, or privacy practices of those third-party sites.",
    },
    {
      title: "9. Amendments",
      content: "We reserve the right to amend these Terms at any time. Continued use of the website after changes implies your acceptance of the updated Terms."
    },
      {
      title: "10. Governing Law",
      content: "These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the UK courts.",
    },
    {
      title: "📧 Contact Us",
      content: "If you have any queries regarding these Terms, please contact:",
      contactInfo: {
        company: "VyomEdge ",
        email: " 📧 info@vyomedge.com",
        phone: ""
      }
    }
  ]
};

export default function TermsAndConditions() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <>
        <SEO
          url='https://www.vyomedge.uk/terms-and-conditions'
          metaTitle='Terms & Conditions | VyomEdge Service Terms'
          metaDescription="Review VyomEdge's terms and conditions governing service usage, contracts, and compliance under UK business law."
          keywords='terms and conditions UK, VyomEdge service terms, website T&C UK, digital service agreement UK'
          canonical='https://www.vyomedge.uk/terms-and-conditions'
          ogTitle='Terms & Conditions | VyomEdge Service Terms'
          ogDescription="Review VyomEdge's terms and conditions governing service usage, contracts, and compliance under UK business law."
          ogImage=''
          twitterTitle='Terms & Conditions | VyomEdge Service Terms'
          twitterDescription="Review VyomEdge's terms and conditions governing service usage, contracts, and compliance under UK business law."
          twitterImage=''
          robots="index, follow"
        />
      </>
      <CustomBanner
        showLogo={true}
        logoSrc="/logo.png"
        height="30vh"
      />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header Section */}
        <StyledPaper elevation={3}>
          <Box textAlign="center" mb={3}>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
               fontFamily: 'sen, sans-serif',
                background: "#001538",
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              {termsData.title}
            </Typography>


            <Typography variant="h6" color="#000000" sx={{ fontStyle: 'italic' }}>
              Welcome to {termsData.companyName}  — {termsData.description}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body1" >
            {`  Before you explore, book, or contact us through our website, please take a moment to read our terms.`}
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight: 500 }}
            dangerouslySetInnerHTML={{
              __html: `By accessing or using <strong>${termsData.website}</strong>, you agree to the following terms and conditions:`,
            }}
          />

          <Typography variant="body1" sx={{ fontWeight: 500 }}></Typography>

        </StyledPaper>

        {/* Terms Sections */}
        {termsData.sections.map((section, index) => (
          <StyledPaper key={index} elevation={2}>
            <SectionTitle variant="h5" component="h2">
              {section.title}
            </SectionTitle>

            {section.content && (
              <Typography variant="body1" sx={{ mb: 2 }}>
                {section.content}
              </Typography>
            )}

            {section.items && (
              <List sx={{ py: 0 }}>
                {section.items.map((item, itemIndex) => (
                  <StyledListItem key={itemIndex} disablePadding>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        variant: 'body1',
                        sx: { lineHeight: 1.6 }
                      }}
                    />
                  </StyledListItem>
                ))}
              </List>
            )}

            {section.note && (
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  fontStyle: 'italic',
                  color: '#000000',
                  borderLeft: "3px solid #011d4a",
                  pl: 2,
                  py: 1
                }}
              >
                {section.note}
              </Typography>
            )}

            {section.contactInfo && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {section.contactInfo.company}
                </Typography>
                <Typography variant="body1" color="primary">
                  {section.contactInfo.email}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {section.contactInfo.phone}
                </Typography>
              </Box>
            )}
          </StyledPaper>
        ))}

        {/* Changes Notice */}
        <StyledPaper elevation={2} sx={{ bgcolor: 'grey.50' }}>
          <SectionTitle variant="h5" component="h2">
            {`   Changes to These Terms`}
          </SectionTitle>
          <Typography variant="body1">
            {` We may update these Terms occasionally. Any changes will be reflected on this page with an updated date.
            Your continued use of the site after any changes means you accept the updated Terms.`}
          </Typography>
        </StyledPaper>
      </Container>
    </>
  );
}