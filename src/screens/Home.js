import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import CustomButton from '../components/CustomButton';
import { logout } from '../store/auth';

export default function Home({ navigation, ...props }) {
	const dispatch = useDispatch()
	return (
		<View style={styles.container}>
			<Text>Hello from the Home Screen</Text>
			<CustomButton
				label="Log Out"
				buttonStyles={{ width: "80%" }}
				onPress={() => dispatch(logout())}
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