import { Avatar, Box, Typography } from "@mui/material";

export function UserItem() {
    return (
        <Box sx={{ mt: 2 }}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mb: 2, pb: 1 }}>
                <Box display="flex">
                    <Avatar
                        src={''}
                        alt={''}
                        style={{ width: 40, height: 40, borderRadius: '50%' }}
                    />
                    <Box sx={{ ml: 2 }}>
                        <Typography fontWeight="bold" sx={{ fontSize: '12px' }}>
                            fullname
                        </Typography>
                        <Typography color="text.secondary" sx={{ fontSize: '12px' }}>
                            @username
                        </Typography>
                        <Typography color="text.primary" sx={{ fontSize: '12px' }}>
                            Ini bio
                        </Typography>
                    </Box>
                </Box>
                {/* <FollowButton userId={user.id} /> */}
            </Box>
        </Box>
    );
}
