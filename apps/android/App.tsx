import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { appConfig } from "@hermetika/config";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>Hermetika mobile workspace</Text>
        <Text style={styles.title}>{appConfig.name}</Text>
        <Text style={styles.tagline}>{appConfig.tagline}</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Customer wallet foundation</Text>
          {appConfig.mobileSections.map((section) => (
            <Text key={section} style={styles.listItem}>
              - {section}
            </Text>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Phase 1 constraints</Text>
          {appConfig.businessRules.map((rule) => (
            <Text key={rule} style={styles.listItem}>
              - {rule}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f4eee3"
  },
  content: {
    padding: 24,
    gap: 18
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#8b5c2a"
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: "#201710"
  },
  tagline: {
    fontSize: 16,
    lineHeight: 24,
    color: "#4a3b2d"
  },
  card: {
    backgroundColor: "#ffffffcc",
    borderRadius: 20,
    padding: 18,
    gap: 8
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#201710"
  },
  listItem: {
    fontSize: 15,
    lineHeight: 22,
    color: "#4a3b2d"
  }
});
