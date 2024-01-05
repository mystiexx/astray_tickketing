import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  styles: {
    global: () => ({
      fontFamily: `'Satoshi', sans-serif`,
    }),
  },
  components: {
    Button: {
      baseStyle: {
        bg: "#a227ff",
        color: "#fff",
        borderRadius: "6px",
      },
      variants: {
        solid: {
          bg: "#a227ff",
          color: "#fff",
          borderRadius: "6px",
          fontSize: "14px",
          fontWeight: 600,
        },
        outline: {
          bg: "transparent",
          border: "1px solid",
          color: "#a227ff",
          borderColor: "#a227ff",
          borderRadius: "6px",
          fontSize: "14px",
          fontWeight: 600,
        },
        unstyled: {
          bg: "transparent",
          color: "#a227ff",
          fontSize: "14px",
          fontWeight: 500,
          border: "none",
        },
      },
    },
  },
});
