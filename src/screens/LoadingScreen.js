import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



// This is the file that will be loaded when the app is started, it would be shown while your app is probably making api calls to verify the user
export default function Login() {
	return (
		<View style={styles.container}>
			<Text style={styles.loadingText}>Your App Initialization Here</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	loadingText: {
		fontSize: 20,	
	}
});