import React from "react";
import { StatusBar } from "react-native";
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right,
    Footer,
    FooterTab,
    Badge,
    Tab,
    Tabs
} from "native-base";
import TestPratice from '../home/testPratice_tab/TestPratice';
import Vocabulary from '../home/vocabulary_tab/Vocabulary';
import Grammar from '../home/grammar_tab/Grammar';
import MyData from '../home/mydata_tab/MyData';
import ShareSheet from './share/ShareSheet';

export default class HomeScreen extends React.Component {
   

    render() {


        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>TOEIC</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate('Search')}>
                            <Icon name="search" />
                        </Button>
                        <Button
                            transparent
                         onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="share" />
                        </Button>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="notifications" />
                        </Button>
                    </Right>

                </Header>
                <Tabs>
                    <Tab heading="Test Pratice" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }}>
                        <TestPratice />
                    </Tab>
                    <Tab heading="Vocabulary" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }}>
                        <Vocabulary />
                    </Tab>
                    <Tab heading="Grammar" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }}>
                        <Grammar />
                    </Tab>
                    <Tab heading="My Data" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }}>
                        <MyData />
                    </Tab>

                </Tabs>
                <Content padder>

                </Content>
                <Footer>
                    <FooterTab>
                        <Button badge vertical onPress={() => this.props.navigation.navigate('Calendar')}>
                            <Badge><Text>10</Text></Badge>
                            <Icon active name='calendar' />
                            <Text style={styles.textFooter}>Lịch học</Text>
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Challenge')}>

                            <Icon name='apps' />
                            <Text style={styles.textFooter}>Thách đấu</Text>
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Community')}>

                            <Icon name='person' />
                            <Text style={styles.textFooter}>Cộng đồng</Text>
                        </Button>
                        <Button active badge vertical onPress={() => this.props.navigation.navigate('Statistics')}>
                            <Badge><Text>10</Text></Badge>
                            <Icon name='contact' />
                            <Text style={styles.textFooter}>Thống kê</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
const styles = {
    textFooter: {
        fontSize: 10
    }
};



/**
 * <Card>
                        <CardItem>
                            <Body>
                                <Text>Chat App to talk some awesome people!</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Button
                        full
                        rounded
                        dark
                        style={{ marginTop: 10 }}
                        onPress={() => this.props.navigation.navigate("Chat")}>
                        <Text>Chat With People</Text>
                    </Button>
                    <Button
                        full
                        rounded
                        primary
                        style={{ marginTop: 10 }}
                        onPress={() => this.props.navigation.navigate("Profile")}>
                        <Text>Goto Profiles</Text>
                    </Button>
 */