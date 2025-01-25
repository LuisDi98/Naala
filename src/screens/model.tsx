import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  Checkbox,
  CheckboxGroup
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "./../components/ui/radio";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/accordion";
import { Expand, Minimize } from "lucide-react";
import { Footer } from "../features/footer";
import { useLocation } from "react-router-dom";
import { modelsData } from "../data/form";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MotionImage = motion.img;

export default function ModelViewer() {
  const [isZoomed, setIsZoomed] = useState(false);
  const { pathname } = useLocation();
  const modelName = pathname.split("/").pop();
  const model = modelsData.find((m) => m.model === modelName);

  // Estado para almacenar la imagen de fondo actual
  const [bgImage, setBgImage] = useState("/Naala_assets/base_bg.png");

  useEffect(() => {
    if (model?.image) {
      setBgImage(model.image);
    }
  }, [model]);

  // Estado para las opciones seleccionadas y el precio total
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: { name: string; price: number } }>({});
  const [totalPrice, setTotalPrice] = useState(0);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  if (!model) {
    return (
      <Flex direction="column" minH="100vh">
        <Box p={6} textAlign="center">
          <Text fontSize="2xl" color="red.500">
            Modelo "{modelName}" no encontrado.
          </Text>
        </Box>
      </Flex>
    );
  }

  // Manejar el cambio de opciones en los radio buttons
  const handleOptionChange = (selectedValue: string, question: any, questionOptions: any[]) => {
    const selectedOption = questionOptions.find(option => option.name === selectedValue);
    if (!selectedOption) return;

    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = { ...prevSelectedOptions };
      
      if (updatedOptions[question.text]) {
        setTotalPrice((prevPrice) => prevPrice - updatedOptions[question.text].price);
      }

      updatedOptions[question.text] = { name: selectedOption.name, price: selectedOption.price };
      setTotalPrice((prevPrice) => prevPrice + selectedOption.price);

      if (selectedOption.image) {
        setBgImage(selectedOption.image);
      }

      return updatedOptions;
    });
  };

  // Manejar el cambio de la categoría seleccionada en el acordeón
  const handleCategoryClick = (category: any) => {
    if (category.image) {
      setBgImage(category.image);
    }
  };

  return (
    <Flex direction="column" minH="100vh">
      <Flex flex={1} direction={{ base: "column", lg: "row" }}>
        <Box flex={1} position="relative" p={4}>
          <Box 
            position="sticky"  
            top={0}            
            zIndex={10}        
            borderRadius="lg" 
            overflow="hidden"
            style={{ cursor: "pointer" }}
            onClick={toggleZoom}
          >
            <MotionImage
              key={bgImage}  
              src={bgImage}
              alt={`${model.model} Interior`}
              style={{
                maxWidth: isZoomed ? "80%" : "100%",
                maxHeight: isZoomed ? "90vh" : "800px",
                width: "auto",
                height: "auto",
                display: "block",
                margin: "0 auto",
                borderRadius: "10px",
                objectFit: "contain",
                transition: "all 0.5s ease-in-out",
                transform: isZoomed ? "scale(1.5)" : "scale(1)",
                cursor: "zoom-in",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
            />
            
            <Button 
              position="absolute" 
              top={4} 
              right={4} 
              size="sm" 
              colorScheme="blackAlpha"
              onClick={toggleZoom}
            >
              {isZoomed ? <Minimize color="#fff" /> : <Expand color="#fff" />}
            </Button>
          </Box>
        </Box>

        <Box w={{ base: "100%", lg: "500px" }} p={4} bg="transparent">
          <Flex direction="column" gap={4}>
            <Text fontSize="2xl" fontWeight="bold">
              Bienvenido, marque las opciones que desea agregar a su modelo.
            </Text>

            <Accordion className="gap-8 p-5" defaultIndex={[0]}>
              {model.categories.map((category, categoryIndex) => (
                <AccordionItem 
                  key={categoryIndex} 
                  bg="#FFF" 
                  className="mt-4 p-4 rounded-lg"
                  onClick={() => handleCategoryClick(category)}
                >
                  <h2>
                    <AccordionButton>
                      <Box className="mb-5" flex={1} textAlign="left" fontSize="2xl" fontWeight="bold">
                        {category.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Flex direction="column" gap={2}>
                      {category.questions.map((question, questionIndex) => (
                        <Box key={questionIndex} mb={4} p={4} bg="#F9F9F9" borderRadius="lg">
                          <Text mb={4} fontWeight="bold" fontSize="lg">
                            {question.text}
                          </Text>
                          <RadioGroup
                            key={"subtle"}
                            variant={"subtle"}
                            onChange={(event: any) => handleOptionChange(event.target.value, question, question.options)}
                          >
                            <VStack gap="4" align="start">
                              {question.options.map((option, optionIndex) => (
                                <Radio 
                                  key={optionIndex}
                                  value={String(option.name)}
                                >
                                  <Text fontSize="lg">{option.name} - ${option.price}</Text>
                                </Radio>
                              ))}
                            </VStack>
                          </RadioGroup>
                        </Box>
                      ))}
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Flex>
        </Box>
      </Flex>

      <Footer totalPrice={totalPrice} selectedOptions={selectedOptions} />
    </Flex>
  );
}
