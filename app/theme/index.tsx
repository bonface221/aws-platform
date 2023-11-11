import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        color: "brand.white",
        fontSize: "16px",
        fontweight: "500",
        fontStyle: "normal",
        lineHeight: "24px",
      },
    },
  },

  colors: {
    brand: {
      white: "#ffff",
      gray: "#B6C4CA",
      red: "#E03F3F",
    },
  },
});
