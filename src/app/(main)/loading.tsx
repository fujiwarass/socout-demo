import { Box, CircularProgress } from "@mui/material";

export default function Loading () {
    return (
        <Box 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}
         >
            <CircularProgress 
               sx={{
                 "--CircularProgress-size": "60px",
                 "--CircularProgress-trackThickness": "10px",
                 "--CircularProgress-progressThickness": "10px"
               }}
            />
            <div>Loading...</div>
        </Box>
    );
};