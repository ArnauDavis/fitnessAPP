import * as Haptics from 'expo-haptics';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import EditMeal from '../../components/EditMeal';
import MealItem from '../../components/MealItem';
import { clearAllMeals, getMeals, Meal } from '../../storage/meals';
import { globalStyles } from '../../styles/global';

export default function AllMealsScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [editingMeal, setEditingMeal] = useState<Meal | null>(null);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
  };

  const handleEdit = (meal: Meal) => {
   setEditingMeal(meal);
  } 

  const handleClearAll = () => {
    Alert.alert('Delete Meals', `Are you sure you want to delete all meals?`, [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Delete',
            style: 'destructive',
            onPress: async () => {
              await clearAllMeals()
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              loadMeals()
            },
          },
        ]);
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>All Meals</Text>
        <TouchableOpacity onPress={handleClearAll}>
          <Text style={styles.clearButton}>Clear All</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }}>
        {editingMeal && (
          <EditMeal
            meal={editingMeal}
            onSaved={() => {
              setEditingMeal(null);
              loadMeals();
            }}
          />
        )}
        {meals.length === 0 ? (
          <Text style={globalStyles.empty}>No meals logged yet.</Text>
        ) : (
          meals.map((meal) => (
            <MealItem
              key={meal.id}
              meal={meal}
              onDelete={loadMeals}
              onEdit={handleEdit}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = {
  clearButton: {
    color: 'red',
    fontSize: 16,
  },
};