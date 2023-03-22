import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Keyboard } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participantName.trim() === '') return

    if (participants.includes(participantName)) {
      Alert.alert("Participante existe!", "Já existe um participante na lista com este nome.")
      return
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
    Keyboard.dismiss()
  }

  function handleParticipantRemove(participant: String) {
    Alert.alert('Remover', `Você deseja remover o participante ${participant}?`, [
      {
        style: 'cancel',
        text: 'Cancelar',
        onPress: () => { }
      },
      {
        text: "Sim",
        onPress: () => {
          setParticipants(prevState => prevState.filter(p => p != participant))
        }
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>20 de março de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda. Adicione participantes a sua lista de presença.
          </Text>
        )}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
      />
    </View>
  )
}