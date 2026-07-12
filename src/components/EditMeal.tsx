import { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { Meal, updateMeal } from '../storage/meals';
import { colors } from '../styles/global';

type EditMealProps = {
  meal: Meal;
  onSaved: () => void;
};

export default function EditMeal({
  meal,
  onSaved,
}: EditMealProps) {
  const [name, setName] = useState(meal.name);
  const [calories, setCalories] = useState(String(meal.calories));
  const [protein, setProtein] = useState(String(meal.protein));
  const [carbs, setCarbs] = useState(String(meal.carbs));
  const [fat, setFat] = useState(String(meal.fat));

  const handleSave = async () => {
    await updateMeal(meal.id, {
      name,
      calories: Number(calories),
      protein: Number(protein),
      carbs: Number(carbs),
      fat: Number(fat),
    });

    onSaved();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Meal</Text>

      <View style={styles.field}>
        <Text style={styles.label}>Meal Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Meal name"
          placeholderTextColor={colors.textSecondary}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Calories</Text>
        <TextInput
          style={styles.input}
          value={calories}
          onChangeText={setCalories}
          keyboardType="numeric"
          placeholder="Calories"
          placeholderTextColor={colors.textSecondary}
        />
      </View>

      <View style={styles.row}>
        <View style={styles.halfField}>
          <Text style={styles.label}>Protein</Text>
          <TextInput
            style={styles.input}
            value={protein}
            onChangeText={setProtein}
            keyboardType="numeric"
            placeholder="Protein"
            placeholderTextColor={colors.textSecondary}
          />
        </View>

        <View style={styles.halfField}>
          <Text style={styles.label}>Carbs</Text>
          <TextInput
            style={styles.input}
            value={carbs}
            onChangeText={setCarbs}
            keyboardType="numeric"
            placeholder="Carbs"
            placeholderTextColor={colors.textSecondary}
          />
        </View>

        <View style={styles.halfField}>
          <Text style={styles.label}>Fat</Text>
          <TextInput
            style={styles.input}
            value={fat}
            onChangeText={setFat}
            keyboardType="numeric"
            placeholder="Fat"
            placeholderTextColor={colors.textSecondary}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
  },

  title: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },

  field: {
    marginBottom: 14,
  },

  label: {
    color: colors.textSecondary,
    fontSize: 13,
    marginBottom: 6,
  },

  input: {
    backgroundColor: colors.background,
    color: colors.text,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },

  halfField: {
    flex: 1,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 18,
  },

  buttonText: {
    color: colors.background,
    fontWeight: '700',
    fontSize: 16,
  },
});