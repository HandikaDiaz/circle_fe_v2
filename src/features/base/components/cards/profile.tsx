import { Avatar, Box, Button, Card, Stack, Typography } from "@mui/material";
import { ButtonLink } from "../buttons/button.link";

export function ProfileCard() {
    return (
        <Card
            sx={{
                mx: 'auto',
                mt: '20px',
                width: '90%',
                paddingBottom: '20px',
                borderRadius: '5px',
                backgroundColor: 'background.paper',
            }}>
            <Box sx={{ mx: 'auto', width: '90%' }}>
                <ButtonLink
                    to={'/profile'}
                    sx={{ textDecoration: 'none', backgroundColor: 'transparent' }}>
                    <Typography
                        sx={{
                            my: 1.5,
                            display: 'flex',
                            transition: '0.3s',
                            alignItems: 'center',
                            fontSize: '20px',
                            color: 'text.primary',
                            ":hover": {
                                color: 'primary.main',
                            }
                        }}>My Profile</Typography>
                </ButtonLink>


                <Box
                    component="img"
                    src={'https://i.pinimg.com/564x/2d/2e/d8/2d2ed83789dee4fb08a385961bc0bd86.jpg'}
                    sx={{
                        width: '100%',
                        height: '100px',
                        display: 'block',
                        borderRadius: '10px'
                    }} />

                <Avatar
                    src={''}
                    sx={{
                        position: 'absolute',
                        top: '135px',
                        ml: '10px',
                        width: '63px',
                        height: '63px',
                        borderRadius: '50%',
                        border: '3px solid black',
                    }} />

                <Button
                    sx={{
                        width: '9%',
                        top: '159px',
                        right: '55px',
                        height: '28px',
                        position: 'absolute',
                        fontSize: '10px',
                        color: 'text.primary',
                        fontWeight: '700',
                        backgroundColor: 'transparent',
                        borderRadius: '20px',
                        border: '1px solid #FFFFFF',
                    }}>Edit Profile</Button>

                <Box
                    sx={{
                        marginTop: '43px',
                        marginLeft: '10px',
                        color: 'text.primary',
                        backgroundColor: 'transparent',
                    }}>
                    <Typography
                        sx={{
                            backgroundColor: 'transparent',
                            fontWeight: 'bold',
                            fontSize: '20px',
                        }}>✨ fullname ✨</Typography>

                    <Typography
                        sx={{
                            backgroundColor: 'transparent',
                            color: 'text.secondary',
                            fontSize: '12px',
                        }}>@username</Typography>

                    <Typography
                        sx={{
                            backgroundColor: 'transparent',
                            fontSize: '12px',
                        }}>ini bio ges</Typography>

                    <Stack
                        direction="row"
                        spacing={2}
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
            </Box>
        </Card>
    );
}
