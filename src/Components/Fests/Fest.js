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
import fest1 from '../../Assets/fest1.jpg';
import fest2 from '../../Assets/Fest2.jpg';
import fest3 from '../../Assets/fest3.jpg';
import boll from '../../Assets/festbollywood.avif';
import sports from '../../Assets/sportsimg.avif';
import Festpdf from '../../Assets/Fest pdfs.pdf';



const Fest = () => {

  const history = useHistory();

  
  return (
    <><div className="container">
    <div className="sideBySideDivs">
    <div className="firstDiv">
      <Card maxW="sm">
        <CardBody>
          <Image
            src={fest1}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Pantheon 1</Heading>
            <Text>
              This Fest is planned for the involvement of all the students
              so that each and everyone can find something or the other for themselves.
              Be a part of it and enjoy the days of college, making all of these as a part of your memories.
            </Text>
            <Text color="blue.600" fontSize="xl">
            Date: 15/10/24
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
           <Button variant="ghost" colorScheme="blue" onClick={() =>history.push('/pantheon_1')}>
              View More
            </Button>
            {/* <Button variant='ghost' colorScheme="blue" onClick={handleButtonClick}>
              View Brochure
            </Button> */}
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
            src={boll}
            alt="Image of fest 2"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Pantheon 2</Heading>
            <Text>
            This fest is perfect for Bollywood lovers, dance enthusiasts, music fanatics, and for anyone who enjoys a
             vibrant cultural experience with a sprinkle of cinematic magic. It is an upcoming celebration, so get ready!
            </Text>
            <Text color="blue.600" fontSize="xl">
              Date: 5/12/24
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            
            <Button variant="ghost" colorScheme="blue" onClick={() =>history.push('/pantheon_2')}>
              View More
            </Button>
            
            {/* <Button variant='ghost' colorScheme="blue" onClick={handleButtonClick}>
              View Brochure
            </Button> */}
          </ButtonGroup>
          
        </CardFooter>
        {/* <a href ={Festpdf} download className='btn' align='bottom'>Download Brochure</a> */}
      </Card>
      </div>
      </div>
      


      <div className="sideBySideDivs">
      <div className="secondDiv">
      <Card maxW="sm">
        <CardBody>
          <Image
            src={sports}
            alt="Image of fest 2"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Pantheon 3</Heading>
            <Text>
            This fest is perfect for sports enthusiasts, fitness fanatics, competitive spirits, and for anyone who
             loves an active environment with a sprinkle of teamwork and excitement. It is an upcoming event, so gear up!
            </Text>
            <Text color="blue.600" fontSize="xl">
            Date: 10/01/25
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">

            <Button variant="ghost" colorScheme="blue" onClick={() =>history.push('/pantheon_3')}>
              View More 
            </Button>
             {/* <Button variant='ghost' colorScheme="blue" onClick={handleButtonClick}>
              View Brochure
            </Button> */}
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
