import { Box, Card, Typography } from "@mui/material";
// import { AccFollowCard } from "./acc-follow-card";

export function SuggestionCard() {
    return (
        <Card
            sx={{
                mx: 'auto',
                mt: '20px',
                width: '90%',
                borderRadius: '5px',
                paddingBottom: '20px',
                backgroundColor: 'background.paper',
            }}
        >
            <Box sx={{ mx: 'auto', width: '90%' }}>
                <Typography
                    variant="h6"
                    sx={{ my: '15px', fontSize: '23px', color: 'text.primary' }}
                >
                    Suggested for you
                </Typography>
                {/* <AccFollowCard /> */}
            </Box>
        </Card>
    );
}
