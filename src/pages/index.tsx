import { Flex, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { Input } from '../components/Form/Input'

import { SubmitHandler, useForm } from 'react-hook-form'


type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm();


  const handleSignIn: SubmitHandler<SignInFormData> = (values,  event) => {
    console.log(values);
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex 
        as="form" 
        w="100%" 
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4" >

          <Input type="email" name="email" label="E-mail" {... register('email')}  />
          
          <Input type="password" name="password" label="Password"  {...register('password')} />
        
        </Stack>
        

        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>


      </Flex>
    </Flex>
  )
}
