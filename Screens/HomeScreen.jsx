import React, { useLayoutEffect, useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Alert
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, Feather, EvilIcons } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import Modal from "react-native-modal";
import Header from "../Components/Header";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState("");
  const route = useRoute();
  const [rooms, setRooms] = useState(1);
  const [adult, setAdult] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerTitleAlign: "center",
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, [navigation]);

  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 30 },
        }}
        primary
        title="Submit"
      />
    );
  };

  const searchPlaces = (place)=>{
    if(!route.params || !selectedDates ){
      Alert.alert(
        'Invalid Details',
        'Please enter all the detail',
        [
          {
            text: 'Cancel',
            // onPress: () => Alert.alert('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {
          cancelable: false,
          onDismiss: () =>
            Alert.alert(
              'This alert was dismissed by tapping outside of the alert dialog.',
            ),
        },
      );
    }
    if(route.params && selectedDates){
      navigation.navigate("Places",{
        rooms:rooms,
        adults:adult,
        children:children,
        selectedDates:selectedDates,
        place:place
      })
    }
  };
  
  

  const increment = (type) => {
    if (type === "rooms") setRooms((prev) => prev + 1);
    if (type === "adult") setAdult((prev) => prev + 1);
    if (type === "children") setChildren((prev) => prev + 1);
  };

  const decrement = (type) => {
    if (type === "rooms" && rooms > 1) setRooms((prev) => prev - 1);
    if (type === "adult" && adult > 1) setAdult((prev) => prev - 1);
    if (type === "children" && children > 0) setChildren((prev) => prev - 1);
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <Header />
        <ScrollView>
          <View
            style={{
              margin: 20,
              borderColor: "#FFC72C",
              borderWidth: 3,
              borderRadius: 6,
            }}
          >
            <Pressable
            onPress={()=>navigation.navigate("Search")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Feather name="search" size={24} color="black" />
              <TextInput
                placeholderTextColor="black"
                placeholder={route?.params? route.params.input :"Enter Your Destination"}
              />
            </Pressable>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <EvilIcons name="calendar" size={24} color="black" />
              <DatePicker
                style={{
                  width: 280,
                  height: 45,
                  borderRadius: 0,
                  borderWidth: 0,
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectedBgColor="#0047AB"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(`${startDate} to ${endDate}`)
                }
                allowFontScaling={false}
                placeholder={"Apr 23, 2024 to Jul 10, 2024"}
                mode={"range"}
              />
            </Pressable>
            <Pressable
              onPress={() => setModalVisible(true)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Ionicons name="person-outline" size={24} color="black" />
              <TextInput
                placeholderTextColor="black"
                placeholder={`${rooms} room . ${adult} adult . ${children} children`}
              />
            </Pressable>
            <Pressable
            onPress={()=>searchPlaces(route?.params.input)}
              style={{
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
                backgroundColor: "#2A52BE",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>
          <Text
            style={{ marginHorizontal: 20, fontSize: 17, fontWeight: "500" }}
          >
            Travell more spend less
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: "#003580",
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                Genius
              </Text>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
                {" "}
                Your are at genius level 1 in our loyality program
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                // backgroundColor: "#003580",
                borderRadius: 10,
                borderColor:"#E0E0E0",
                borderWidth:2,
                padding: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                15% discount
              </Text>
              <Text style={{  fontSize: 15, fontWeight: "500" }}>
                {" "}
                Complete 5 stays to unlock level 2
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                // backgroundColor: "#003580",
                borderRadius: 10,
                borderColor:"#E0E0E0",
                borderWidth:2,
                padding: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  // color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                10 % Discount
              </Text>
              <Text style={{  fontSize: 15, fontWeight: "500" }}>
                {" "}
                Enjoy discounts at participating at properties worldwide
              </Text>
            </Pressable>
            
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: "#003580",
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                Genius
              </Text>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
                {" "}
                Your are at genius level 1 in our loyality program
              </Text>
            </Pressable>
          </ScrollView>
          <Pressable
            style={{
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 200, height: 50, resizeMode: "cover" }}
              source={{
                uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
              }}
            />
          </Pressable>
        </ScrollView>
      </View>
      <Modal
        isVisible={modalVisible}
        swipeDirection={["up", "down"]}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Rooms and Guests</Text>
          <View style={styles.modalRow}>
            <Text style={styles.modalLabel}>Rooms</Text>
            <View style={styles.modalControl}>
              <Pressable
                style={styles.modalButton}
                onPress={() => decrement("rooms")}
              >
                <Text style={styles.modalButtonText}>-</Text>
              </Pressable>
              <Text style={styles.modalValue}>{rooms}</Text>
              <Pressable
                style={styles.modalButton}
                onPress={() => increment("rooms")}
              >
                <Text style={styles.modalButtonText}>+</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.modalRow}>
            <Text style={styles.modalLabel}>Adults</Text>
            <View style={styles.modalControl}>
              <Pressable
                style={styles.modalButton}
                onPress={() => decrement("adult")}
              >
                <Text style={styles.modalButtonText}>-</Text>
              </Pressable>
              <Text style={styles.modalValue}>{adult}</Text>
              <Pressable
                style={styles.modalButton}
                onPress={() => increment("adult")}
              >
                <Text style={styles.modalValue}>+</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.modalRow}>
            <Text style={styles.modalLabel}>Children</Text>
            <View style={styles.modalControl}>
              <Pressable
                style={styles.modalButton}
                onPress={() => decrement("children")}
              >
                <Text style={styles.modalButtonText}>-</Text>
              </Pressable>
              <Text style={styles.modalValue}>{children}</Text>
              <Pressable
                style={styles.modalButton}
                onPress={() => increment("children")}
              >
                <Text style={styles.modalButtonText}>+</Text>
              </Pressable>
            </View>
          </View>
          <Pressable
            style={styles.applyButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.applyButtonText}>Apply</Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  modalControl: {
    flexDirection: "row",
    alignItems: "center",
  },
  modalButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  modalButtonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 6,
  },
  modalValue: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  applyButton: {
    backgroundColor: "#003580",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  applyButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
