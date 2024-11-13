import { NumberInput as ChakraNumberInput } from "@chakra-ui/react";
import { forwardRef } from "react";

export const NumberInputRoot = forwardRef<HTMLDivElement>(function NumberInput(
  props,
  ref
) {
  const { ...rest } = props;
  return (
    <ChakraNumberInput.Root ref={ref} variant="outline" {...rest}>
      <ChakraNumberInput.Control>
        <ChakraNumberInput.IncrementTrigger />
        <ChakraNumberInput.DecrementTrigger />
      </ChakraNumberInput.Control>
    </ChakraNumberInput.Root>
  );
});

export const NumberInputField = ChakraNumberInput.Input;
export const NumberInputScruber = ChakraNumberInput.Scrubber;
export const NumberInputLabel = ChakraNumberInput.Label;
