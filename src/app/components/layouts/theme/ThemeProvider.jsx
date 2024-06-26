"use client";

import { Provider as JotaiProvider } from "jotai";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import PropTypes from "prop-types";

export const ThemeProvider = ({ children, ...props }) => {
  return (
    <NextThemesProvider {...props}>
      <JotaiProvider>
        {/*<ThemeWrapper>*/}
        {children}
        {/*</ThemeWrapper>*/}
      </JotaiProvider>
    </NextThemesProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node
};
