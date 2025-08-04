import React, { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Container,
    Box
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const faqData = [
    {
        question: 'What services does VyomEdge UK offer for British businesses?',
        answer: (
            <div>
                <Typography gutterBottom fontWeight={500}>
                  {`  VyomEdge UK specializes in:`}
                </Typography>

                <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginTop: 0, marginBottom: '0.5rem' }}>
                    <li>
                        <span style={{
                            background: 'linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 500
                        }}>
                           {` Custom MERN Stack Development`}
                        </span> {`(MongoDB, Express.js, React.js, Node.js)`}
                    </li>
                    <li>
                        <span style={{
                            background: 'linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 500
                        }}>
                          {`  Python & Django Development`}
                        </span>
                    </li>
                    <li>
                        <span style={{
                            background: 'linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 500
                        }}>
                          {`  UI/UX Design & Prototyping`}
                        </span>
                    </li>
                    <li>
                        <span style={{
                            background: 'linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 500
                        }}>
                           {` Digital Marketing & SEO`}
                        </span> {`tailored for UK markets`}
                    </li>
                </ul>

                <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                    {` Each service is delivered by an experienced offshore team, ensuring scalable, secure, and cost-efficient results.`}
                </Typography>
            </div>

        ),
    },
    {
        question: 'How does VyomEdge UK ensure smooth communication for UK clients?',
        answer:  'How does VyomEdge UK ensure smooth communication for UK clients?',
    },
    {
        question: 'Where is VyomEdge UK based, and who delivers the work?',
        answer: 'Where is VyomEdge UK based, and who delivers the work?',
    },
      {
        question: 'Are your solutions compliant with UK regulations and GDPR?',
        answer:  'Are your solutions compliant with UK regulations and GDPR?',
    },
];

export default function FAQ() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container maxWidth="md" sx={{ py: 5 }}

        >
            <Typography
                variant='h2'
                component="h2"
                textAlign="center"
                mb={3}
                sx={{
                    fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "56px" },
                  fontFamily: 'sen, sans-serif',
                    fontWeight: "500",
                    color: "#322C3E",
                    lineHeight: "130%",

                }}>
                {`   VyomEdge FAQ's`}
            </Typography>

            {faqData.map((item, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                    sx={{
                        boxShadow: 'none',
                        bgcolor: 'transparent',
                        '&:before': { display: 'none' },
                        mb: 2,
                    }}
                >
                    <AccordionSummary
                        expandIcon={
                            expanded === index ? (
                                <RemoveIcon sx={{ color: '#443B56' }} />
                            ) : (
                                <AddIcon sx={{ color: '#443B56' }} />
                            )
                        }
                        sx={{borderBottom:"1px solid #999"}}
                        // remove row-reverse
                    >
                        <Box sx={{ width: '100%', }}>
                            <Typography variant="copytext1"
                                component="copytext1"
                                sx={{
                                    color: "#322C3E",
                                   fontWeight:expanded === index?700: 500,
                                    fontSize: "18px bold",
                                      frontFamily: "Manrope, sans-serif",
                                    lineHeight: "160%",
                                    
                                }}>{item.question}</Typography>
                            {/* <hr style={{ marginTop: 8, border: 'none', borderTop: '1px solid #ccc' }} /> */}
                        </Box>
                    </AccordionSummary>

                    <AccordionDetails sx={{ color: 'text.secondary' ,backgroundColor:expanded === index&&"#f3f3f3"}}>
                        {typeof item.answer === 'string' ? (
                            <Typography variant="copytext2"
                                component="copytext2"

                                sx={{
                                   frontFamily: "Manrope, sans-serif",
                                    fontWeight: 400,
                                    lineHeight: "160%",
                                    color: "#443B56",
                                }}>{item.answer}</Typography>
                        ) : (
                            item.answer
                        )}
                        {/* <hr style={{ marginTop: 16, border: 'none', borderTop: '1px solid #ccc' }} /> */}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Container>
    );
}
