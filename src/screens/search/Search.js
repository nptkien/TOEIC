import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, Content } from 'native-base';
export default class Search extends Component {
	render() {
		return (
			<Container>
				<Header searchBar rounded>
					<Item>
						<Icon name="ios-search" />
						<Input placeholder="Search" />
						<Icon name="ios-people" />
					</Item>
					<Button transparent>
						<Text>Search</Text>
					</Button>
				</Header>
				<Content padder>
					<Button
						full
						rounded
						primary
						style={{ marginTop: 10 }}
						onPress={() => this.props.navigation.navigate("Home")}>
						<Text>Exit</Text>
					</Button>
				</Content>
			</Container>
		);
	}
};
Search.navigationOptions = {
	header: null,
}
