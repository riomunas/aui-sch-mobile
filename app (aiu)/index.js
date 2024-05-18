import { View, Text } from 'react-native'
import React from 'react'
import LoginPage from './login'
import SandboxPage from './sandbox'
import { useAuth } from '../context/AuthContext';
import HomePage from './(tabs)/home';
import { Redirect } from 'expo-router';

export default function IndexPage() {
  const {token} = useAuth();
  console.log(token.accessToken)
  return (
    <>
    <Redirect href={"(tabs)/home)"}/>
    {/* {token.accessToken ? <HomePage /> : <LoginPage />} */}
    </>
  )
}