import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import CopyButton from '../../components/CopyButton';
import EditMeal from '../../components/EditMeal';
import HomeHeader from '../../components/HomeHeader';
import MacroGrid from '../../components/MacroGrid';
import RecentMeals from '../../components/RecentMeals';
import ReminderToggle from '../../components/ReminderToggle';
import ShareButton from '../../components/ShareButton';
import { getMeals, Meal } from '../../storage/meals';
import { globalStyles } from '../../styles/global';

export default function HomeScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [editingMeal, setEditingMeal] = useState<Meal | null>(null)

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
    console.log('Loaded meals:', data);
  };

  const handleEdit = (meal: Meal) => {
    setEditingMeal(meal);
  }

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>Chow Check</Text>
        <ShareButton meals={meals} />
      </View>
      <HomeHeader />
      <MacroGrid meals={meals} />
      <CopyButton meals={meals} />
      <ReminderToggle />
      {editingMeal && (
        <EditMeal
          meal={editingMeal}
          onSaved={() => {
            setEditingMeal(null);
            loadMeals();
          }}
        />
      )}
      <RecentMeals meals={meals} onDelete={loadMeals} onEdit={handleEdit} />
    </ScrollView>
  );
}