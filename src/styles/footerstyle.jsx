export const footerstyle = {
  footericonhover: {
    p: 1,
    borderRadius: "50%",
    position: "relative",
    overflow: "visible",

    "&::before": {
      content: '""',
      position: "absolute",
      top: -1,
      left: -1,
      right: -1,
      bottom: -1,
      borderRadius: "50%",
      padding: "2px",
      background:
        "linear-gradient(260.31deg, #4CFFE7 0%, #7600C4 41.58%, #D300E5 87.79%)",
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "destination-out",
      maskComposite: "exclude",
      opacity: 0,
      transition: "opacity 0.3s ease",
      pointerEvents: "none",
      zIndex: 0,
    },
    "&:hover::before": {
      opacity: 1,
    },
    "& > *": {
      position: "relative",
      zIndex: 1,
    },
  },
};
