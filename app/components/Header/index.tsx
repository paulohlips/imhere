import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './style'
export function Header() {
  return (
    <>
      <Text style={styles.eventTitle}>Wedding List</Text>
      <Text style={styles.eventDate}>September, 13, 2025</Text>
      <View style={styles.inputLine}>
        <TextInput
          placeholder='Guest name'
          keyboardType='ascii-capable'
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}