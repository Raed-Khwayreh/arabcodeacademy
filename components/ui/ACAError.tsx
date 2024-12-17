import React from "react";
import { Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";



const ACAError: React.FC = () => {
  const errorMessage = useBreakpointValue({
    base: "لا يوجد نتائج لعرضها", 
    md: "تعذر الاتصال مع خادم البيانات الرجاء المحاولة مرة أخرى", 
  });

  return (
    <VStack justifyContent="center" alignItems="center" height="30vh">
      <Image
        src="/images/undefinedDataIcon.png"
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
