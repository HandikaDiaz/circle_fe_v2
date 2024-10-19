import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import SideLeftNav from '../../features/base/components/nav/left.nav'
import SideRightNav from '../../features/base/components/nav/right.nav'
function Base() {
    return (
        <Box display={'flex'} sx={{ overflowY: 'auto', height:'100vh' }}>
            <Box flex={1} sx={{ overflowY: 'auto', height:'100vh' }} width={'100%'}>
                <SideLeftNav />
            </Box>
            <Box flex={2} sx={{ overflowY: 'auto', borderLeft: '1px solid', borderRight: '1px solid', borderColor: 'divider' }}>
                <Outlet />
            </Box>
            <Box flex={1.5}>
                <SideRightNav />
            </Box>
        </Box>
    )
}

export default Base