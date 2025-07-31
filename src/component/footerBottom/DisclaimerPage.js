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
    color: "#000000",
    fontWeight: 600,
    position: 'absolute',
    left: '8px',
  },
  paddingLeft: theme.spacing(3),
}));

const disclaimerData = {
  title: "Disclaimer",
  lastUpdated: "01 August 2025",
  companyName: "VyomEdge",
  website: "info@vyomedge.com",
 // description: "",
  sections: [
    {
      title: "1. General Information ",
      content: "The content provided on this website (www.vyomedge.uk) is for general informational purposes only. VyomEdge UK makes every effort to ensure that the information on this site is accurate and up to date. However, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained herein.",
      note: "Any reliance you place on such information is strictly at your own risk."
    },
    {
      title: "2.Professional & Technical Content",
      content: "While VyomEdge UK offers services in web development (MERN Stack, Python), UI/UX design, and digital marketing, none of the material on this website should be considered professional advice (such as legal, financial, or regulatory advice). Any consultation or service recommendations are given based on your individual brief or request, and not as general guidance for public application.",
      
    },
    {
      title: "3.  External Links & Third-Party Content",
      content: "Our website may contain links to external websites and third-party tools that are not provided or maintained by VyomEdge UK. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these third-party websites.",
       additionalContent: "We are not responsible for the content, privacy policies, or practices of any linked third-party sites and the inclusion of any link does not imply our endorsement of the views expressed within them.",
    
    },
    {
      title: "4.Limitation of Liability",
      content: "To the fullest extent permitted by law, VyomEdge UK shall not be liable for any loss or damage, including but not limited to indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website or our services.",
     
      additionalContent: "VyomEdge UK does not guarantee uninterrupted access to the website and shall not be held liable if the website becomes temporarily unavailable due to issues beyond our control.",
     
    },
    {
      title: " Service Availability & Accuracy",
      content: "We reserve the right to modify or withdraw services described on the website at any time without prior notice. Service descriptions are intended to provide a general overview and do not constitute a binding offer or contract unless agreed in writing through a formal proposal or agreement.",
     
    },
    {
      title: "6. Intellectual Property",
      content: "Unless otherwise stated, all content on this site including text, graphics, logos, icons, and images are the intellectual property of VyomEdge UK or used under appropriate licence. Any unauthorised reproduction or use of any materials from this site is strictly prohibited.",
     
    },
    {
      title: "7. Governing Law",
      content: "This Disclaimer shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising under or in connection with this disclaimer shall be subject to the exclusive jurisdiction of the courts of the United Kingdom.",
    },
    {
      title: "📩 Contact Us",
      content: "If you have any questions about this Disclaimer or require further clarification, please contact us:",
      contactInfo: {
        email: "📧 Email: info@vyomedge.com",
      }
    }
  ]
};

export default function Disclaimer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <>
        <SEO
          url='https://www.vyomedge.uk/disclaimer'
          metaTitle='Disclaimer | VyomEdge Legal Notice'
          metaDescription='Read the full disclaimer outlining liability, third-party content, and usage policies for VyomEdge’s website.'
          keywords='disclaimer VyomEdge, UK website legal disclaimer, web services disclaimer UK'
          canonical='https://www.vyomedge.uk/disclaimer'
          ogTitle='Disclaimer | VyomEdge Legal Notice'
          ogDescription='Read the full disclaimer outlining liability, third-party content, and usage policies for VyomEdge’s website.'
          ogImage=''
          twitterTitle='Disclaimer | VyomEdge Legal Notice'
          twitterDescription='Read the full disclaimer outlining liability, third-party content, and usage policies for VyomEdge’s website.'
          twitterImage=''
          robots="index, follow"//  default
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
                backgroundColor: '#001538',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,

              }}
            >
              {disclaimerData.title}
            </Typography>
            
            
            <Typography variant="h6" color="#000000" sx={{ fontStyle: 'italic' }}>
              Welcome to {disclaimerData.companyName}!</Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body1" >
            {disclaimerData.description}
          </Typography>

         {/* <Typography variant="body1" >
            {` This disclaimer outlines how to interpret the information on our website.`}
          </Typography>*/}
        </StyledPaper>

        {/* Disclaimer Sections */}
        {disclaimerData.sections.map((section, index) => (
          <StyledPaper key={index} elevation={2}>
            <SectionTitle variant="h5" component="h2">
              {section.title}
            </SectionTitle>

            {section.content && (
              <Typography variant="body1" sx={{ mb: 2 }}>
                {section.content}
              </Typography>
            )}

            {section.highlight && (
              <Typography
                variant="body1"

                sx={{
                  mb: 2,
                  fontWeight: 500,

                }}
              >
                {section.highlight}
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

            {section.note && (
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  fontStyle: 'italic',
                  // color: 'text.secondary',
                  // borderLeft: `3px solid ${theme.palette.secondary.main}`,
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