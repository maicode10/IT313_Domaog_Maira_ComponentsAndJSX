import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import StudentCard from "./StudentCard";

const students = [
  { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
  { id: "s2", name: "Bea Santos", course: "IT313", units: 15, isFullLoad: false },
  { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
  { id: "s4", name: "Dex Alonzo", course: "IT313", units: 12, isFullLoad: false },
];

export default function StudentRoster() {
  const [roster, setRoster] = useState(students);

  const reverseRoster = () => {
    setRoster((prev) => [...prev].reverse());
  };
}
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{`${roster.length} students enrolled`}</Text>
      <Button title="Reverse Order" onPress={reverseRoster} />
    </View>
  );

        {roster.map((student, index) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}

      const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 48 },
  header: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
});