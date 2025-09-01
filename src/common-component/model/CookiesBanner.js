import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Switch,
  FormControlLabel,
  Divider,
  Paper,
  Slide,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon, Cookie as CookieIcon } from "@mui/icons-material";

import Cookies from "js-cookie";
import CustomButton1 from "../button/customButton1";
import CustomButton2 from "../button/customButton2";

const COOKIE_KEY = "cookie_preferences";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const cookiePref = Cookies.get(COOKIE_KEY);
    if (cookiePref) {
      try {
        const parsed = JSON.parse(cookiePref);
        setPreferences({
          necessary: true,
          analytics: !!parsed.analytics,
          marketing: !!parsed.marketing,
        });
      } catch (e) {
        // If parsing fails, show banner
        setShowBanner(true);
      }
    } else {
      // If no cookie preferences exist, show banner
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    if (!showBanner) setShowPreferences(false);
  }, [showBanner]);

  if (!showBanner) return null;
  const savePreferencesToCookie = (prefs) => {
    Cookies.set(COOKIE_KEY, JSON.stringify(prefs), {
      expires: 365,
      sameSite: "Lax",
    });
  };
  const handleAcceptAll = () => {
    const newPrefs = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(newPrefs);
    savePreferencesToCookie(newPrefs);
    setShowBanner(false);
  };

  const handleRejectNonEssential = () => {
    const newPrefs = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(newPrefs);
    savePreferencesToCookie(newPrefs);
    setShowBanner(false);
  };

  const handleManagePreferences = () => {
    setShowPreferences(true);
  };

  const handleSavePreferences = () => {
    setShowPreferences(false);
    savePreferencesToCookie(preferences);
    setShowBanner(false);
  };

  const handlePreferenceChange = (type) => (event) => {
    setPreferences((prev) => ({
      ...prev,
      [type]: event.target.checked,
    }));
  };

  return (
    <>
      {/* Cookie Banner */}
      <Paper
        elevation={8}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          p: 2,
          backgroundColor: "rgba(1, 29, 74, 0.8)",
          color: "white",
          fontFamily: "Akatab,Sans-serif",
          borderRadius: "16px 16px 0 0",
        }}
      >
        <Box
          sx={{
            mx: "auto",
            display: { xs: "block", sm: "block", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "60%" },
              display: "flex",
              alignItems: "flex-start",
              gap: 1,
              mb: 0,
            }}
          >
            {/* <CookieIcon sx={{ fontSize: 32, color: '#ffa726', mt: 0.5 }} /> */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                component="h5"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                {"We Use Cookies"}
              </Typography>
              <Typography
                variant="p"
                sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1 }}
              >
                {`This website uses cookies to give you a better, faster, and more personalized experience.  
                By continuing to browse, you agree to our use of cookies as per our Privacy Policy.`}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: { xs: "flex-end", sm: "flex-end" },
              // mt: { xs: 2, sm: 0 },
            }}
          >
            <Box sx={{display:"flex",gap:"10px"}}>
              <CustomButton2
                onClick={handleAcceptAll}
                sx={{
                  padding: "5px 15px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  flex: { xs: 1, sm: "none" },
                  color: "#fff !important",
                }}
              >
                Accept All
              </CustomButton2>
              <CustomButton2
                variant="outlined"
                onClick={handleManagePreferences}
                sx={{
                  padding: "5px 15px",
                  // width:"250px",
                  fontSize: "14px",
                  borderColor: "white",
                  whiteSpace: "nowrap",
                  color: "white",
                  // flex: { xs: 1, sm: "none" },
                }}
              >
                Manage Preferences
              </CustomButton2>
            </Box>
           <Box sx={{display:"flex",justifyContent:"flex-end"}}>
           <Button
              variant="text"
              onClick={handleRejectNonEssential}
              sx={{
                padding: "5px 15px",
                fontSize: "14px",
                fontWeight: "bold",
                marginTop: "15px",
                textTransform: "capitalize",
                whiteSpace: "nowrap",
                color: "rgba(255,255,255,0.7)",
                "&:hover": {
                  color: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
                justifySelf:"flex-end"
                // flex: { xs: 1, sm: "none" },
              }}
            >
              Reject Non-Essential
            </Button>
           </Box>
          </Box>
        </Box>
      </Paper>

      {/* Manage Preferences Dialog */}
      <Dialog
        open={showPreferences}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setShowPreferences(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            m: 2,
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: 1,
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            {"Cookie Preferences"}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={() => setShowPreferences(false)}
            sx={{ color: "grey.500" }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          {/* Necessary Cookies */}
          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {"Necessary Cookies"}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "success.main", fontWeight: "bold" }}
                >
                  ✔ Always Active
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {
                "These are essential for the website to function properly (you can't turn these off)."
              }
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          {/* Analytics Cookies */}
          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {"Analytics Cookies"}
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.analytics}
                    onChange={handlePreferenceChange("analytics")}
                  />
                }
                label=""
                sx={{ m: 0 }}
              />
            </Box>
            <Typography variant="body2" color="text.secondary">
              {`Help us understand how users interact with our site so we can
              improve the experience.`}
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          {/* Marketing Cookies */}
          <Box sx={{ mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {`Marketing Cookies`}
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.marketing}
                    onChange={handlePreferenceChange("marketing")}
                  />
                }
                label=""
                sx={{ m: 0 }}
              />
            </Box>
            <Typography variant="body2" color="text.secondary">
              {`Allow us to show you personalized ads and offers on platforms like Instagram, Google, and YouTube.`}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 1 }}>
          <CustomButton1 onClick={handleSavePreferences} size="large" fullWidth>
            {`Save My Preferences`}
          </CustomButton1>
        </DialogActions>
      </Dialog>
    </>
  );
}
