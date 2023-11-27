import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PersonalInfoScreen = () => {
  const personalInfo = {
    name: 'Nguyen Van A',
    age: 25,
    address: '123 Street, City',
    email: 'nguyenvana@example.com',
    phoneNumber: '123-456-7890',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Information</Text>

      <View style={styles.infoItem}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{personalInfo.name}</Text>
      </View>

      <View style={styles.infoItem}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>{personalInfo.age}</Text>
      </View>

      <View style={styles.infoItem}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>{personalInfo.address}</Text>
      </View>

      <View style={styles.infoItem}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{personalInfo.email}</Text>
      </View>

      <View style={styles.infoItem}>
        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.value}>{personalInfo.phoneNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  value: {
    fontSize: 18,
  },
});

export default PersonalInfoScreen;
