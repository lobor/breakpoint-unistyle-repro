"use client";

import { useServerInsertedHTML } from "next/navigation";
// @ts-ignore
import { AppRegistry } from "react-native";
import "../theme";
import { PropsWithChildren } from "react";
// eslint-disable-next-line @next/next/no-document-import-in-page
import { Main } from "next/document";

export const Registry = ({ children }: PropsWithChildren) => {
  useServerInsertedHTML(() => {
    AppRegistry.registerComponent("Main", () => Main);

    const { getStyleElement } = (AppRegistry as any).getApplication("Main");
    return <>{getStyleElement()}</>;
  });
  return children;
};
