import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/global';

type MacroCardProps = {
  label: string;
  value: string;
  goal: string;
  color: string;
};

export default function MacroCard({
  label,
  value,
  goal,
  color,
}: MacroCardProps) {
  return (
    <View style={[styles.card, { borderLeftColor: color }]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.goal}>/ {goal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 16,
    width: '47%',
    borderLeftWidth: 4,
  },

  label: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '600',
  },

  value: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginTop: 4,
  },

  goal: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
});