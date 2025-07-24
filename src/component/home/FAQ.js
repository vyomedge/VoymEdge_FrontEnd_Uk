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
                <Typography gutterBottom fontWeight={600}>
                    VyomEdge UK specializes in:
                </Typography>

                <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginTop: 0, marginBottom: '0.5rem' }}>
                    <li>
                        <span style={{
                            background: 'linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 600
                        }}>
                            Custom MERN Stack Development
                        </span> (MongoDB, Express.js, React.js, Node.js)
                    </li>
                    <li>
                        <span style={{
                            background: 'linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 600
                        }}>
                            Python & Django Development
                        </span>
                    </li>
                    <li>
                        <span style={{
                            background: 'linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 600
                        }}>
                            UI/UX Design & Prototyping
                        </span>
                    </li>
                    <li>
                        <span style={{
                            background: 'linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 600
                        }}>
                            Digital Marketing & SEO
                        </span> tailored for UK markets
                    </li>
                </ul>

                <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                    {` Each service is delivered by an experienced offshore team, ensuring scalable, secure, and cost-efficient results.`}
                </Typography>
            </div>

        ),
    },
    {
        question: 'How long does shipping take?',
        answer: 'Shipping typically takes 3–5 business days depending on your location.',
    },
    {
        question: 'Do you offer international shipping?',
        answer: 'Yes, we ship to most countries. Rates may vary depending on destination.',
    },
      {
        question: 'How long does shipping take?',
        answer: 'Shipping typically takes 3–5 business days depending on your location.',
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
                sx={{
                    fontSize: { xs: "30px", sm: "44px", md: "56px", lg: "56px" },
                    fontFamily: "sen,serif",
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
                        sx={{}} // remove row-reverse
                    >
                        <Box sx={{ width: '100%' }}>
                            <Typography variant="copytext1"
                                component="copytext1"
                                sx={{
                                    color: "#322C3E",
                                    fontWeight: 700,
                                    fontSize: "18px bold",
                                    fontFamily: "Manrope, sans-serif",
                                    lineHeight: "160%",
                                }}>{item.question}</Typography>
                            <hr style={{ marginTop: 8, border: 'none', borderTop: '1px solid #ccc' }} />
                        </Box>
                    </AccordionSummary>

                    <AccordionDetails sx={{ color: 'text.secondary' }}>
                        {typeof item.answer === 'string' ? (
                            <Typography variant="copytext2"
                                component="copytext2"

                                sx={{
                                    fontFamily: 'Manrope, serif',
                                    fontWeight: 500,
                                    lineHeight: "160%",
                                    color: "#443B56",
                                    fontSize: { xs: "15px", sm: "15px", md: "15px", lg: "15px" }
                                }}>{item.answer}</Typography>
                        ) : (
                            item.answer
                        )}
                        <hr style={{ marginTop: 16, border: 'none', borderTop: '1px solid #ccc' }} />
                    </AccordionDetails>
                </Accordion>
            ))}
        </Container>
    );
}
