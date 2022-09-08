import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./glogalStyle";
import Routes from "./routes";

const Index = () => {
	return (
		<View style={styles.container}>
			<Routes />
			<StatusBar style="light" />
		</View>
	);
};

export default Index;