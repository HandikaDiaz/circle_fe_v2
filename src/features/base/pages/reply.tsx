import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ButtonLink } from "../components/buttons/button.link";
import { ThreadItem } from "../components/items/thread";
import { ReplyStatus } from "../components/status/reply";
import { LineMdArrowSmallLeft } from "../icons/base";

export function ReplyPage() {
    const navigate = useNavigate();

    return (
        <>
            <ButtonLink onClick={() => navigate(-1)} to={""}>
                <Box
                    component={'h2'}
                    px={3}
                    mt={2}
                    width={'50%'}
                    display={'flex'}
                    color={'text.primary'}
                    alignItems={'center'}
                    sx={{
                        transition: '0.3s',
                        '&:hover': { color: 'primary.main' }
                    }}>
                    <LineMdArrowSmallLeft style={{ marginRight: '5px', fontSize: '30px' }} />
                    <Typography variant="h6">Status</Typography>
                </Box>
            </ButtonLink>

            <ReplyStatus />
            <ThreadItem />
        </>
    );
}
