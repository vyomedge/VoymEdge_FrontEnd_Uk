// import React from "react";
// import { Box, Grid, Typography } from "@mui/material";
// import Image from "next/image";

// const services = [
//   {
//     icon: "/ourService1.svg",
//     title: "Custom Web App Development",
//     description: "Fully tailored solutions, built from scratch.",
//   },
//   {
//     icon: "/ourService2.svg",
//     title: "API Integration (REST & GraphQL)",
//     description: "Smooth backend connectivity.",
//   },
//   {
//     icon: "/ourService3.svg",
//     title: "React Front-End",
//     description: "Dynamic UIs with React, Redux, and Hooks.",
//   },
//   {
//     icon: "/ourService4.svg",
//     title: "Node.js Backend",
//     description: "Scalable and event-driven backend services.",
//   },
//   {
//     icon: "/ourService5.svg",
//     title: "Cloud Deployment",
//     description: "AWS, Vercel, or Azure setup with CI/CD.",
//   },
//   {
//     icon: "/ourService6.svg",
//     title: "Code Maintenance & Upgrades",
//     description: "Ongoing support for scalability.",
//   },
// ];

// const ServiceCard = ({ icon, title, description }) => (
//   <Box
//     sx={{
//       frontFamily: "Manrope, sans-serif",
//       border: "1.8px solid #8A2BE2",
//       borderRadius: "12px",
//       p: { xs: 2.5, sm: 3 },
//       width: "100%",
//       maxWidth: 340,
//       height: "100%",
//       textAlign: "left",
//       transition: "transform 0.3s ease, box-shadow 0.3s ease",
//       backgroundColor: "#fff",
//       "&:hover": {
//         transform: "translateY(-6px)",
//         boxShadow: "0px 6px 20px rgba(138, 43, 226, 0.12)",
//       },
//     }}
//   >
//     <Box display="flex" alignItems="center" mb={2}>
//       <Image
//         src={icon}
//         alt={title}
//         width={50}
//         height={30}
//         style={{ marginRight: 12 }}
//       />
//       <Typography
//         variant="h6"
//         sx={{
//           frontFamily: "Manrope, sans-serif",
//           fontWeight: 700,
//           fontSize: { xs: "16px", sm: "18px" },
//           color: "#2D2A34",
//         }}
//       >
//         {title}
//       </Typography>
//     </Box>

//     <Typography
//       sx={{
//         frontFamily: "Manrope, sans-serif",
//         fontSize: { xs: "14px", sm: "15px", md: "18px" },
//         fontWeight: "500 ",
//         color: "#443B56",
//         lineHeight: 1.4,
//       }}
//     >
//       {description}
//     </Typography>
//   </Box>
// );

// const MernServices = () => {
//   return (
//     <Box
//       px={{ xs: 5, sm: 3, md: 6 }}
//       py={{ xs: 6, sm: 8, md: 10 }}
//       maxWidth="1300px"
//       mx="auto"
//       textAlign="center"
//     >
//       <Typography
//         variant="h2"
//         sx={{
//           fontFamily: "sen, sans-serif",
//           fontWeight: 600,
//           color: "#322C3E",
//           fontSize: { xs: "36px", sm: "44px", md: "48px" },
//           mb: { xs: 4, sm: 6 },
//         }}
//       >
//         {`  Our MERN Services Include:`}
//       </Typography>

//       <Grid
//         container
//         spacing={{ xs: 3, sm: 4 }}
//         justifyContent="center" //
//       >
//         {services.map((service, index) => (
//           <Grid
//             item
//             xs={12}
//             sm={6}
//             md={4}
//             key={index}
//             display="flex"
//             justifyContent="center"
//           >
//             <ServiceCard
//               icon={service.icon}
//               title={service.title}
//               description={service.description}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default MernServices;

import { List, ListItem, Paper, styled, Typography } from "@mui/material";
import { Box, Container, Grid } from "@mui/system";
import Image from "next/image";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const servicesData = [
  {
    id: 1,
    image: "/services1.png",
    title: "MERN Stack Development",
    description:
      "Harness the power of full-stack JavaScript with our MongoDB, Express, React, and Node.js solutions. We build high-performance web applications with responsive interfaces and real-time capabilities, ideal for businesses looking to scale fast and compete digitally.",
    list: { title: "", points: [] },
    footer: null,
  },
  {
    id: 2,
    image: "/services2.png",
    title: "Python Development",
    description:
      "From Django web apps to AI-driven automation, our Python developers bring speed, security, and versatility to your digital ecosystem. Perfect for data-heavy, enterprise-grade, or ML-backed solutions tailored for modern businesses.",
    list: { title: "", points: [] },
    footer: null,
  },
  {
    id: 3,
    image: "/services3.png",
    title: "Java Development",
    description:
      "We offer robust enterprise Java development for industries like finance, healthcare, logistics, and beyond. Build secure, scalable, and high-performing applications with long-term stability and professional support.",
    list: { title: "", points: [] },
    footer: null,
  },
  {
    id: 4,
    image: "/services4.png",
    title: "Cybersecurity Services",
    description:
      "Your business deserves enterprise-grade protection. We provide:",
    list: {
      title: "",
      points: [
        "Vulnerability assessments",
        "Penetration testing",
        "Endpoint & network security",
        "24/7 monitoring and incident response",
      ],
    },
    footer:
      "Stay compliant, secure, and resilient in an evolving threat landscape.",
  },
  {
    id: 5,
    image: "/services5.png",
    title: "Cloud Services (AWS, Azure, GCP)",
    description: "Accelerate innovation with cloud-native architectures.",
    list: {
      title: "We offer:",
      points: [
        "Cloud strategy & consulting",
        "Migration to AWS, Azure or GCP",
        "DevOps & CI/CD pipelines",
        "Ongoing cloud management",
      ],
    },
    footer: "Optimised for agility, scale, and performance.",
  },
  {
    id: 6,
    image: "/services6.png",
    title: "Blockchain Development",
    description: "",
    list: {
      title:
        "Reimagine trust and transparency with decentralised solutions. We design and develop:",
      points: [
        "Smart contracts",
        "dApps on Ethereum or Polygon",
        "Private blockchain solutions (Hyperledger)",
        "NFT and Web3 platforms",
      ],
    },
    footer:
      "For fintechs, startups, and innovators seeking a technological edge.",
  },
  {
    id: 7,
    image: "/services7.png",
    title: "UI/UX Design Services",
    description: "",
    list: {
      title: "We combine strategy, creativity, and user psychology to create:",
      points: [
        "Wireframes & prototypes",
        "Mobile & web UI design",
        "Brand consistency",
        "Accessibility and responsiveness",
      ],
    },
    footer: "Because beautiful design should convert, not just impress.",
  },
  {
    id: 8,
    image: "/services8.png",
    title: "Digital Marketing & SEO",
    description: "",
    list: {
      title: "We grow your online presence with smart, data-driven marketing:",
      points: [
        "Local & technical SEO (UK-focused)",
        "PPC Campaigns (Google & Meta Ads)",
        "Social media management",
        "Content marketing & blogging",
        "Conversion rate optimisation (CRO)",
      ],
    },
    footer: "Let your brand be seen — and chosen.",
  },
  {
    id: 9,
    image: "/services9.png",
    title: "IT Support & Maintenance",
    description:
      "24/7 tech support that keeps your operations smooth and secure.",
    list: {
      title: "Our UK-aligned support teams provide:",
      points: [
        "Server and application monitoring",
        "Security patching and updates",
        "Infrastructure audits",
        "Remote IT troubleshooting",
      ],
    },
    footer: "Let us manage the tech, so you can focus on growth.",
  },
  {
    id: 10,
    image: "/services10.png",
    title: " IT Staffing & Resource Augmentation",
    description:
      "Whether you need short-term specialists or dedicated full-time resources, we provide:",
    list: {
      title: "",
      points: [
        "Remote developers, designers, testers",
        "Project-based or long-term contracts",
        "Fully managed or self-managed teams",
        "Flexible hiring with fast onboarding",
      ],
    },
    footer: "Perfect for scaling your tech capacity without overheads.",
  },
];

const MernServices = () => {
  return (
    <>
      <Box
        sx={{ background: `linear-gradient(180deg, #FFFFFF 0%, #E5FFFB 100%)` }}
        pb={4}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "sen, sans-serif",
              lineHeight: "130%",
              color: "#322C3E",
              fontSize: {
                xs: "24px", // mobile
                sm: "32px", // tablet
                md: "40px", // laptop
                lg: "48px", // desktop
              },
              mb: 2,
              mt: 3,
              whiteSpace: "nowrap",
              textAlign: "center",
            }}
          >
            {`What We Offer`}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              justifyContent={"center"}
            >
              {servicesData?.map((ele, index) => (
                <Grid
                  key={index}
                  size={{ xs: 12, sm: 6, md: 6 }}
                  sx={{ marginTop: 5 }}
                >
                  <Box
                    sx={{
                      boxShadow: "1px 1px 10px #ddd",
                      p: 5,
                      borderRadius: 2,
                      backgroundColor: "#fff",
                      display: "flex", // fill height
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: { lg: 250, md: 230, sm: 200, xs: 170 },
                        position: "relative",
                        marginTop: "-70px",
                        borderRadius: 5,
                      }}
                    >
                      <Image src={ele.image} alt="image" fill />
                    </Box>

                    <Typography
                      variant="subheading"
                      component="subheading"
                      sx={{
                        frontFamily: "Manrope, sans-serif",
                        fontWeight: 500,
                        fontSize: "20px",
                        mb: 2,
                        mt: 2,
                        background:
                          "linear-gradient(135deg, rgba(211, 0, 229, 1) , rgba(118, 0, 196, 1),rgba(76, 255, 231, 1))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block",
                      }}
                    >
                      {ele.title}
                    </Typography>
                    <Typography color="#443B56">{ele.description}</Typography>
                    <Typography color="#443B56">{ele?.list?.title}</Typography>
                    <List>
                      {ele?.list?.points.map((val, index) => (
                        <ListItem sx={{ p: 0 ,color:"#443B56"}} key={index}>
                          *&ensp; {val}
                        </ListItem>
                      ))}
                    </List>
                    <Typography color="#443B56">{ele?.footer}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "sen, sans-serif",
              lineHeight: "130%",
              color: "#322C3E",
              fontWeight: 500,
              fontSize: {
                xs: "24px", // mobile
                sm: "32px", // tablet
                md: "40px", // laptop
                lg: "48px", // desktop
              },
              mb: 2,
              mt: 3,
              textAlign: "center",
            }}
          >
            {` Ready to Elevate Your Digital Infrastructure?`}
          </Typography>
          <Typography
            sx={{
              fontFamily: "sen, sans-serif",
              lineHeight: "130%",
              color: "#322C3E",
              fontSize: {
                xs: "14px", // mobile
                sm: "16px", // tablet
                md: "18px", // laptop
                lg: "20px", // desktop
              },
              mb: 4,
              mt: 3,
              textAlign: "center",
            }}
          >
            {"Explore our Packages or Contact Us to get started."}
            <br />
            {" Let VyomEdge be your "}
            <b>{"long-term technology and marketing partner."}</b>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default MernServices;
