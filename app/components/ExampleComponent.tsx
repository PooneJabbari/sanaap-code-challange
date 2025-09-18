import { Button, TextField, Box, Typography, Paper } from "@mui/material";

export default function ExampleComponent() {
  return (
    <Box sx={{ mx: "auto", maxWidth: "md", p: 3 }}>
      <Paper sx={{ p: 3, boxShadow: 3 }}>
        <Typography variant="h4" sx={{ color: "primary.main", mb: 2 }}>
          Material-UI + MUI sx
        </Typography>

        <TextField label="سلام" variant="outlined" fullWidth sx={{ mb: 2 }} />

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}>
            Submit
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "secondary.main",
              color: "secondary.main",
              "&:hover": {
                bgcolor: "secondary.light",
              },
            }}>
            Cancel
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
