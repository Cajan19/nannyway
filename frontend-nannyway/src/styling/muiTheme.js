import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const myTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#a1b6b6',
            main: '#5aa0ab',
            dark: '#138795',
            contrastText: '#000',
        },
        secondary: {
            light: '#f1bf9e',
            main: '#F29765',
            dark: '#CB5940',
            contrastText: '#000',
        },
        info:{
            light: '#273B44',
            main: '#bbeef6',
            dark: '#273B44',

        },
        error: {
            light: "#CB5940",
            main: "#ff3f1f"
        }},

    overrides: {
        MuiButton: {
            text: {
                background: 'linear-gradient(45deg, #F1BF9E 30%, #CB5940 90%)',
                borderRadius: 3,
                border: 0,
                color: 'dark',
                height: 48,
                padding: '0 30px',
                fontFamily: "Open Sans",
            },
        },
    },
});

export default myTheme;