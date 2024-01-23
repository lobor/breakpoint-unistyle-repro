"use client";
import { createStyleSheet, mq, useStyles } from "react-native-unistyles";

export default function Home() {
  const { styles } = useStyles(styleSheet);
  return <main style={styles.base}>Hello</main>;
}

const styleSheet = createStyleSheet((t) => ({
  base: {
    backgroundColor: t.colors.background,
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
    width: {
      [mq.only.width(undefined, "md")]: 300,
      [mq.only.width("md")]: "70%",
    },
  },
}));
