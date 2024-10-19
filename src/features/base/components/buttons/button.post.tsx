import { Avatar, Box, Button, FormControl, IconButton, InputLabel, TextField } from "@mui/material";

export function ButtonPost() {
    return (
        <form encType="multipart/form-data">
            <Box
                mt="10px"
                px="25px"
                pb="20px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                borderBottom="1px solid #3F3F3F">
                <Box display="flex" alignItems="center">
                    <Avatar
                        alt=""
                        sx={{
                            
                            width: '40px',
                            height: '40px',
                            display: 'block',
                            borderRadius: '50%',
                        }}
                        src={'https://i.pinimg.com/736x/32/a6/bf/32a6bfc10a19f6083d47b0cfc251a669.jpg'}/>
                    <TextField
                        variant="standard"
                        type="text"
                        placeholder="What is happening?!"
                        sx={{
                            marginLeft: '13px',
                            width: '300px',
                            height: '25px',
                            fontSize: '14px',
                            color: 'inherit',
                            fontWeight: 'bold',
                        }}
                        InputProps={{
                            disableUnderline: true,
                        }}/>
                </Box>

                <Box display="flex">
                    <FormControl>
                        <InputLabel htmlFor="image-upload" sx={{ cursor: 'pointer' }}>
                            <IconButton component="span">
                            </IconButton>
                        </InputLabel>
                        <input
                            type="file"
                            hidden
                            id="image-upload"
                        />
                    </FormControl>

                    <Button
                        type="submit"
                        sx={{
                            height: '30px',
                            fontSize: '14px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            padding: '5px 25px',
                            borderRadius: '15px',
                            color: 'home.button.text',
                            backgroundColor: 'home.button.background',
                            '&:hover': {
                                backgroundColor: 'home.button.hoverBackground',
                                color: 'home.button.hoverText',
                            },
                        }}> Post
                        {/* {isSubmitting ? <CircularProgress size="sm" /> : 'Post'} */}
                    </Button>
                </Box>
            </Box>
        </form>
    );
}
