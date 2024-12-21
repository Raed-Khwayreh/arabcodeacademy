import React from "react";
import { Spinner, Text, VStack } from "@chakra-ui/react";

const ACALoading: React.FC = () => {
  return (
    <VStack
      justifyContent="center"
      alignItems="center"
      height="30vh"
      style={{
        transition: "0.2s",
      }}
    >
      <Spinner color="#783ba2" size="xl" fontWeight={"bold"} />
      <Text color="#783ba2" fontSize="2xl" fontWeight="bold">
        جاري التحميل
      </Text>
    </VStack>
  );
};

export default ACALoading;
