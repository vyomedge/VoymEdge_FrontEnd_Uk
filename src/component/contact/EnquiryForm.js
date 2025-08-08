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
import MuiPhoneNumber from "mui-phone-number";

const inputstyle = {
  backgroundColor: "#F7F3FF",
  borderRadius: "4px",
  transition: "0.3s ease",
  "& fieldset": {
    boxShadow: "none !important", // remove the default outlined border
  },
  "&:hover": {
    boxShadow: "0 0 0 1px rgba(211, 0, 229, 0.5) !important", // optional subtle hover effect without border
  },
  "&:hover fieldset": {
    border: "none !important", // remove border on hover
  },
  "&.Mui-focused fieldset": {
    border: "none !important", // remove border on focus
  },

  "&.Mui-focused": {
    boxShadow: "0 0 0 1px rgba(211, 0, 229, 0.5) !important", // optional glowing effect on focus
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
    }
    //  else if (!/^\d{10}$/.test(formData.phone)) {
    //   newErrors.phone = "Phone must be 10 digits";
    // }
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
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[field];
      return updatedErrors;
    });
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
              lineHeight: "130%",
              background:
                "linear-gradient(260.31deg, #4CFFE7 0%, #7600C4 41.58%, #D300E5 87.79%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              fontSize: { xs: "28px", sm: "35px", md: "40px", lg: "40px" },
              mb: 1,
              width: "fit-content",
            }}
          >
            {`  Enquiry Form`}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Manrope, sans-serif",
              fontSize: { xs: "15px", md: "15px" },
              color: "#4B4B4B",
              mb: 1,
            }}
          >
            {` Have a project or just want to say hello? Fill out the form below and
          our team will get back within 24 hours.`}
          </Typography>

          <Grid container spacing={2}>
            <Box
              sx={{
                display: { md: "flex", sm: "flex", sx: "block" },
                width: "100%",
                gap: 2,
              }}
            >
              <Box sx={{ width: "100%" }}>
                <label>Full Name</label>
                <TextField
                  fullWidth
                  size="small"
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
              <Box sx={{ width: "100%" }}>
                <label>Business Email</label>
                <TextField
                  size="small"
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
            </Box>

            <Box
              sx={{
                display: { md: "flex", sm: "flex", sx: "block" },
                width: "100%",
                gap: 2,
              }}
            >
              {/* <Box sx={{ width: "100%" }}>
                <label>Phone</label>
                <TextField
                  fullWidth
                  size="small"
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
              </Box> */}
              <Box sx={{ width: "100%" }}>
                <label>Phone</label>
                <MuiPhoneNumber
                  defaultCountry={"gb"}
                   onlyCountries={['us', 'in', 'ca','gb']}
                  fullWidth
                  size="small"
                  
                  variant="outlined"
                  value={formData.phone}
                  onChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      phone: value,
                    }))
                  }
                  error={!!errors.phone}
                  helperText={errors.phone}
                  InputProps={{
                    sx: inputstyle,
                  }}
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                <label>Type Of Project</label>
                <FormControl fullWidth error={!!errors.service} size="small">
                  <Select
                    labelId="service-label"
                    value={formData.service}
                    onChange={handleChange("service")}
                    placeholder="dfaijhanfcfc"
                    size="small"
                    displayEmpty
                    sx={{
                      ...inputstyle,
                      "& .MuiSelect-select": {
                        color: formData.service === "" ? "gray" : "inherit",
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select a project type
                    </MenuItem>
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
            </Box>

            <Box sx={{ width: "100%" }}>
              <label>Tell us about your project</label>
              <TextField
                fullWidth
                multiline
                size="small"
                rows={3}
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
