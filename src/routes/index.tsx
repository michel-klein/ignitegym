import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Box, useTheme } from "native-base";
import React from "react";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const nativeBaseTheme = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = nativeBaseTheme.colors.gray[700];
  return (
    <Box flex={1} bg="gray.700">
        <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
    </Box>
  );
}
