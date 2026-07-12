import * as Haptics from 'expo-haptics';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { deleteMeal, Meal } from '../storage/meals';
import { colors } from '../styles/global';

type MealItemProps = {
  meal: Meal;
  onDelete: () => void;
  onEdit: (meal: Meal) => void;
};

export default function MealItem({
  meal,
  onDelete,
  onEdit,
}: MealItemProps) {
  const { id, name, calories, protein, carbs, fat } = meal
  const handleLongPress = () => {
    Alert.alert('Delete Meal', `Are you sure you want to delete "${name}"?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await deleteMeal(id);
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          onDelete();
        },
      },
    ]);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => onEdit(meal)} onLongPress={handleLongPress}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.macros}>
        {calories} cal • {protein}g P • {carbs}g C • {fat}g F
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
  },

  name: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
  },

  macros: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 8,
  },
});