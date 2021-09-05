import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function About() {
	return (
		<View style={styles.container}>
			<Text>Hello from the About Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});