import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  eventTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#DDD',
    marginTop: 16
  },
  eventDate: {
    fontSize: 16,
    color: '#DDD'
  },
  textInput: {
    backgroundColor: "#DDD",
    height: 50,
    borderRadius: 5,
    padding: 5,
    flex: 1,
    fontSize: 18
  },
  addButton: {
    height: 50,
    width: 50,
    backgroundColor: '#10d552',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 10,
  },
  addButtonText: {
    fontSize: 26
  },
  inputLine: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 40
  }
})