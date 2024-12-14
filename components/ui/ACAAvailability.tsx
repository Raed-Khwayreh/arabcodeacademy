import React from "react";
import { Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

interface ACAAvailabilityProps {
  message?: string;
}

const ACAAvailability: React.FC<ACAAvailabilityProps> = ({
  message = "لا يوجد بيانات لعرضها",
}) => {
  return (
    <VStack justifyContent="center" alignItems="center" height="30vh">
      <Image
        src="/images/undefinedDataIcon.png"
        alt="Error Icon"
        width={170}
        height={130}
      />
      <Text color="#783ba2" fontSize="xl" fontWeight="bold" textAlign="center">
        {message}
      </Text>
    </VStack>
  );
};

export default ACAAvailability;
