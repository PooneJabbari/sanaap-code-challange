import { Button, TextField, Box, Typography, Paper } from '@mui/material';

export default function ExampleComponent() {
  return (
    <Box className="p-6 max-w-md mx-auto">
      <Paper className="p-6 shadow-lg">
        <Typography variant="h4" className="mb-4 text-primary">
          Material-UI + Tailwind
        </Typography>
        
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          className="mb-4"
        />
        
        <div className="flex gap-2">
          <Button 
            variant="contained" 
            className="bg-primary hover:bg-primary/90"
          >
            Submit
          </Button>
          
          <Button 
            variant="outlined" 
            className="border-secondary text-secondary hover:bg-secondary/10"
          >
            Cancel
          </Button>
        </div>
      </Paper>
    </Box>
  );
}
