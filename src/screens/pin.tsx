import { Box, Input, Flex, Text } from "@chakra-ui/react";
import { Lock } from "lucide-react";

export default function PinInputField() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="80vh"
      bg="white"
      p={4}
    >
      <Text fontSize="2xl" fontWeight="medium">
        Ingresá <b>tu pin</b>
      </Text>
      <Box
        mt={6}
        bg="gray.100"
        p={4}
        borderRadius="md"
        boxShadow="md"
        w="sm"
        maxW="90%"
      >
        <Flex
          align="center"
          border="2px solid"
          borderColor="black"
          borderRadius="md"
          px={4}
          py={2}
          bg="white"
        >
          <Lock size={20} />
          <Input
            type="password"
            placeholder="Pin"
            variant="unstyled"
            ml={3}
            fontSize="lg"
          />
        </Flex>
      </Box>
    </Flex>
  );
}
