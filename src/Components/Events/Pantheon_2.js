import React from "react";
import { useAuth } from "../Context/AuthContext";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Box,
  Divider,
  Center,
  Input,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DisplayQR from "./DisplayQR";
import recreate from '../../Assets/recreateposters.avif';
import QRCode from "../../Assets/qr_code_barcode.jpg";

const Pantheon_2 = () => {
  const [value, setValue] = React.useState("");
  const {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
    admin,
    setAdmin,
    OTP,
    setOTP,
  } = useAuth();
  const [status, setStatus] = useState(false);
  // const [value, setValue] = useState()
   const handleChange = (event) => setValue(event.target.value);
  const paymentDone = async() =>{
    const payee ={
        name: authUser.Name,
        email:authUser.Email,
        
        transactionId: value,
        
    };
   if(value) {
        let response = await axios.post("http://localhost:9000/amuraPayee", payee);
        
       
        alert('Status Server: '+ response.data.body);
        setValue('')
   }else{
    alert('input field empty');
   }

  
}
  // console.log(value)
  const history = useHistory();
  const email = authUser.Email;

  const handleClick = () => {
    setIsLoggedIn(false);
    setAuthUser(null);
    setAdmin(false);
    history.push("/");
  };

  const fetchOtp = async () => {
    let response = await axios.post("http://localhost:9000/otp", { email });
    // console.log(response.data.body);
    if (response.data.body.OTPgenerated) {
      setStatus(true);
      setOTP(response.data.body.OTPgenerated);
    }
  };

  useEffect(() => {
    fetchOtp();
  }, []);

  if (isLoggedIn && authUser) {
    return (
      <>
        <Tabs>
          <TabList>
            <Tab>Student</Tab>
            {status ? <Tab>View QR</Tab> : null}
            {admin ? <Tab>Admin</Tab> : null}
            <Button colorScheme="teal" variant="ghost" onClick={handleClick}>
              Logout
            </Button>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box bg="teal" w="100%" p={4} color="white" borderRadius={15}>
                Hey {authUser.Name}!
              </Box>
            </TabPanel>

            <TabPanel>
              <DisplayQR />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <div className="eventcards">
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://plus.unsplash.com/premium_photo-1678103472972-1cb2faa9fba9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="md" textAlign={'left'}>Guess The Movie</Heading>

                <Text py="2">
                  With the actions done by the opponent teams try to guess the Name of the Movie within the given time limit.
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="teal" disabled>
                  Rs. 500
                </Button>
              </CardFooter>
            </Stack>
          </Card>
          <Center height="20px" backgroundColor={"#9EB384"}>
            <Divider orientation="vertical" />
          </Center>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://images.unsplash.com/photo-1606579335925-ea67bcbd09c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="md" textAlign={'left'}>Recreate the Posters</Heading>

                <Text py="2">
                  Show your artistic skills here by using your imagination to Re-Create the famous Movie Posters.
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="teal" disabled>
                  Rs. 250
                </Button>
              </CardFooter>
            </Stack>
          </Card>
          <Center height="20px" backgroundColor={"#9EB384"}>
            <Divider orientation="vertical" />
          </Center>

          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://images.unsplash.com/photo-1529362487499-b149087a4f62?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="md" textAlign={'left'}>The Mimicry Show</Heading>

                <Text py="2">
                  Test your skills by trying to Mimic the famous actors from the Movie of your Choice !
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="teal" disabled>
                  Rs. 150
                </Button>
              </CardFooter>
            </Stack>
          </Card>

          <Center height="20px" backgroundColor={"#9EB384"}>
            <Divider orientation="vertical" />
          </Center>

          <div className="qr_img" style={{ height: '150px', width: '150px', alignSelf:'center'}}>
            <img className="qr__img" src={QRCode} alt="QR__Code" />
          </div>
          <Text mb="8px">TransactionId {value}</Text>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Enter Your Transaction Id"
            size="lg"
            width={"30%"}
            marginBottom={'25px'}
          />
          <Button colorScheme='teal' variant='outline' margin={'10px'} onClick={() => paymentDone()}>
    Submit
   </Button>

          <Center height="20px" backgroundColor={"#9EB384"} marginBottom={'10px'}>
            <Divider orientation="vertical" />
          </Center>
        </div>
      </>
    );
  } else {
    return (
      <>
      <div className="Loggedout">
      <Box bg="teal" w="95%" p={4} color="white" borderRadius={45} margin={15}>
               Oops You are Logged Out !
      </Box>
      <Button colorScheme="teal" variant="ghost" onClick={() => history.push('/')}>
                Log Me In
              </Button>
  
      </div>
    </>
      )
  }
};

export default Pantheon_2;
