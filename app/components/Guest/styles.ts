import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  guestContainer: {
    flexDirection: 'row',
    marginTop: 5
  },
  guestItem: {
    backgroundColor: '#323232',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    flex: 1
  },
  guestName: {
    color: "#ddd",
    fontSize: 20,
    marginLeft: 10
  },
  removeGuest: {
    backgroundColor: '#cc0000',
    borderRadius: 5,
    height: 50,
    width: 50,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeGuestText: {
    fontWeight: 'bold',
    fontSize: 30
  }
})