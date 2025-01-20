"use client"

import { Input, Box, Button, Container, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { InputGroup } from "@/components/ui/input-group"
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/accordion"
import { Search, Edit } from "lucide-react"
import { Footer } from "../features/footer"

export default function ModelViewer() {
  return (
    <Flex direction="column" minH="100vh">
      {/* Header */}
      <Box p={4} borderBottom="1px" borderColor="gray.200">
        <Container maxW="container.xl">
          <Heading size="lg">Modelo 2</Heading>
        </Container>
      </Box>

      {/* Main Content */}
      <Flex flex={1} direction={{ base: "column", lg: "row" }}>
        {/* Image Section */}
        <Box flex={1} position="relative" p={4}>
          <Box position="relative" borderRadius="lg" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1601758123927-2fba5c4c0cf7"
              alt="Modelo 2 Interior"
              width="100%"
              height="auto"
            />
            <Button
              position="absolute"
              top={4}
              right={4}
              size="sm"
              colorScheme="blackAlpha"
            >
              <Edit size={16} />
              Editar
            </Button>
          </Box>
        </Box>

        {/* Sidebar */}
        <Box w={{ base: "100%", lg: "400px" }} p={4} bg="gray.50">
          <Flex direction="column" gap={4}>
            {/* Search */}
            <InputGroup startElement={<Search size={20} color="gray.400" />}>
              <Input placeholder="Buscar un acabado" bg="white" />
            </InputGroup>

            {/* Details Section */}
            <Flex justify="space-between" px={2}>
              <Text fontSize="sm">Detalles</Text>
              <Text fontSize="sm">Acabados estándar</Text>
            </Flex>

            {/* Accordion Sections */}
            <Accordion allowMultiple>
              {[
                { title: "Acabado de muebles", items: ["Arctic Grey", "Chalk", "Aventurine Green Metallic", "Ice Grey Metallic"] },
                { title: "Extras Cocina", items: ["Isla central", "Despensa adicional"] },
                { title: "Previstas eléctricas", items: ["Tomacorrientes adicionales", "Iluminación LED"] },
                { title: "Acabados enchapes", items: ["Porcelanato premium", "Mármol"] },
                { title: "Equipamiento", items: ["Electrodomésticos", "Sistema de seguridad"] },
              ].map((section, index) => (
                <AccordionItem key={index}>
                  <h2>
                    <AccordionButton>
                      <Box flex={1} textAlign="left">
                        {section.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Flex direction="column" gap={2}>
                      {section.items.map((item) => (
                        <Button key={item} variant="outline" justifyContent="space-between" w="100%" bg="white">
                          {item}
                        </Button>
                      ))}
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Flex>
        </Box>
      </Flex>

      {/* Footer */}
      <Footer/>
    </Flex>
  )
}
