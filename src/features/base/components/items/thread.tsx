import { Avatar, Box, Typography } from "@mui/material";
import { LineMdChat, LineMdHeart } from "../../icons/base";

export function ThreadItem() {
    return (
        <>
            <Box
                mt={2}
                px={3}
                pb={2}
                borderBottom="1px solid #3F3F3F"
                color="home.text">
                <Box display="flex">
                    <Avatar
                        alt=""
                        src={''}
                        sx={{ width: 40, height: 40, mr: '5px' }} />

                    <Box ml={1} width="430px">
                        <Typography variant="body2" fontWeight="bold">
                            fullname
                            <Typography
                                component="span"
                                color="home.link"
                                ml={1}>
                                @username • waktu
                            </Typography>
                        </Typography>

                        <Typography variant="body2" mt={1}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, non cumque? Ab molestias quam incidunt ad aperiam tempore, quaerat minus deleniti blanditiis tenetur reiciendis ea, dignissimos enim? Blanditiis, accusantium! Excepturi!
                        </Typography>

                        {/* {post.image && (
                                <img
                                    style={{ marginTop: '13px', cursor: 'pointer', width: '100%', borderRadius: '4px' }}
                                    src={post.image}
                                    alt=""
                                    onClick={() => {
                                        setSelectedImage(post.image as string | null);
                                        setSelectedPostId(post.id);
                                        onOpen();
                                    }}
                                />
                            )} */}

                        <Box mt={2} display="flex" alignItems="center" fontSize="20px">
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
            </Box>
        </>
    );
}
