import React from "react";
import { Container, Box, Text,Tabs,Tab,TabList,TabPanel, TabPanels } from "@chakra-ui/react";
import Login from '../Authentication/Login';
import Signup from '../Authentication/Signup';

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={1}
        bg={"#64CCC5"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        // color={'teal'}
      >
        <Text fontSize="4xl" fontFamily="Work sans" color={"black"}>
          RNSIT FESTS
        </Text>
      </Box>
      
        <Box bg="#DAFFFB" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs variant="soft-rounded">
            <TabList marginBottom="1em">
              <Tab width ="50%">Login</Tab>
              <Tab width ="50%">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login/>
              </TabPanel>
              <TabPanel>
                <Signup/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      
    </Container>
  );
};

export default Homepage;
