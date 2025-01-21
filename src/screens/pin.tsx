import { Box, Input, Flex, Text, IconButton } from "@chakra-ui/react";
import { Lock, ArrowRight } from "lucide-react";

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
      <Text fontSize="6xl" fontWeight="regular">
        Ingresá <b className="font-bold">tu pin</b>
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
            placeholder="Pin"
            variant="unstyled"
            ml={3}
            fontSize="lg"
            flex="1"
          />
          <IconButton
            aria-label="Enviar"
            variant="ghost"
            color="black"
            _hover={{ bg: "gray.200" }}
            ml={2}
          >
            <ArrowRight size={20} />
          </IconButton>
        </Flex>
      </Box>
    </Flex>
  );
}
