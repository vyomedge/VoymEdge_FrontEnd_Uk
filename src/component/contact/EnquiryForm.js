import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Grid,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material';
import CustomButton2 from '@/common-component/button/customButton2';

const EnquiryForm = () => {
    const [service, setService] = useState('');

    const handleChange = (event) => {
        setService(event.target.value);
    };

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: { xs: 4, sm: 6, md: 6 },
                py: { xs: 4, sm: 4, md: 4 },
            }}
        >
            <Box sx={{ maxWidth: '700px', width: '100%' }}>
                {/* Heading */}
                <Typography

                    variant='h2'
                    component="h2"
                    sx={{
                        fontFamily: "Sen",
                        fontWeight: 500,
                        lineHeight: "130%",
                        color: "#322C3E",
                        fontSize: { xs: "40px", sm: "40px", md: "42px", lg: '48px' },
                        mb: 1,
                    }}


                >
                    {`  Enquiry Form`}
                </Typography>

                {/* Subheading */}
                <Typography
                    sx={{
                        fontFamily: "Manrope",
                        fontWeight: 500,
                        fontSize: { xs: "18px", md: "18px" },
                        lineHeight: "160%",
                        mt: 1,
                        mb: 2,
                        color: '#4B4B4B',
                        maxWidth: 500,
                        maxWidth: '520px',
                    }}
                >
                    {` Have a project or just want to say hello? Fill out the form below and
                    our team will get back within 24 hours.`}
                </Typography>

                {/* Form Starts */}
                <Grid container spacing={2} xs={12} sm={12} md={6}>
                    <label>{'Full Name'}</label>
                    <TextField
                        fullWidth
                        placeholder="Full Name"
                        variant="outlined"
                        InputProps={{
                            sx: {
                                backgroundColor: '#f6f1ff',
                                borderRadius: '8px',
                                border: 'none',
                            },
                        }}
                    />
                    <label>{'Business Email'}</label>
                    <TextField
                        fullWidth
                        placeholder="Business Email"
                        variant="outlined"
                        InputProps={{
                            sx: {
                                backgroundColor: '#f6f1ff',
                                borderRadius: '8px',
                                border: 'none',
                            },
                        }}
                    />
                    <label>{'Phone'}</label>
                    <TextField
                        fullWidth
                        width="100%"
                        maxWidth="300px"
                        placeholder="1234567890"
                        variant="outlined"
                        InputProps={{
                            sx: {
                                backgroundColor: '#f6f1ff',
                                borderRadius: '8px',
                                border: 'none',
                            },
                        }}
                    />
                    <label>{'Type Of  project'}</label>
                    <FormControl fullWidth>
                        <InputLabel id="service-label">{'Service'}</InputLabel>
                        <Select
                            labelId="service-label"
                            id="service-select"
                            value={service}
                            label="Service"
                            onChange={handleChange}
                            sx={{
                                backgroundColor: '#f6f1ff',
                                borderRadius: '8px',
                            }}
                        >
                            <MenuItem value="web">{'Web Development'}</MenuItem>
                            <MenuItem value="seo">{'SEO Optimization'}</MenuItem>
                            <MenuItem value="ads">{'Paid Ads'}</MenuItem>
                            <MenuItem value="design">{'UI/UX Design'}</MenuItem>
                        </Select>
                    </FormControl>



                    <label>{'Tell us about your project'}</label>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        placeholder="Your Message"
                        variant="outlined"
                        InputProps={{
                            sx: {
                                backgroundColor: '#f6f1ff',
                                borderRadius: '8px',
                                border: 'none',
                            },
                        }}
                    />




                </Grid>

                {/* Submit Button */}
                <CustomButton2 data-testid="notify-button"
                    onClick={() => console.log('Form Submitted')}
                    sx={{
                        borderRadius: '5px',
                        mt: 4,
                        fontSize: '15px',
                        fontWeight: '500',
                    }}
                >
                    {` Let's Talk`}
                </CustomButton2>
            </Box>
        </Box>
    );
};

export default EnquiryForm;
