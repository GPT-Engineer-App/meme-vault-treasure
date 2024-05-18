import { useRef } from "react";
import { Container, Box, VStack, Text, Button, Image, Tooltip, IconButton, HStack, Avatar, FormControl, FormLabel, Input, Textarea, SimpleGrid, Progress, useColorModeValue } from "@chakra-ui/react";
import { FaArrowDown, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Index = () => {
  const whatIsMemeVaultRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Box bgImage="url('GPTENG:get_img(digital vault overflowing with digital currencies and meme symbols)')" bgSize="cover" bgPosition="center" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" color="white" position="relative">
        <VStack spacing={4}>
          <Text fontSize="4xl" fontWeight="bold">
            Welcome to the Meme Vault
          </Text>
          <Button colorScheme="teal" size="lg" onClick={() => scrollToSection(whatIsMemeVaultRef)}>
            Explore the Vault
          </Button>
        </VStack>
        <IconButton aria-label="Scroll Down" icon={<FaArrowDown />} size="lg" position="absolute" bottom="20px" onClick={() => scrollToSection(whatIsMemeVaultRef)} />
      </Box>

      {/* What is the Meme Vault? */}
      <Box ref={whatIsMemeVaultRef} py={20} px={10} bg={useColorModeValue("gray.100", "gray.900")}>
        <VStack spacing={8}>
          <Text fontSize="3xl" fontWeight="bold">
            What is the Meme Vault?
          </Text>
          <Text textAlign="center" maxW="600px">
            The Meme Vault is a crypto-based tontine, inspired by the "Hellfish Bonanza" episode from "The Simpsons." It's a digital treasure trove where the last surviving member wins it all.
          </Text>
          <Box as="iframe" width="560px" height="315px" src="https://www.youtube.com/embed/clip_id" title="Hellfish Bonanza Clip" allowFullScreen />
        </VStack>
      </Box>

      {/* Testimonials Section */}
      <Box py={20} px={10}>
        <VStack spacing={8}>
          <Text fontSize="3xl" fontWeight="bold">
            Testimonials
          </Text>
          <HStack spacing={8}>
            <Box textAlign="center">
              <Avatar size="xl" src="https://images.unsplash.com/photo-1513765205835-ce346c3c306b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBYmUlMjBTaW1wc29ufGVufDB8fHx8MTcxNjAzNjYzN3ww&ixlib=rb-4.0.3&q=80&w=1080" />
              <Text fontSize="xl" fontWeight="bold">
                Abe Simpson
              </Text>
              <Text fontStyle="italic">"This vault is more exciting than the time I fought in WWII!"</Text>
            </Box>
            <Box textAlign="center">
              <Avatar size="xl" src="https://images.unsplash.com/photo-1650064623943-eb583bb0faeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxNci4lMjBCdXJuc3xlbnwwfHx8fDE3MTYwMzY2Mzl8MA&ixlib=rb-4.0.3&q=80&w=1080" />
              <Text fontSize="xl" fontWeight="bold">
                Mr. Burns
              </Text>
              <Text fontStyle="italic">"Excellent! A vault worthy of my riches."</Text>
            </Box>
          </HStack>
        </VStack>
      </Box>

      {/* Airdrop Section */}
      <Box py={20} px={10} bg={useColorModeValue("gray.100", "gray.900")}>
        <VStack spacing={8}>
          <Text fontSize="3xl" fontWeight="bold">
            Airdrop
          </Text>
          <Text textAlign="center" maxW="600px">
            Sign up for our airdrop and get a chance to win exclusive tokens and rewards!
          </Text>
          <FormControl id="email" maxW="400px">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <Button colorScheme="teal" size="lg">
            Sign Up for the Airdrop
          </Button>
        </VStack>
      </Box>

      {/* Roadmap */}
      <Box py={20} px={10}>
        <VStack spacing={8}>
          <Text fontSize="3xl" fontWeight="bold">
            Roadmap
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box textAlign="center">
              <Text fontSize="2xl" fontWeight="bold">
                Phase 1
              </Text>
              <Text>Initial Launch</Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="2xl" fontWeight="bold">
                Phase 2
              </Text>
              <Text>Community Building</Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="2xl" fontWeight="bold">
                Phase 3
              </Text>
              <Text>Full Deployment</Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      {/* Tokenomics Section */}
      <Box py={20} px={10} bg={useColorModeValue("gray.100", "gray.900")}>
        <VStack spacing={8}>
          <Text fontSize="3xl" fontWeight="bold">
            Tokenomics
          </Text>
          <Box width="100%" maxW="600px">
            <Text fontSize="xl" fontWeight="bold">
              Token Allocation
            </Text>
            <Progress colorScheme="teal" size="lg" value={40} />
            <Text>40% - Community Rewards</Text>
            <Progress colorScheme="blue" size="lg" value={30} />
            <Text>30% - Development</Text>
            <Progress colorScheme="purple" size="lg" value={20} />
            <Text>20% - Marketing</Text>
            <Progress colorScheme="orange" size="lg" value={10} />
            <Text>10% - Reserve</Text>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
