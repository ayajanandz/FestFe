import React from 'react'
import { FormControl, FormLabel, VStack, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { useState } from 'react';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const [show, setShow] = useState(false);
    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[confirmpassword, setconfirmPassword] = useState();
    const[pic, setPic] = useState();
    const[loading, setLoading] = useState(false)
    const history = useHistory()

    const toast = useToast()


    const handleClick =() => setShow(!show);

    const postDetails =(pics) => {
        setLoading(true)
        if(pics===undefined){
            toast({
                title: 'Please Select an Image !',
                // description: "We've created your account for you.",
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            })
            return; 

        }

        if(pics.type ==="image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "ChatJs");
            data.append("clod_name","dk7jmtakw")
            fetch("https://api.cloudinary.com/v1_1/dk7jmtakw/image/upload", {
                method: "post",
                body: data,

            }).then((res) => res.json())
            .then(data => {
                setPic(data.url.toString())
                console.log(data.url.toString());
                setLoading(false);
            }).catch((err) =>{
                console.log(err)
                setLoading(false)
            })

        } else {
            toast({
                title: 'Please Select an Image !',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            
            setLoading(false);
            return;

        }
    };

    const submitHandler=async() => {
        setLoading(true)
        if (!name || !email ||!password ||!confirmpassword){
            toast({
                title: 'Please Fill all the Fields',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        } if (password !==confirmpassword){
            toast({
                title: 'Password and Confirm Password dont match',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
        }

        try {
            const user = {
                name,
                email,
                password,
                pic
            }
        //     const config = {
        //         headers: {
        //         "Content-type":"application/json",
        //     }
        // }
        const response = await axios.post("http://localhost:9000/register", user);
        // const { data } = await axios.post("http://localhost:9000/register",{name, email,password,pic}, config)
        toast({
            title:"Registration Succesfull, Login Now !",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: "bottom",
        });
        setLoading(false);
        console.log(response)
        history.push('/');
            
        } catch (error) {
            console.log(error.message)
        }
    };
    

  return (
    <VStack spacing='5px'>
    <FormControl id ="first-name" isRequired>
        <FormLabel>
            Name
        </FormLabel>
        <Input
        placeholder='Enter your Name'
        onChange={(e) =>setName(e.target.value)}
        /> 
    </FormControl>

    <FormControl id ="email" isRequired>
        <FormLabel>
            Email
        </FormLabel>
        <Input
        placeholder='Enter your Email'
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
        onChange={(e) =>setPassword(e.target.value)}
        /> 
        <InputRightElement width="4.5rem">
            <Button height="1.75" size="sm" onClick={handleClick}>
                {show?"Hide":"Show"}
            </Button>
        </InputRightElement>
        </InputGroup>
    </FormControl>

    <FormControl id ="confirmPassword" isRequired>
        <FormLabel>
            Confirm Passwod
        </FormLabel>
        <InputGroup>
        <Input
        type = {show?"text" : "password"}
        placeholder='Re-enter Password'
        onChange={(e) =>setconfirmPassword(e.target.value)}
        /> 
        <InputRightElement width="4.5rem">
            <Button height="1.75" size="sm" onClick={handleClick}>
                {show?"Hide":"Show"}
            </Button>
        </InputRightElement>
        </InputGroup>
        
    </FormControl>

    <FormControl id="pic">
        <FormLabel>Upload your pic</FormLabel>
        <Input
        type="file"
        p={1.5}
        accept="image/*"
        onChange={(e)=> postDetails(e.target.files[0])}
        />
    </FormControl>

    <Button
     colorScheme='blue'
     width="100%"
     style={{ marginTop: 15 }}
     onClick={submitHandler}
     isLoading={loading}
    >
        Sign Up
        </Button>
    </VStack>
  )
 
}

export default Signup