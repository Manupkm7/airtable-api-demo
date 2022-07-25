import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from "@mui/material/styles";
  import { createContext, useContext } from "react";
  import CssBaseline from "@mui/material/CssBaseline";
  
  import colors from "./Colors";
  
  export const light = responsiveFontSizes(
    createTheme({
      custom: {
        font: {
          1: "Do Hyeon, sans-serif !important",
          2: "Do Hyeon, sans-serif !important",
        },
      },
  
      components: {
        MuiFormControl: {
          styleOverrides: {
            root: {
              "& .MuiInputLabel-filled": {
                transform: "translate(0, 0)",
                position: "relative",
                color: "inherit",
                marginBottom: "8px",
  
                "&.MuiInputLabel-shrink": {
                  transform: "translate(0, 0)",
                  position: "relative",
                  color: "inherit",
                },
              },
  
              "& .MuiFilledInput-root": {
                borderRadius: "8px",
  
                "&::before": {
                  display: "none",
                },
  
                "&::after": {
                  display: "none",
                },
  
                "&.MuiInputBase-multiline": {
                  padding: "0",
                },
  
                "& .MuiFilledInput-input": {
                  padding: "14.5px 16px",
                },
  
                "&.Mui-disabled": {
                  backgroundColor: "#f2f4f8",
  
                  "& .MuiFilledInput-input": {
                    color: "#C4C4C4",
                  },
                },
              },
            },
          },
        },
  
        MuiFormHelperText: {
          styleOverrides: {
            root: {
              marginLeft: "0 !important",
            },
          },
        },
  
        MuiFilledInput: {
          styleOverrides: {
            root: {
              backgroundColor: "#F2F4F8",
            },
          },
        },
  
        MuiButton: {
          defaultProps: {
            size: "large",
            disableElevation: true,
          },
  
          styleOverrides: {
            root: {
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: 500,
              borderWidth: "2px",
              whiteSpace: "nowrap",
            },
  
            contained: {
              borderRadius: "25px",
            },
  
            outlined: {
              borderRadius: "25px",
              borderWidth: "2px !important",
            },
  
            sizeSmall: {
              padding: "0 24px",
              minHeight: "36px",
              fontSize: "14px",
              lineHeight: "18px",
            },
  
            sizeMedium: {
              padding: "0 32px",
              minHeight: "42px",
            },
  
            sizeLarge: {
              padding: "0 48px",
              minHeight: "48px",
            },
          },
        },
  
        MuiGrid: {
          styleOverrides: {
            "spacing-xs-1": {
              width: "100%",
              margin: "auto",
            },
          },
        },
      },
  
      typography: {
        fontFamily: "Do Hyeon, sans-serif !important",
        fontWeightRegular: 400,
        caption: {
          color: "#747474",
        },
        subtitle2: {
          color: "#677CAD",
        },
        button: {
          fontFamily: "Do Hyeon, sans-serif !important",
          fontWeight: "bold",
          textTransform: "none",
        },
      },
  
      props: {
        MuiTooltip: {
          arrow: true,
          style: {
            pointerEvents: "all",
          },
        },
  
        MuiButton: {
          disableFocusRipple: true,
        },
  
        MuiDivider: {
          style: {
            marginTop: 16,
            marginBottom: 16,
          },
        },
      },
  
      shape: {
        borderRadius: 8,
      },
  
      palette: {
        type: "light",
  
        primary: {
          main: colors.BUTTONS_COLOR,
          dark: colors.CARNATION_ERROR,
          light: colors.CARNATION_RED140,
          contrastText: colors.WHITE,
        },
  
        secondary: {
          main: "#034AFF",
          dark: colors.RESOLUTION_BLUE80,
          light: colors.RESOLUTION_BLUE20,
          contrastText: colors.WHITE,
        },
  
        light: {
          main: colors.WHITE,
          dark: colors.POLAR_BLUE80,
          light: colors.POLAR_BLUE20,
          contrastText: colors.WHITE,
        },
  
        info: {
          main: colors.CHAMBRAY,
          dark: colors.CHAMBRAY80,
          light: colors.CHAMBRAY20,
          contrastText: colors.WHITE,
        },
  
        grey: {
          main: colors.PORCELAIN,
          dark: colors.PORCELAIN140,
          light: colors.PORCELAIN60,
          contrastText: colors.WHITE,
        },
  
        success: {
          main: colors.GOBLIN_SUCCESS,
          dark: colors.GOBLIN_SUCCESS80,
          light: colors.GOBLIN_SUCCESS20,
          contrastText: colors.WHITE,
        },
  
        text: {
          primary: colors.RESOLUTION_BLUE,
          secondary: colors.CARNATION_RED,
          disabled: colors.RESOLUTION_BLUE40,
          hint: colors.RESOLUTION_BLUE40,
        },
  
        background: {
          paper: colors.WHITE,
          default: colors.POLAR_BLUE20,
        },
  
        common: {
          black: colors.BLUE,
          white: colors.WHITE,
        },
      },
  
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
    }),
  );
  
  export const ThemeSelectorContext = createContext({
    theme: "",
  });
  
  export const useThemeSelector = () => useContext(ThemeSelectorContext);
  
  /* eslint-disable-next-line react/display-name */
  export const withTheme = (Component) => (props) => {
    const t = "light";
    const theme = t === "light" ? light : light;
  
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  };