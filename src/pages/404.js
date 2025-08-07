import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function Custom404() {
  return (
    <Grid
      overflow={"hidden"}
      alignItems="center"
      textAlign={"center"}
      padding={10}
      paddingBottom={5}
      paddingLeft={2}
      paddingRight={2}
      sx={{
        background:
          "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(220, 255, 250, 1))",
        overflow: "hidden",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column"
      }}
    >
      <Box sx={{ display: "block", mb: 2 }}>
        <Image
          src="/notfound.png"
          alt="not found image"
          title="not found image"
          width={250}
          height={100}
          style={{ height: "auto" }}
        />
      </Box>
      <Typography variant="copytext1" component="copytext1">
        The page you’re looking for doesn’t exist or has been moved.
      </Typography>
      <Box
        sx={{
          position: "absolute",
          left: "50px",
          bottom: "120px",
          background:
            "linear-gradient(260.31deg, #4CFFE7 0%, #7600C4 41.58%, #D300E5 87.79%)",
          height: 50,
          width: 50,
          borderRadius: "50%",
          opacity: 1,
          filter: "blur(20px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          right: "60px",
          top: "120px",
          background:
            "linear-gradient(260.31deg, #4CFFE7 0%, #7600C4 41.58%, #D300E5 87.79%)",
          height: 100,
          width: 100,
          borderRadius: "50%",
          opacity: 0.7,
          filter: "blur(20px)",
        }}
      />
    </Grid>
  );
}
