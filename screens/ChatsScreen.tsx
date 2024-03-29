import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { View } from "../components/Themed";
import ChatListItem from "../components/ChatListItem";
import { RootTabScreenProps } from "../types";
import chatRooms from "../data/ChatRooms";
import { FlatList } from "react-native-gesture-handler";

export default function ChatsScreen({
  navigation,
}: RootTabScreenProps<"Camera">) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Chats</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/ChatsScreen.tsx" /> */}
      {/* <ChatListItem chatRoom={chatRooms[0]} /> */}
      <FlatList
        style={{ width: "100%"}}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // title: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: "80%",
  // },
});
