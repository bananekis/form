import { Theme } from "react-select";

export const color = {
  grey: "#333333",
};

export const customTheme = (theme: Theme) => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary50: "none",
      primary: "none",
    },
  };
};
