import React from 'react'
import { FormControl, FormLabel, VStack, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { useState } from 'react';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// import ContextState from '../Context/ContextState';
import { useAuth } from '../Context/AuthContext';


const Login = () => {

    
    const {
        authUser,
       setAuthUser,
       isLoggedIn,
       setIsLoggedIn,
       admin,
       setAdmin,
 
   } = useAuth()


    const[loading, setLoading]=useState(false);
    const [show, setShow] = useState(false);
    
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();

    const toast = useToast()
    const history = useHistory('/chats');
   
    const handleClick =() => setShow(!show);

    const submitHandler=async() => {
        setLoading(true);
        if(!email || !password) {
            toast({
                title: 'Please Fill all the Fields',
                
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false)
            return

        }
        try {
            const user = {
                email,
                password
            }
            
        
        const response = await axios.post("http://localhost:9000/login", user);
        if(response&&response.data.body._id){
        toast({
            title:"Logged In",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: "bottom",
        });
        
        setLoading(false);
        setIsLoggedIn(true);
        setAuthUser(response.data.body);
        setAdmin(response.data.body.IsAdmin);
        console.log(isLoggedIn);
        console.log(authUser)
        // console.log(response.data.body);
        history.push('/dashboard');

        } 
            
        
            
        } catch (error) {
            console.log(error.message)
            toast({
                title:"Invalid Credentials",
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            // console.log(data)
        }
    };





  return (
    // <ContextState.Provider value ={state}>
    // {props.children}
    <VStack spacing='5px'>
    

    <FormControl id ="email" isRequired>
        <FormLabel>
            Email
        </FormLabel>
        <Input
        placeholder='Enter your Email'
        value={email}
        onChange={(e) =>setEmail(e.target.value)}
        /> 
    </FormControl>

    <FormControl id ="password" isRequired>
        <FormLabel>
            Password
        </FormLabel>
        <InputGroup>
        <Input
        type = {show ?"text": "password"}
        placeholder='Enter your Password'
        value={password}
        onChange={(e) =>setPassword(e.target.value)}
        /> 
        <InputRightElement width="4.5rem">
            <Button height="1.75" size="sm" onClick={handleClick}>
                {show?"Hide":"Show"}
            </Button>
        </InputRightElement>
        </InputGroup>
    </FormControl>

    <Button
     colorScheme='blue'
     width="100%"
     style={{ marginTop: 15 }}
     onClick={submitHandler}
     isLoading={loading}
    >
        Log In
        </Button>
    
    <Button
    variant="solid"
    colorScheme="green"
    width="50%"
    onClick = {()=> {
        setEmail("guest@example.com")
        setPassword("123456");
    }
    }
        >
        Get Dummy Credentials</Button>

    </VStack>
    // </ContextState.Provider>
  
  )
}

export default Login