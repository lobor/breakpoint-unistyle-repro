"use client";

import { createStyleSheet, useStyles } from "react-native-unistyles";

export const Body = (props: any) => {
  const { styles } = useStyles(styleSheet);
  return <body style={styles.base} {...props} />;
};

const styleSheet = createStyleSheet((t) => ({
  base: { backgroundColor: t.colors.background, color: "white" },
}));
