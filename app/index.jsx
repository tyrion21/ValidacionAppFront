import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { enableScreens } from 'react-native-screens';

enableScreens();
const Index = ({ navigation }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        if (isMounted) {
            navigation.navigate('Welcome')
        }
    }, [isMounted, navigation])

    return (
        <ScreenWrapper>
            <Text>conectando...</Text>
            <Pressable title="Bienvenido" onPress={() => navigation.navigate('Welcome')}></Pressable>
        </ScreenWrapper>
    )
}


export default Index

const styles = StyleSheet.create({})