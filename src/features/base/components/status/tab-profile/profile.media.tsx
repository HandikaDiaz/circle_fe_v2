import { Avatar, Container, Grid } from "@mui/material";

export function ProfileMedia() {
    return (
        <Container sx={{ mt: 4, pb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item key={'post.id'}>
                    <Avatar
                        sx={{ width: 155, height: 155, cursor: 'pointer' }}
                        src={''}
                        alt="Post Image"
                        variant="square"
                    />
                </Grid>
            </Grid>

        </Container>
    );
}
