import "styled-components";
type IPalette = {
  main: string;
  contrastText?: string;
};
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      primary: IPalette;
      secondary: IPalette;
      error: IPalette;
      border: IPalette;
    };
    media: {
      mobile: string;
    };
  }
}
