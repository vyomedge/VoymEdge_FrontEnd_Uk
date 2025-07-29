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

const cookiesData = {
    title: " Cookie Policy",
    lastUpdated: "01 August 2025",
    companyName: "VyomEdge",
    website: "info@vyomedge.com",
    // description: "",
    sections: [
        {
            title: "🔍 What Are Cookies? ",
            content: "Cookies are small text files placed on your device when you visit our website. They help us improve your browsing experience, understand how you use our site, and offer relevant content or services.",
            additionalContent: "Cookies do not give us access to your computer or any personal data, other than the data you choose to share with us."
        },
        {
            title: "📚 Types of Cookies We Use",
            content: "While VyomEdge UK offers services in web development (MERN Stack, Python), UI/UX design, and digital marketing, none of the material on this website should be considered professional advice (such as legal, financial, or regulatory advice). Any consultation or service recommendations are given based on your individual brief or request, and not as general guidance for public application.",

        },
        {
            title: "🛑 Managing Cookie Preferences",
            content: "On your first visit, you’ll be asked to accept or manage cookies via a cookie banner. You may also control or disable cookies through your browser settings at any time.",
            additionalContent: "Visit these links for browser-specific cookie control:",
            items: [
                "Chrome",
                "Firefox",
                "Safari",
                "Edge",
            ],
        },
        {
            title: "📈 Third-Party Tools That Use Cookies",
            content: "We may use third-party services that set cookies to improve functionality and marketing:",
  items: [
                "Google Analytics – site performance tracking",
                "Meta/Facebook Pixel – marketing optimisation",
                "Hotjar – user behaviour analytics (if used)",
               
            ],
            note: "These services may collect data outside the UK. We ensure all tools are GDPR-compliant and anonymise personal identifiers where required.",

        },
        {
            title: " 📝 Updates to This Cookie Policy",
            content: "We may update this Cookie Policy to reflect legal, technical, or business changes. Please check this page regularly for updates.",

        },
      
        {
            title: "📧 Contact Us",
            content: "If you have any questions about our use of cookies, email us at:",
            contactInfo: {
                email: "📧 Email: info@vyomedge.com",
            }
        }
    ]
};

export default function Cookies() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <>
                <SEO
                    url='https://www.vyomedge.uk/cookie-policy'
                    metaTitle='Cookie Policy | How We Use Cookies | VyomEdge'
                    metaDescription="Read VyomEdge's Cookie Policy to understand how we use cookies and manage your preferences under UK GDPR."
                    keywords='cookie policy UK, cookies GDPR UK, VyomEdge cookies, web tracking policy UK'
                    canonical='https://www.vyomedge.uk/cookie-policy'
                    ogTitle='Cookie Policy | How We Use Cookies | VyomEdge'
                    ogDescription="Read VyomEdge's Cookie Policy to understand how we use cookies and manage your preferences under UK GDPR."
                    ogImage=''
                    twitterTitle='Cookie Policy | How We Use Cookies | VyomEdge'
                    twitterDescription="Read VyomEdge's Cookie Policy to understand how we use cookies and manage your preferences under UK GDPR."
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
                                fontFamily: "Akatab,Sans-serif",
                                backgroundColor: '#001538',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                mb: 2,

                            }}
                        >
                            {cookiesData.title}
                        </Typography>


                        <Typography variant="h6" color="#000000" sx={{ fontStyle: 'italic' }}>
                            Welcome to {cookiesData.companyName}!</Typography>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="body1" >
                        {cookiesData.description}
                    </Typography>

                    {/* <Typography variant="body1" >
            {` This disclaimer outlines how to interpret the information on our website.`}
          </Typography>*/}
                </StyledPaper>

                {/* Cookies Sections */}
                {cookiesData.sections.map((section, index) => (
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