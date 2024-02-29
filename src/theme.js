import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontFamily: `'Satoshi', sans-serif`,
        backgroundColor: "#212121",
        color: "#fff",
      },
    }),
  },
  components: {
    Input: {
      border: "1px solid",
      borderColor: "#D9D8DA",
      borderRadius: "10px",
    },
    Select: {
      border: "1px solid",
      borderColor: "#D9D8DA",
      borderRadius: "10px",
    },
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
        error: {
          bg: "#EE1717",
          color: "#fff",
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
  },
});
