import React from "react";
import { Spinner, Text, VStack } from "@chakra-ui/react";

interface ACALoadingProps {
  color?: string;
  height?: string | number;
}

const ACALoading = ({
  color = "var(--primary-color)",
  height = "30vh",
}: ACALoadingProps) => {
  return (
    <VStack
      justifyContent="center"
      alignItems="center"
      height={height}
      style={{
        transition: "0.2s",
      }}
    >
      <Spinner color={color} size="xl" fontWeight={"bold"} />
      <Text color={color} fontSize="2xl" fontWeight="bold">
        جاري التحميل
      </Text>
    </VStack>
  );
};

export default ACALoading;
