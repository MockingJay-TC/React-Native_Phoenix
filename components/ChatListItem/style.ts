import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: 'space-between',
    padding: 10,
  },
  leftContainer: {
    flexDirection: "row",
  },
  midContainer: {
    justifyContent: 'space-around',
    // width: '100%'
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lastMessage: {
    fontSize: 16,
    color: "gray",
  },
  time: {
    fontSize: 14,
    color: "gray",
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 50,
  },
});

export default styles;
