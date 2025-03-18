import { useNavigation } from "@react-navigation/native";
import { FlatList, PanResponder, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { PRODUCTS_LIST } from "../data/products";
import Separator from "../components/Separator";
import ProductItem from "../components/ProductItem";
import { useRef } from "react";

const Home = () => {
    const navigation = useNavigation();

    const scrollRef = useRef(null);

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gestureState) => {
                if (Platform.OS === "web" && scrollRef.current) {
                    scrollRef.current.scrollLeft -= gestureState.dx;
                }
            }
        })
    ).current;

    // Function to scroll right (Next)
    const scrollNext = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ x: scrollRef.current.scrollLeft + 300, animated: true }); // Adjust scroll amount
        }
    };

    // Function to scroll left (Prev)
    const scrollPrev = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ x: scrollRef.current.scrollLeft - 300, animated: true });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.navButton} onPress={scrollPrev}>
                <Text style={styles.navText}>{"<"}</Text>
            </TouchableOpacity>
            <ScrollView
                ref={scrollRef}
                horizontal={Platform.OS === 'web' ? true : false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                {...(Platform.OS === "web" ? panResponder.panHandlers : {})}  // Enables Drag Scroll on Web
            >
                <FlatList
                    data={PRODUCTS_LIST}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={Separator}
                    horizontal={Platform.OS === 'web' ? true : false}
                    contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}
                    renderItem={({ item }) => (
                        <ProductItem product={item} />
                    )}
                />
            </ScrollView>
            <TouchableOpacity style={styles.navButton} onPress={scrollNext}>
                <Text style={styles.navText}>{">"}</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Basic')}>
                Go to Basics
            </TouchableOpacity> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 12,
        backgroundColor: '#FFFFFF',
    },
    navButton: {
        backgroundColor: "#000",
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 5,
    },
    navText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default Home;