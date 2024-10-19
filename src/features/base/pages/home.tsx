import { Typography } from '@mui/material'
import { ButtonPost } from '../components/buttons/button.post'
import { ThreadItem } from '../components/items/thread'

function HomePage() {
    return (
        <>
            <Typography
                variant="h5"
                sx={{
                    marginTop: '20px',
                    marginBottom: '15px',
                    paddingX: '25px',
                    color: 'text.primary',
                }}>
                Home
            </Typography>
            <ButtonPost />
            <ThreadItem />
        </>
    )
}

export default HomePage