import { Box, Card, Typography } from "@mui/material";
import { ButtonLink } from "../buttons/button.link";
import { LineMdFacebook, LineMdGithub, LineMdInstagram, LineMdLinkedin } from "../../icons/meta";

export function MetaCard() {
    return (
        <>
            <Card
                sx={{
                    mx: 'auto',
                    my: '20px',
                    width: '90%',
                    borderRadius: '5px',
                    paddingBottom: '20px',
                    backgroundColor: 'nav.background',
                }}
            >
                <Box sx={{ mx: 'auto', width: '90%' }}>
                    <Typography
                        component="p"
                        sx={{
                            mt: '15px',
                            backgroundColor: '#262626',
                            display: 'flex',
                            fontSize: '14px',
                            color: 'nav.text',
                        }}
                    >
                        Developed by Handika •
                        <ButtonLink to={"https://github.com/HandikaDiaz"} target="_blank">
                            <LineMdGithub />
                        </ButtonLink>
                        <ButtonLink to={"https://www.linkedin.com/in/handika-alexandria-diaz/"} target="_blank">
                            <LineMdLinkedin />
                        </ButtonLink>
                        <ButtonLink to={"https://www.facebook.com/?locale=id_ID"} target="_blank">
                            <LineMdFacebook />
                        </ButtonLink>
                        <ButtonLink to={"https://www.instagram.com/halexaz_/"} target="_blank">
                            <LineMdInstagram />
                        </ButtonLink>
                    </Typography>

                    <Typography
                        component="p"
                        sx={{
                            display: 'flex',
                            fontSize: '10px',
                            color: 'nav.link',
                        }}
                    >
                        Powered By Dumbways Indonesia • #1 Coding Bootcamp
                    </Typography>
                </Box>
            </Card>
        </>
    );
}
