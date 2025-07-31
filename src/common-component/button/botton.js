import Link from "next/link";
import { Box } from "@mui/material";

export default function BorderAnimatedLinkButton({ handleClick }) {
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
                        fontSize: {xs:"15px", sm:"15px", md:"16px", lg:"16px"},
                        fontWeight: 500,
                        borderRadius:"5px",
                      
                        background: "transparent",
                        cursor: "pointer",
                        overflow: "hidden",
                        transition: "color 0.3s ease-in-out",
                        textAlign: "center",
                        backgroundColor: 'transparent',
                        border: '2px solid #4CFFE7',

                      
                        textTransform: 'none',
                        fontWeight: 600,
                       


                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "0%",
                            height: "2px",
                            background: 'linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                            transition: "all 0.25s linear",
                        },
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            width: "0%",
                            height: "2px",
                            background: 'linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                            transition: "all 0.25s linear",
                        },
                      
                        "&:hover::before": { width: "100%" },
                        "&:hover::after": { width: "100%" },
                        "&:hover span::before": { height: "100%" },
                        "&:hover span::after": { height: "100%" },
                    }}
                >
                    <Box component="span" sx={{ position: "relative",
                          background: 'linear-gradient(135deg, rgba(211, 0, 229, 1), rgba(118, 0, 196, 1), rgba(76, 255, 231, 1))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: 'all 0.3s ease', zIndex: 2 }}>
                        {`     Get a Free Strategy Session`}
                    </Box>
                </Box>
            </a>
        </Link>
    );
}
