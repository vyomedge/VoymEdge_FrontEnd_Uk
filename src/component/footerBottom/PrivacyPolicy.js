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
  color: "#001538",
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
    color: "#001538",
    fontWeight: 600,
    position: 'absolute',
    left: '8px',
  },
  paddingLeft: theme.spacing(3),
}));

const privacyData = {
  title: "Privacy Policy",
  lastUpdated: "1 August 2025",
  companyName: "VyomEdge",
  website: "info@vyomedge.com",

  sections: [
    {
      title: "1.Introduction",
      content: "At VyomEdge UK, we are committed to protecting the privacy and security of our website visitors, prospects, and clients. This Privacy Policy explains how we collect, use, store, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.",
      subtitle: "By accessing or using our website ( www.vyomedge.uk), you agree to the terms outlined in this Privacy Policy.",
    },
    {
      title: "2. Who We Are",
      content: "VyomEdge UK is a division of VyomEdge, a digital services provider offering web development, UI/UX design, Python solutions, and digital marketing. We serve UK-based businesses and operate with a virtual presence in London.",
      subtitle: "Data Controller:",
      items: [
        " VyomEdge UK",
        " Email: info@vyomedge.com",
      ],
    },
    {
      title: "3. What Data We Collect",
      content: "We may collect the following types of personal data:",
      items: [
        "Identity Data: Name, company name, job title",
        "Contact Data: Email address, phone number",
        "Technical Data: IP address, browser type, operating system, referral source, pages visited, and time spent",
        "Marketing & Communication Data: Preferences for receiving marketing emails or updates",
        "Project/Business Data: Details voluntarily shared with us during enquiries or consultations",

      ],
      note: "We do not collect or process sensitive personal data (special category data) without explicit consent.",
    },
    {
      title: "4. How We Collect Your Data",
      content: "We collect data through:",

      items: [
        "Contact/enquiry forms on our website",
        "Email communications or proposals",
        "Analytics tools (e.g., Google Analytics, Hotjar)",
        "Marketing or lead generation tools",
        "Cookies and tracking technologies (see Cookie Policy)"
      ]
    },
    {
      title: "5.Why We Collect Your Data",
      content: "We process your personal data for the following lawful purposes:",
      items: [
        "To respond to your queries or project requests",
        "To provide services you request from us",
        "To improve the performance and usability of our website",
        "For marketing and communication purposes (with your consent)",
        "To comply with legal obligations and regulatory requirements",
      ],

    },
    {
      title: "6. Lawful Basis for Processing (UK GDPR)",
      content: "We process your data under the following legal bases:",
      items: [
        "Consent – when you voluntarily submit information or subscribe to our mailing list",
        "Contract – to fulfil service agreements or proposals",
        "Legitimate Interest – for website analytics, business operations, and improving user experience",
        "Legal Obligation – where required by law (e.g., tax or anti-fraud laws)"
      ],
    },
    {
      title: "7. How We Protect Your Data",
      content: "We use appropriate technical and organisational measures to protect your personal data, including:",
    items: [
        "SSL encryption across our site",
        "Restricted access to sensitive data",
        "Secure cloud storage and communication channels",
        "Regular audits and privacy reviews"
      ],
    },
    {
      title: "8.  Data Sharing and Disclosure",
      content: "We do not sell or rent your data. We may share your data with:",
      items: [
        "Our authorised team members and subcontractors (under NDA)",
        "UK-based partners or project managers (when relevant to your request)",
        "Service providers like email marketing platforms or cloud hosting (GDPR-compliant only)",
        "Regulatory authorities if required by law"
      ],
     
    },
    {
      title: "9.International Transfers",
      content: "As an offshore service provider with operations in India, your personal data may be processed outside the UK. We ensure all international data transfers are made under appropriate safeguards, such as Standard Contractual Clauses (SCCs) or other mechanisms approved under UK GDPR."
    },
    {
      title: "10.  Data Retention",
      content: "We retain your personal data only as long as necessary:",
      items: [
        "Enquiry data: 12–24 months",
        "Project/client data: Up to 6 years (for contractual/legal purposes)",
        "Marketing data: Until you unsubscribe or withdraw consent",
      ],
    },
      {
        title: "11. Your Rights Under UK GDPR",
      content: "You have the right to:",
      items: [
        "Access your personal data (Subject Access Request)",
        "Correct inaccurate or incomplete data",
        "Request deletion of your data (“Right to be Forgotten”)",
        "Restrict or object to processing",
        "Data portability (receive your data in a machine-readable format)",
        "Withdraw consent at any time",
        "Lodge a complaint with the Information Commissioner’s Office (ICO)",
      ],
       note:"👉 To exercise your rights, please contact us at: info@vyomedge.com",
    },
     {
      title: "12. Cookies and Tracking",
      content: "We use cookies to enhance user experience and track performance. For full details, please see our Cookie Policy."
    },
     {
      title: "13. Third-Party Links",
      content: "Our website may include links to third-party websites or tools. We are not responsible for the privacy practices or content of those external sites."
    },
     {
      title: "14. Policy Updates",
      content: "We may update this Privacy Policy from time to time to reflect changes in law or services. Please check this page periodically for updates. The latest revision date will always be listed at the top."
    },
     
    {
      title: "📩 Contact Us",
      content: "If you have any questions or concerns about this Privacy Policy or how we handle your data, you can reach us at:",
      contactInfo: {
        company: "VyomEdge",
        email: " 📧 Email: info@vyomedge.com",
      
      }
    }
  ]
};

export default function PrivacyPolicy() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <>
        <SEO
          url='https://www.vyomedge.uk/privacy-policy'
          metaTitle='Privacy Policy | VyomEdge GDPR Compliance'
          metaDescription="View VyomEdge's privacy policy outlining how we collect, store and use your data in compliance with UK GDPR."
          keywords='privacy policy UK, VyomEdge privacy, UK GDPR policy, data privacy UK, website privacy UK'
          canonical='https://www.vyomedge.uk/privacy-policy'
          ogTitle='Privacy Policy | VyomEdge GDPR Compliance'
          ogDescription="View VyomEdge's privacy policy outlining how we collect, store and use your data in compliance with UK GDPR."
          ogImage=''
          twitterTitle='Privacy Policy | VyomEdge GDPR Compliance'
          twitterDescription="View VyomEdge's privacy policy outlining how we collect, store and use your data in compliance with UK GDPR."
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
                fontFamily: "Akatab,Sans-serif",
                background: "#001538",
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              {privacyData.title}
            </Typography>


            <Typography variant="h6" color="#000000" sx={{ fontStyle: 'italic' }}>
              Welcome to {privacyData.companyName}
            </Typography>

          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body1" >
            {privacyData.description}
          </Typography>

        {/* <Typography variant="body1" >
           {`   This Privacy Policy explains how we collect, use, share, and protect your information when you use our website, contact us, or plan your dream wedding with us.`}
          </Typography>*/}
        </StyledPaper>

        {/* Privacy Sections */}
        {privacyData.sections.map((section, index) => (
          <StyledPaper key={index} elevation={2}>
            <SectionTitle variant="h5" component="h2">
              {section.title}
            </SectionTitle>

            {section.content && (
              <Typography variant="body1" sx={{ mb: 2 }}>
                {section.content}
              </Typography>
            )}

            {section.websiteUrl && (
              <Typography variant="body1" color="primary" sx={{ mb: 2 }}>
                {section.websiteUrl}
              </Typography>
            )}

            {section.additionalContent && (
              <Typography variant="body1" sx={{ mb: 2 }}>
                {section.additionalContent}
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

            {section.subsections && section.subsections.map((subsection, subIndex) => (
              <Box key={subIndex} sx={{ mt: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
                  {subsection.subtitle}
                </Typography>
                <List sx={{ py: 0 }}>
                  {subsection.items.map((item, itemIndex) => (
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
              </Box>
            ))}

            {section.contactEmail && (
              <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic' }}>
                {section.contactEmail}
              </Typography>
            )}

            {section.note && (
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  fontStyle: 'italic',
                  color: 'text.secondary',
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
                <Typography variant="body1" color="#000000">
                  {section.contactInfo.email}
                </Typography>
                <Typography variant="body1" color="#000000">
                  {section.contactInfo.phone}
                </Typography>
              </Box>
            )}
          </StyledPaper>
        ))}
      </Container>
    </>
  );
}