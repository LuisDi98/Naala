import { useState } from "react";
import { Box, Input, Flex, Text, IconButton } from "@chakra-ui/react";
import { Lock, ArrowRight } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { verifyPin } from "../api/pin"; // Import the API call
import { toaster } from "@/components/ui/toaster"; // Import the toaster utility
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router";

export default function PinInputField() {
  const navigate = useNavigate();
  const [pin, setPin] = useState(""); // State for storing the entered PIN

  // useMutation for verifying PIN
  const { mutate: verify, isPending } = useMutation({
    mutationFn: verifyPin, // Ensure verifyPin is a properly defined async function
    onSuccess: (data) => {
      console.log(data);

      // Navigate to full URL when PIN is verified successfully
      window.location.href = `http://localhost:5173/${data.modelo}`;
    },
    onError: (error) => {
      console.error("Mutation error:", error);
      toaster.create({
        description: error.response?.data?.message || "PIN no válido.",
        type: "error",
      });
    },
  });

  // Function to handle PIN submission
  const handleVerify = () => {
    if (!pin) {
      toaster.create({
        description: "Por favor ingresa un PIN válido.",
        type: "error",
      });
      return;
    }
    verify({ pin }); // Trigger the mutation with the entered PIN
  };

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
            value={pin}
            onChange={(e) => setPin(e.target.value)} // Update PIN state on input
          />
          <IconButton
            aria-label="Enviar"
            variant="ghost"
            color="black"
            _hover={{ bg: "gray.200" }}
            ml={2}
            onClick={handleVerify} // Call handleVerify on click
          >
            <Button isLoading={isPending}>
              <ArrowRight size={20} />
            </Button>
          </IconButton>
        </Flex>
      </Box>
    </Flex>
  );
}
