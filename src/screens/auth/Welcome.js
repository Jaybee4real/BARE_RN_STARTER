import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';

export default function Welcome({ navigation, ...props }) {
	return (
		<View style={styles.container}>
			<Text>Hello from the welcome screen</Text>
			<CustomButton
				label="Show Login"
				buttonStyles={{ width: "80%" }}
				onPress={() => navigation.push('Login')}
			/>
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