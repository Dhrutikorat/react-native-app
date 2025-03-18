import { ActivityIndicator, Modal, StyleSheet, Text, Touchable, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const Basic = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Home</Text>
           
            <ActivityIndicator size="large" color="#0000ff" />

            <Modal visible={true} animationType='slide'>
                <View style={styles.modalContainer}>
                    <Text>This is modal</Text>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Basic;
