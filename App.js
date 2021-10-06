import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';

const DATA = [
	{
		id: 1,
		text: 'Card #1',
		uri: 'https://picsum.photos/300/200?random=1.jpg',
	},
	{
		id: 2,
		text: 'Card #2',
		uri: 'https://picsum.photos/300/200?random=1.jpg',
	},
	{
		id: 3,
		text: 'Card #3',
		uri: 'https://picsum.photos/300/200?random=1.jpg',
	},
	{
		id: 4,
		text: 'Card #4',
		uri: 'https://picsum.photos/300/200?random=1.jpg',
	},
	{
		id: 5,
		text: 'Card #5',
		uri: 'https://picsum.photos/300/200?random=1.jpg',
	},
	{
		id: 6,
		text: 'Card #6',
		uri: 'https://picsum.photos/300/200?random=1.jpg',
	},
	{
		id: 7,
		text: 'Card #7',
		uri: 'https://picsum.photos/300/200?random=1.jpg',
	},
	{
		id: 8,
		text: 'Card #8',
		uri: 'https://picsum.photos/300/200?random=1.jpg',
	},
];

export default function App() {
	const renderCard = function (item) {
		return (
			<View
				key={item.id}
				style={{ margin: 10, padding: 5, borderWidth: 1 }}
			>
				<Image
					style={{ height: 200, width: 300 }}
					source={{ uri: item.uri }}
				/>
				<Text style={{ marginBottom: 10 }}>{item.text}</Text>
				<Button
					icon={{ name: 'code' }}
					backgroundColor='#03A9F4'
					title='View Now!'
				/>
			</View>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Deck data={DATA} renderCard={renderCard} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
