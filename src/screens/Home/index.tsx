import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {
  function handleParticipantAdd() {

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
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

      </View>

      <Participant name="Antônio Vinícius" />
      
      <Participant name="Kayo Filipe" />

      <Participant name="Isaac Nunes" />
      
      <Participant name="José Alberto" />
      
      <Participant name="Héber Lemos" />
    </View>
  )
}