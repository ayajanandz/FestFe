import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import './Fest.css';
import { useHistory } from 'react-router-dom';


const Fest = () => {

  const history = useHistory();
  return (
    <><div className="container">
    <div className="sideBySideDivs">
    <div className="firstDiv">
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Pantheon 1</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="xl">
            Date: 15/12/23
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
           <Button variant="ghost" colorScheme="blue" onClick={() =>history.push('/pantheon_1')}>
              View More
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      </div>
      </div>


      <div className="sideBySideDivs">
      <div className="secondDiv">
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Image of fest 2"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Pantheon 2</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="xl">
              Date: 5/12/23
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            
            <Button variant="ghost" colorScheme="blue" onClick={() =>history.push('/pantheon_2')}>
              View More
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      </div>
      </div>
      


      <div className="sideBySideDivs">
      <div className="secondDiv">
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Image of fest 2"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Pantheon 3</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="xl">
            Date: 18/12/23
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">

            <Button variant="ghost" colorScheme="blue" onClick={() =>history.push('/pantheon_3')}>
              View More
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      </div>
      </div>
      </div>
    </>
  );
};

export default Fest;
