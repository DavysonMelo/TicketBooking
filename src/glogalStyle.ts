import { NativeModules, Platform, StyleSheet } from "react-native";
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: STATUSBAR_HEIGHT,
		backgroundColor: "#1E1F27"
	}
});

export default styles;