import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ButtonLink } from "../components/buttons/button.link";
import { ProfileStatus } from "../components/status/profile";
import { ProfileTab } from "../components/status/tab-profile/profile";
import { LineMdArrowSmallLeft } from "../icons/base";

export function ProfilePage() {
    const navigate = useNavigate();

    return (
        <>
            <ButtonLink
                to={''}
                onClick={() => navigate(-1)}
                sx={{ textDecoration: 'none', backgroundColor: 'transparent' }}>
                <Typography
                    sx={{
                        mt: 2,
                        px: 3,
                        display: 'flex',
                        transition: '0.3s',
                        alignItems: 'center',
                        fontSize: '20px',
                        color: 'text.primary'
                    }}>
                    <LineMdArrowSmallLeft />
                    ✨ fullnames ✨
                </Typography>
            </ButtonLink>

            <ProfileStatus />
            <ProfileTab />
        </>
    );
}
