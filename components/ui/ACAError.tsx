import React from "react";
import { Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { ErrorMessage } from "@/types/ErrorMessage";

interface ACAErrorProps {
  errorMessage: ErrorMessage;
}

const ACAError: React.FC<ACAErrorProps> = ({ errorMessage }) => {
  return (
    <VStack justifyContent="center" alignItems="center" height="80vh">
      <Image
        src="/images/undefinedDataIcon.webp"
        alt="Error Icon"
        width={170}
        height={130}
      />
      <Text
        color="#783ba2"
        fontSize="2xl"
        fontWeight="500"
        height={32}
        fontSizeAdjust={27}
        textAlign="center"
        marginTop={21}
      >
        {errorMessage}
      </Text>
    </VStack>
  );
};

export default ACAError;
