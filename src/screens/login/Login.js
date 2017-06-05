import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Left,
    Right,
    Icon,
    Title,
    Button,
    H1,
    Form,
    Item,
    Input,
    Label
} from "native-base";

class LogIn extends Component {

    render() {
        return (
            <Container style={{backgroundColor:'#0099ff'}}>
                <View style={{justifyContent:'center',alignItems: 'center',marginBottom: 30}}>
                    <Text style={{fontSize: 50,fontWeight:'bold',fontFamily: 'Avenir',color: '#fff'}}>TOEIC</Text>
                    <View style={{padding: 10}}>
                    <Text style={styles.text}>Registered/Logged-in users can:</Text>
                    <Text style={styles.text}>1.Backup/Synchronize personal progess to online server</Text>
                    <Text style={styles.text}>2.Challenge and be challenged by friends</Text>
                    <Text style={styles.text}>3.Communicate with the community</Text>
                    </View>
                 
                </View>
                <Content >
                    <Button full iconLeft>
                        <Icon name='camera' />
                        <Text>LOGIN WITH FACEBOOK</Text>
                    </Button>
                    <View style={{justifyContent: 'center', alignItems: 'center',marginTop: 10}}>
                          <Text style={styles.text}>or</Text>
                    </View>
                  
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button full><Text> Login </Text></Button>
                    <View style={{justifyContent: 'center',alignItems: 'center', marginTop: 10}}>
                        <Text>REGISTER</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

// Configuration Header
LogIn.navigationOptions = ({ navigation }) => ({
    header: (
        <Header style={{backgroundColor: '#0099ff'}}>
            <Left>
                <Button transparent onPress={() => navigation.navigate('Home')}>
                    <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
                <Title>LogIn</Title>
            </Body>
            <Right />
        </Header>
    )
});
const styles = {
    text : {
        color: '#fff',
        fontFamily: 'Avenir',

    }
}

export default LogIn;

