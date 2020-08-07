import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const myTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#a1b6b6',
            main: '#5aa0ab',
            dark: '#138795',
            contrastText: '#042126',
        },
        secondary: {
            light: '#f1bf9e',
            main: '#F29765',
            dark: '#CB5940',
            contrastText: '#000',
        },
        info: {
            dark: 'rgb(25,90,104)',
            light: '#dfe2e7',
            main: 'rgba(242,151,101,0.8)',

        },
        error: {
            light: "#CB5940",
            main: "#ff3f1f"
        },
        success: {
            light: 'rgba(242,151,101,0.7)',
            main: 'rgba(90,160,171,0.7)',
            dark: 'rgba(25,90,104,0.7)',
        },
        warning: {
            main: 'rgba(25,90,104,0.1)',
            dark: 'rgba(90,160,171,0.95)',
        }
    },
});

export default myTheme;