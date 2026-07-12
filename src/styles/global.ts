import { StyleSheet } from 'react-native';

export const colors = {
  background: '#111111',
  header: '#181818',
  surface: '#222222',
  surfaceLight: '#303030',
  primary: '#22C55E',
  primaryDark: '#16A34A',
  text: '#F8FAFC',
  textSecondary: '#A3A3A3',
  alert: '#EF4444',
  border: '#333333',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.text,
    letterSpacing: -0.5,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginTop: 28,
    marginBottom: 14,
  },

  empty: {
    color: colors.textSecondary,
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },

  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '700',
  },

  input: {
    backgroundColor: colors.surfaceLight,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: colors.text,
    fontSize: 16,
  },
});