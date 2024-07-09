import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles"

export function Guest(props) {
  function onRemove() {

  }
  return (
    <View style={styles.guestContainer}>
      <View style={styles.guestItem}>
        <Text style={styles.guestName}>{props.guestName}</Text>
      </View>
      <TouchableOpacity style={styles.removeGuest} onPress={props.onRemove}>
        <Text style={styles.removeGuestText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}