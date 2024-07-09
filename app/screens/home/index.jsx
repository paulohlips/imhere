import { useState } from 'react'
import { View, ScrollView, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Guest } from '../../components/Guest'

export function Home() {
  const [guestList, setGuestList] = useState([])
  const [guestName, setGuestName] = useState('')

  function handleAddGuestToList() {
    setGuestList(previousState => [...previousState, guestName])
    setGuestName('')
  }

  function handleRemoveGuest(guestName) {
    Alert.alert('Remover convidado', `Remover ${guestName}?`, [
      {
        text: 'Sim',
        onPress: () => setGuestList(previousState => previousState.filter(guest => guest !== guestName))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.view}>
      <Text style={styles.eventTitle}>Wedding List</Text>
      <Text style={styles.eventDate}>September, 13, 2025</Text>
      <View style={styles.inputLine}>
        <TextInput
          placeholder='Guest name'
          keyboardType='ascii-capable'
          style={styles.textInput}
          onChangeText={setGuestName}
          value={guestName}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddGuestToList}
        >
          <Text style={styles.addButtonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={guestList}
        renderItem={({item}) => (
          <Guest
            guestName={item}
            onRemove={() => handleRemoveGuest(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}