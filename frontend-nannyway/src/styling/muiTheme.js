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
        info: {
            light: '#195A68',
            main: '#0b4f57',
            dark: '#273B44',

        },
        error: {
            light: "#CB5940",
            main: "#ff3f1f"
        }
    },
});

export default myTheme;