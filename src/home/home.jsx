import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { getAllNote } from '../api/noteAPI';
import { userContext } from '../context/userContext';
const HomeScreen = ({ navigation }) => {
  const [noteData, setNoteData] = useState();
  const {user, setUser} = useContext(userContext);
  useEffect(() => {
    const fecthData = async () => {
      const res = await getAllNote(user.uid)
      console.log("getdata",res.data.data);
      setNoteData(res.data.data);
    }
    fecthData();
  }, [])

  useEffect(() => {
    console.log("data", noteData);
  }, [noteData])
  const handleItemPress = (item) => {
    navigation.navigate('NoteDataScreen', {
      nid:item.nid,
      title: item.title,
      color: item.color,
    });
    // navigation.navigate('NoteDataScreen')
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Notes</Text>
      </View>
      <FlatList
        data={noteData}
        keyExtractor={(item) => item.nid.toString()}

        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
            <View style={[styles.noteItem, { backgroundColor: item.color }]}>
              <View>
                <Text style={styles.noteTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.noteDate}>{item.date}</Text>
              </View>
              {/* <Image
                source={require('../../assets/favicon.png')}
                style={styles.noteIcon}
              /> */}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#007ACC',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
  },
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  noteItemEven: {
    backgroundColor: '#f0f0f0', // Màu nền cho các ô chẵn
  },
  noteItemOdd: {
    backgroundColor: 'white', // Màu nền cho các ô lẻ
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noteDate: {
    color: '#777',
  },
  noteIcon: {
    width: 24,
    height: 24,
  },
});

export default HomeScreen;
