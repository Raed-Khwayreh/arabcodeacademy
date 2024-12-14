import React from "react";
import { Text, VStack } from "@chakra-ui/react";

const ACAError: React.FC = ({}) => {
  return (
    <VStack justifyContent="center" alignItems="center" height="30vh">
      <Text color="#783ba2" fontSize="2xl" fontWeight="bold" textAlign="center">
        حدث خطأ في الإتصال
      </Text>
    </VStack>
  );
};

export default ACAError;
