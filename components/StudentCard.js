import { View, Text, TextInput, StyleSheet } from "react-native";

export default function StudentCard({ name, course, units, isFullLoad }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.detail}>{`${course} - ${units} units`}</Text>
      {isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
      <TextInput placeholder="Add a note" style={styles.note} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#f2f2f2", borderRadius: 8, padding: 12, marginVertical: 6 },
  name: { fontSize: 16, fontWeight: "bold" },
  detail: { fontSize: 14, color: "#555" },
  fullLoad: { marginTop: 4, color: "#2e7d32", fontWeight: "600" },
  note: { marginTop: 6, borderWidth: 1, borderColor: "#ccc", borderRadius: 4, padding: 4 },
});