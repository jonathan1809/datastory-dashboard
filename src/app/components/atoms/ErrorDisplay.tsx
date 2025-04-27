import { Box, Text } from "@chakra-ui/react";

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay = ({ message }: ErrorDisplayProps) => {
  return (
    <Box
      p={4}
      bg="red.100"
      color="red.700"
      borderRadius="md"
      borderLeft="4px"
      borderLeftColor="red.500"
    >
      <Text>{message}</Text>
    </Box>
  );
};

export default ErrorDisplay;
