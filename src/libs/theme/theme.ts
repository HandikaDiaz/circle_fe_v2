import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            main: '#04A51E',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#FFFFFF',
        },
        background: {
            default: '#1D1D1D',
            paper: '#262626',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#909090',
        },
        divider: '#545454',
        action: {
            hover: '#04A51E',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#04A51E',
                    color: '#FFFFFF',
                    '&:hover': {
                        backgroundColor: '#FFFFFF',
                        color: '#04A51E',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#262626',
                    color: '#FFFFFF',
                },
            },
        },
    }
});

export default theme;