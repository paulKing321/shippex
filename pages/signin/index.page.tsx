import { Button, Flex, Heading, chakra, Text, Box, Checkbox } from '@chakra-ui/react';
import { InputComponent, ToastMessage } from '../../components';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import PullToRefresh from 'react-simple-pull-to-refresh';
import { PiLockSimpleThin, PiUsersThin } from "react-icons/pi";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import NextLink from 'next/link';
import { ISignIn, SignInSchema } from './utils';
import { NextPage } from 'next';
// import { signIn } from '../../services';

const SignInPage: NextPage = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show)
  };
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ISignIn>({
    mode: 'onBlur',
    resolver: yupResolver(SignInSchema),
  });

  const handleSignIn: SubmitHandler<ISignIn> = async (values) => {
  //   try {
  //     const data: any = await signIn({
  //     usr: values.username,
  //     pwd: values.password
  //   });
  //   console.log({data});
  //   if (data && data.message == "Logged In") {
  //     sessionStorage.setItem("user", 'logged_in');
  //     ToastMessage('Welcome', 'success', 1000)
  //     router.push('/dashboard');
  //   }
  // } catch (error) {
    //   console.log({error})
    // }
      ToastMessage('Welcome', 'success', 1000)
      router.push('/dashboard');
  };
  const handleRefresh = async () => {
    reset();
    ToastMessage('Please enter your details to sign in', 'info', 1000)
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <Flex fontFamily='Inter'  w="full" maxW="1440px" mx="auto" as="section" alignItems="center" justifyContent="center" direction="column" py="50px" color="black" fontSize="14px">
        <Heading fontWeight="bold" fontSize={{ base: '22px', sm: '24px' }}>
          Sign in
        </Heading>
        <Flex columnGap="2px">
            <Text color="#4B5563">Don’t have an account yet?</Text>
            <NextLink passHref href="/">
            <chakra.a fontWeight="semibold" color="#2563EB">
              Sign up here
            </chakra.a>
          </NextLink>
        </Flex>
        <Flex px={{ base: '1.5rem', sm: 0 }} direction="column" py="10px" gap="4" alignItems="flex-start" w={{ base: '80vw', sm: '70vw', md: '50vw', lg: '36vw' }}>
            <Box w="100%">
                <Text>Username</Text>
                <InputComponent {...register('username')} errorMessage={errors.username && errors.username.message} leftSymbol={PiUsersThin} placeholder="Email" w="full" />
            </Box>
            <Box w="100%">
                <Flex justifyContent="space-between" width="full">
                    <Text>Password</Text>
                    <NextLink passHref href="">
                        <chakra.a fontWeight="semibold" color="#2563EB">
                        Forgot Password
                        </chakra.a>
                    </NextLink>
                </Flex>
                <InputComponent
                    {...register('password')}
                    errorMessage={errors.password && errors.password.message}
                    type={show ? 'text' : 'password'}
                    placeholder="Password"
                    w="full"
                    leftSymbol={PiLockSimpleThin}
                    rightSymbol={AiOutlineEye}
                    symRightFunction={handleClick}
                />
            </Box>

            <Checkbox
            isChecked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            >
            Remember me
            </Checkbox>

            <Button
            isLoading={isSubmitting}
            type="submit"
            onClick={handleSubmit(handleSignIn)}
            bgColor="#2563EB" color="white"
            w="full"
            >
            Sign in
            </Button>
        </Flex>
      </Flex>
    </PullToRefresh>
  );
};

export default SignInPage;