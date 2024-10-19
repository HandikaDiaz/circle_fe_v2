import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { ButtonLink } from '../buttons/button.link';
import { LineMdHeart, LineMdHomeMd, LineMdLogOut, LineMdPerson, LineMdPersonSearch } from '../../icons/nav';

function SideLeftNav() {
  return (
    <Box sx={{ backgroundColor: 'background.default', padding: '20px' }}>
      <Typography sx={{ color: 'primary.main', fontSize: '32px', fontWeight: 'bold' }}>
        Circle
      </Typography>

      <List
        sx={{
          gap: '20px',
          width: '235px',
          display: 'flex',
          fontSize: '20px',
          color: 'text.primary',
          mt: '15px',
          listStyleType: 'none',
          flexDirection: 'column',
        }}
      >
        <ListItem
          sx={{
            gap: '10px',
            alignItems: 'center',
            color: 'text.primary',
            display: 'flex'
          }}>
          <LineMdHomeMd />
          <ButtonLink color="text.primary" to="/">Home</ButtonLink>
        </ListItem>

        <ListItem
          sx={{
            gap: '10px',
            alignItems: 'center',
            color: 'text.primary',
            display: 'flex',
          }}>
          <LineMdPersonSearch />
          <ButtonLink color="text.primary" to="/search">Search</ButtonLink>
        </ListItem>

        <ListItem
          sx={{
            gap: '10px',
            alignItems: 'center',
            color: 'text.primary',
            display: 'flex',
          }}>
          <LineMdHeart />
          <ButtonLink color="text.primary" to="/follow">Follows</ButtonLink>
        </ListItem>

        <ListItem
          sx={{
            gap: '10px',
            alignItems: 'center',
            color: 'text.primary',
            display: 'flex',
          }}>
          <LineMdPerson />
          <ButtonLink color="text.primary" to="/profile">Profile</ButtonLink>
        </ListItem>

        <ListItem
          sx={{
            gap: '10px',
            alignItems: 'center',
            color: 'text.primary',
            display: 'flex',
          }}
        >
          <Button
            fullWidth
            sx={{
              border: 'none',
              height: '35px',
              fontSize: '15px',
              cursor: 'pointer',
              fontWeight: 'bold',
              borderRadius: '20px',
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: 'action.hover',
                color: 'primary.main',
              },
            }}
          >
            Create Post
          </Button>
        </ListItem>
      </List>

      <Typography
        sx={{
          gap: '10px',
          display: 'flex',
          color: 'text.primary',
          fontSize: '20px',
          mt: '165px',
          ml: '20px',
          alignItems: 'center',
        }}>
        <LineMdLogOut />
        <ButtonLink color="text.primary" to="">Logout</ButtonLink>
      </Typography>
    </Box>
  );
}

export default SideLeftNav;
