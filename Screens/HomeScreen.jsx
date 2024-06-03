import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../Components/Header";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";


const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] =useState("")
  

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
  const customButton = (onConfirm)=>{
    return(
      <Button
        onPress={onConfirm}
        style={{
          container:{width:"80%", marginHorizontal:"3%"},
          text:{fontSize:30}
        }}
        primary
        title = "Submit"
      />
    )
  }

  return (
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
            <TextInput placeholder="Enter Your Destination" />
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
              style={{ width: 280, height: 45, borderRadius:0, borderWidth:0 }}
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
              customButton= {(onConfirm)=>customButton(onConfirm)}
              onConfirm={(startDate, endDate)=> setSelectedDates(startDate,endDate)}
              allowFontScaling={false}
              placeholder={"Apr 23, 2024 to Jul 10, 2024"}
              mode={"range"}
            />
          </Pressable>
          <Pressable style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "#FFC72C",
              borderWidth: 2,
              paddingVertical: 15,
            }}>
          <Ionicons name="person-outline" size={24} color="black" />
          <TextInput placeholder="1 room . 2 adult . 3 children"/>
          </Pressable>
          <Pressable style={{
              
              paddingHorizontal: 10,
              borderColor: "#FFC72C",
              borderWidth: 2,
              paddingVertical: 15,
              backgroundColor:"#2A52BE"
            }}>
            <Text style={{textAlign:"center", fontSize:15, fontWeight:"500", color:"white" }}>Search</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
