import { Box, Button, Typography, Avatar, Stack } from "@mui/material";

export function ProfileStatus() {
    return (
        <Box mt={1} px={3} display="flex" flexDirection="column">
            <Box
                component="img"
                src={'https://i.pinimg.com/564x/2d/2e/d8/2d2ed83789dee4fb08a385961bc0bd86.jpg'}
                alt="background"
                width="100%"
                height="100px"
                sx={{ borderRadius: 1, display: 'block' }}
            />

            <Box mt={-4} display="flex" justifyContent="space-between" width="100%">
                <Avatar
                    src={''}
                    sx={{
                        width: '63px',
                        ml: 2,
                        height: '63px',
                        borderRadius: '50%',
                        border: '3px solid black',
                    }} />

                <Button
                    sx={{
                        width: '20%',
                        right: '20px',
                        top: '20px',
                        height: '28px',
                        fontSize: '10px',
                        color: 'text.primary',
                        fontWeight: '700',
                        backgroundColor: 'transparent',
                        borderRadius: '20px',
                        border: '1px solid #FFFFFF',
                    }}>Edit Profile</Button>
            </Box>

            <Box mt={2}>
                <Typography sx={{ color: 'text.primary', fontSize: '20px', fontWeight: 'bold' }}>
                    ✨ fullname ✨
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '12px', mt: '3px' }}>
                    @username
                </Typography>
                <Typography sx={{ color: 'text.primary', fontSize: '12px', mt: '3px' }}>
                    biograph ini
                </Typography>
            </Box>

            <Stack
                direction="row"
                spacing={2}
                mt={1}
                sx={{ backgroundColor: 'transparent' }}>
                <Typography sx={{ fontSize: '12px', backgroundColor: 'transparent' }}>
                    0
                    <Typography
                        component="span"
                        sx={{
                            color: 'text.secondary',
                            backgroundColor: 'transparent',
                            fontSize: '12px'
                        }}>
                        Following
                    </Typography>
                </Typography>

                <Typography sx={{ fontSize: '12px', backgroundColor: 'transparent' }}>
                    5
                    <Typography
                        component="span"
                        sx={{
                            color: 'text.secondary',
                            backgroundColor: 'transparent',
                            fontSize: '12px'
                        }}>
                        Followers
                    </Typography>
                </Typography>
            </Stack>
        </Box>
    );
}
