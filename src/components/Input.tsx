import { IInputProps, Input as NativeBaseInput } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.700"
      h={14}
      px={4}
      borderWidth={0}
      color="white"
      fontFamily="body"
      mb={4}
      _focus={{
        bg: "gray.700",
        borderWidth: 0.5,
        borderColor: "green.500",
      }}
      {...rest}
    />
  );
}
