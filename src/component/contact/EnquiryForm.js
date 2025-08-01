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
    FormHelperText,
} from '@mui/material';
import CustomButton2 from '@/common-component/button/customButton2';

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email';
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone must be 10 digits';
        }
        if (!formData.service) newErrors.service = 'Please select a service';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field) => (event) => {
        setFormData((prev) => ({
            ...prev,
            [field]: event.target.value,
        }));
    };

    const handleSubmit = () => {
        if (validate()) {
            console.log('Submitted:', formData);
            // Optional: Clear form
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                service: '',
                message: '',
            });
            setErrors({});
            alert('Form submitted successfully!');
        }
    };

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: { xs: 2, sm: 2, md: 2 },
                py: { xs: 4, sm: 4, md: 4 },
            }}
        >
            <Box sx={{ maxWidth: '800px', width: '100%' }}>
                <Typography
                    variant='h2'
                    component="h2"
                    sx={{
                        fontFamily: 'sen, sans-serif',
                        fontWeight: 500,
                        lineHeight: "130%",
                        color: "#322C3E",
                        fontSize: { xs: "40px", sm: "40px", md: "42px", lg: '48px' },
                        mb: 1,
                    }}
                >
                    {`  Enquiry Form`}
                </Typography>

                <Typography
                    sx={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 500,
                        fontSize: { xs: "18px", md: "18px" },
                        lineHeight: "160%",
                        mt: 1,
                        mb: 2,
                        color: '#4B4B4B',
                        maxWidth: '520px',
                    }}
                >
                    {` Have a project or just want to say hello? Fill out the form below and
          our team will get back within 24 hours.`}
                </Typography>

                <Grid container spacing={2}>

                    <label>Full Name</label>
                    <TextField
                        fullWidth
                        placeholder="Full Name"
                        variant="outlined"
                        value={formData.fullName}
                        onChange={handleChange('fullName')}
                        error={!!errors.fullName}
                        helperText={errors.fullName}
                        InputProps={{
                            sx: {
                                backgroundColor: "#F7F3FF",
                                borderRadius: '8px',
                                  transition: "0.3s ease",
                                '&:hover': {
                                  border:"1px solid  rgba(211, 0, 229, 0.5)"
                                },
                                '&.Mui-focused': {
                                   
                                    boxShadow: "0 0 0 2px rgba(211, 0, 229, 0.5)", // optional glowing effect
                                },
                            },
                        }}
                    />



                    <label>Business Email</label>
                    <TextField
                        fullWidth
                        placeholder="Business Email"
                        variant="outlined"
                        value={formData.email}
                        onChange={handleChange('email')}
                        error={!!errors.email}
                        helperText={errors.email}
                        InputProps={{
                            sx: {
                                backgroundColor: "#F7F3FF",
                                borderRadius: '8px', 
                                 transition: "0.3s ease",
                                '&:hover': {
                                  border:"1px solid  rgba(211, 0, 229, 0.5)"
                                },
                                '&.Mui-focused': {
                                   
                                    boxShadow: "0 0 0 2px rgba(211, 0, 229, 0.5)", // optional glowing effect
                                },
                            },
                        }}
                    />



                    <label>Phone</label>
                    <TextField
                        fullWidth
                        placeholder="1234567890"
                        variant="outlined"
                        value={formData.phone}
                        onChange={handleChange('phone')}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        InputProps={{
                            sx: {
                                backgroundColor: "#F7F3FF",
                                borderRadius: '8px',
                                  transition: "0.3s ease",
                                '&:hover': {
                                  border:"1px solid  rgba(211, 0, 229, 0.5)"
                                },
                                '&.Mui-focused': {
                                   
                                    boxShadow: "0 0 0 2px rgba(211, 0, 229, 0.5)", // optional glowing effect
                                },
                            },
                        }}
                    />



                    <label>Type Of Project</label>
                    <FormControl fullWidth error={!!errors.service}>
                        <InputLabel id="service-label">Service</InputLabel>
                        <Select
                            labelId="service-label"
                            value={formData.service}
                            label="Service"
                            onChange={handleChange('service')}
                            sx={{
                                backgroundColor: "#F7F3FF",
                                borderRadius: '8px',
                                  transition: "0.3s ease",
                                '&:hover': {
                                  border:"1px solid  rgba(211, 0, 229, 0.5)"
                                },
                                '&.Mui-focused': {
                                   
                                    boxShadow: "0 0 0 2px rgba(211, 0, 229, 0.5)", // optional glowing effect
                                },

                            }}
                        >
                            <MenuItem value="web">Web Development</MenuItem>
                            <MenuItem value="seo">SEO Optimization</MenuItem>
                            <MenuItem value="ads">Paid Ads</MenuItem>
                            <MenuItem value="design">UI/UX Design</MenuItem>
                        </Select>
                        {errors.service && <FormHelperText>{errors.service}</FormHelperText>}
                    </FormControl>



                    <label>Tell us about your project</label>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        placeholder="Your Message"
                      
                        value={formData.message}
                        onChange={handleChange('message')}
                        error={!!errors.message}
                        helperText={errors.message}
                        InputProps={{
                            sx: {
                                backgroundColor: "#F7F3FF",
                                borderRadius: '8px',
                                borderRadius: "8px",
                                transition: "0.3s ease",
                                '&:hover': {
                                  border:"1px solid  rgba(211, 0, 229, 0.5)"
                                },
                                '&.Mui-focused': {
                                   
                                    boxShadow: "0 0 0 2px rgba(211, 0, 229, 0.5)", // optional glowing effect
                                },
                            },
                        }}
                    />
                </Grid>


                {/* Submit Button */}
                <CustomButton2
                    data-testid="notify-button"
                    onClick={handleSubmit}
                    sx={{
                        borderRadius: '5px',
                        mt: 4,
                        fontSize: '15px',
                        fontWeight: '500',
                    }}
                >
                    Let's Talk
                </CustomButton2>
            </Box>
        </Box>
    );
};

export default EnquiryForm;
