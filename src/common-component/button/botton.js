import Link from "next/link";
import { Box } from "@mui/material";

export default function BorderAnimatedLinkButton({ handleClick, title, sx }) {
  return (
    <Link href="/" passHref legacyBehavior>
      <a style={{ textDecoration: "none" }}>
        <Box
          onClick={handleClick}
          sx={{
            position: "relative",
            display: "inline-block",
            px: 3,
            py: 1.5,
            mt: 2,
            fontSize: { xs: "15px", sm: "15px", md: "16px", lg: "16px" },
            fontWeight: 500,
            borderRadius: "5px",
            background: "transparent",
            cursor: "pointer",
            overflow: "hidden",
            textAlign: "center",
            backgroundColor: "transparent",
            border: "2px solid #4CFFE7",
            textTransform: "none",
            fontWeight: 600,
            background:
              "linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            "&:hover": {
              background: `linear-gradient(260.31deg, #4CFFE7 0%, #7600C4 41.58%, #D300E5 87.79%)`,
              WebkitBackgroundClip: "unset",
              WebkitTextFillColor: "unset",

              color: "#fff",
            },
            ...sx,
          }}
        >
          {title}
        </Box>
      </a>
    </Link>
  );
}
