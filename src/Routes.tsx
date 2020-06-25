import React, { useState, useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Center } from './components/Center';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import { AuthContext } from './AuthProvider';
import { AppTabs } from './components/AppTabs';
import AuthStack from './components/AuthStack';


interface RoutesProps {

}

export const Routes: React.FC<RoutesProps> = ({ }) => {
    const { user, login } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then(userString => {
                if (userString) {
                    // decode it
                    login();
                }
                    setLoading(false);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    if (loading) {
        return (
            <Center>
                <ActivityIndicator size="large" />
            </Center>
        );
    }
    return (
        <NavigationContainer>
            { user ? (
                <AppTabs />
            ) : (
                <AuthStack />
            )}
        </NavigationContainer>
    )
}