import React, { useState } from "react";
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
  Container,
} from "@mui/material";
import CustomButton2 from "@/common-component/button/customButton2";

const inputstyle = {
  backgroundColor: "#F7F3FF",
  borderRadius: "8px",
  transition: "0.3s ease",
  "& fieldset": {
    boxShadow: "0 0 0 1px rgba(211, 0, 229, 0.2)", // remove the default outlined border
  },
  "&:hover fieldset": {
    border: "none", // remove border on hover
  },
  "&.Mui-focused fieldset": {
    border: "none", // remove border on focus
  },
  "&:hover": {
    boxShadow: "0 0 0 1px rgba(211, 0, 229, 0.5)", // optional subtle hover effect without border
  },
  "&.Mui-focused": {
    boxShadow: "0 0 0 1px rgba(211, 0, 229, 0.5)", // optional glowing effect on focus
  },
};

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";

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
      console.log("Submitted:", formData);
      // Optional: Clear form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setErrors({});
      alert("Form submitted successfully!");
    }
  };

  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // py: 4,
        }}
      >
        <Box>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: "sen, sans-serif",
              fontWeight: 500,
              lineHeight: "130%",
              color: "#322C3E",
              fontSize: { xs: "28px", sm: "35px", md: "40px", lg: "48px" },
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
              color: "#4B4B4B",
            }}
          >
            {` Have a project or just want to say hello? Fill out the form below and
          our team will get back within 24 hours.`}
          </Typography>

          <Grid container spacing={2}>
            <Box sx={{ width: "100%" }}>
              <label>Full Name</label>
              <TextField
                fullWidth
                placeholder="Full Name"
                variant="outlined"
                value={formData.fullName}
                onChange={handleChange("fullName")}
                error={!!errors.fullName}
                helperText={errors.fullName}
                InputProps={{
                  sx: inputstyle,
                }}
              />
            </Box>

            <Box
              sx={{
                display: { md: "flex", sm: "flex", sx: "block" },
                width: "100%",
                gap: 4,
              }}
            >
              <Box sx={{ width: "100%" }}>
                <label>Business Email</label>
                <TextField
                  fullWidth
                  placeholder="Business Email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange("email")}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    sx: inputstyle,
                  }}
                />
              </Box>

              <Box sx={{ width: "100%" }}>
                <label>Phone</label>
                <TextField
                  fullWidth
                  placeholder="1234567890"
                  variant="outlined"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  InputProps={{
                    sx: inputstyle,
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ width: "100%" }}>
              <label>Type Of Project</label>
              <FormControl fullWidth error={!!errors.service}>
                <Select
                  labelId="service-label"
                  value={formData.service}
                  onChange={handleChange("service")}
                  sx={inputstyle}
                  placeholder="dfaijhanfcfc"
                >
                  <MenuItem value="web">Web Development</MenuItem>
                  <MenuItem value="seo">SEO Optimization</MenuItem>
                  <MenuItem value="ads">Paid Ads</MenuItem>
                  <MenuItem value="design">UI/UX Design</MenuItem>
                </Select>
                {errors.service && (
                  <FormHelperText>{errors.service}</FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box sx={{ width: "100%" }}>
              <label>Tell us about your project</label>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange("message")}
                error={!!errors.message}
                helperText={errors.message}
                InputProps={{
                  sx: inputstyle,
                }}
              />
            </Box>
          </Grid>

          {/* Submit Button */}
          <CustomButton2
            data-testid="notify-button"
            onClick={handleSubmit}
            sx={{
              borderRadius: "5px",
              mt: 4,
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            {" Let's Talk"}
          </CustomButton2>
        </Box>
      </Box>
    </Container>
  );
};

export default EnquiryForm;
