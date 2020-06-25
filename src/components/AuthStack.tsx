import React, { useContext } from 'react'
import { AuthNavProps, AuthParamList } from './authentication/AuthParamList';
import { AuthContext } from '../AuthProvider';
import { Center } from './Center';
import { Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

interface AuthStackProps {
    
}


function Login({ navigation, route }: AuthNavProps<'Login'>) {
    const { login } = useContext(AuthContext);
    return (
        <Center>
            <Text>Route name: {route.name}</Text>
            <Button
                title="Log me in"
                onPress={() => { 
                    login();
                }}
            />
            <Button
                title="Go to register"
                onPress={() => navigation.navigate('Register', { name: 'Anders' })
                }
            />
        </Center>
    )
}

function Register({ navigation, route }: AuthNavProps<'Register'>) {
    return (
        <Center>
            <Text>Route name: {route.name}</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')
                }
            />
        </Center>
    )
}

const Stack = createStackNavigator<AuthParamList>();
export const AuthStack: React.FC<AuthStackProps> = ({}) => {
    return (
        <Stack.Navigator
                    screenOptions={{
                        header: () => null
                    }}
                    initialRouteName="Login"
                >
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ title: 'Sign in' }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{ title: 'Register' }}
                    />
                </Stack.Navigator>
    );
}

export default AuthStack
