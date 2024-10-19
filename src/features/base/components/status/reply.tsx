import { Avatar, Box, Typography } from "@mui/material";
import { LineMdChat } from "../../icons/base";
import { LineMdHeart } from "../../icons/nav";

export function ReplyStatus() {
    return (
        <Box
            mt={'10px'}
            px={'25px'}
            pb={'15px'}
            color={'text.primary'}
            alignItems={'center'}
            borderBottom={'1px solid #3F3F3F'}>
            <Box
                display={'flex'}
                alignItems={'center'}>
                <Avatar
                    alt=''
                    sx={{ width: 40, height: 40, mr: '10px' }}
                    src={''} />

                <Box>
                    <Typography sx={{ color: 'text.primary', fontSize: '12px', fontWeight: 'bold' }}>
                        fullname
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '12px', mt: '3px' }}>
                        @username
                    </Typography>
                </Box>
            </Box>

            <Box fontSize={'12px'} mt={'10px'}>
                <Typography sx={{ color: 'text.primary', fontSize: '14px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eligendi debitis! Tenetur quas obcaecati asperiores in nulla perferendis maiores ducimus. Sit dolore architecto iure debitis iusto exercitationem unde quo autem.
                </Typography>
                {/* {postDetail?.image !== null && <Box component="img" my={'13px'} src={postDetail?.image} />} */}
                <Typography
                    fontSize={'12px'}
                    color={'text.secondary'}
                    mt={'10px'}>
                    {/* {postDetail?.createdAt ? formatCreatedAt(postDetail.createdAt) : "Date not available"} */}
                    11:32 PM • Jul 26, 2023
                </Typography>

                <Box mb={1} display="flex" alignItems="center" fontSize="20px">
                    <Box mt={2} display="flex" alignItems="center" fontSize="20px">
                        <LineMdHeart />
                        <Typography
                            color="home.link"
                            fontSize="14px"
                            ml={1}>2</Typography>
                    </Box>
                    <Box ml={2} mt={2} display="flex" alignItems="center" fontSize="20px">
                        <LineMdChat />
                        <Typography
                            color="home.link"
                            fontSize="14px"
                            ml={1}>2 Replies</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
