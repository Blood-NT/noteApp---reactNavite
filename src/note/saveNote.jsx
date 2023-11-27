import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

const SaveNoteScreen = ({ navigation }) => {
  const noteData = [
    {
      id: 1,
      title: 'title 1 sncds dcsjc sj csjdch sjdch sjdch sjdch sjdch sjdch sjdh csjdch sjdch sjdch sjdh csjdh csjdch sjdh csjdch sdjh ',
      content: 'content 1',
      date: '2021-09-23',
      color: 'blue',
    },
    {
      id: 2,
      title: 'title 2',
      content: 'content 2',
      date: '2021-09-23',
      color: 'green',
    },
    {
      id: 3,
      title: 'title 3',
      content: 'content 3',
      date: '2021-09-23',
      color: 'red',
    },
  ];

  const handleItemPress = (item) => {
    navigation.navigate('NoteDataScreen', {
      title: item.title,
      content: item.content,
      color: item.color,
    });
    // navigation.navigate('NoteDataScreen')
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>note đã lưu</Text>
      </View>
      <FlatList
        data={noteData}
        keyExtractor={(item) => item.id.toString()}

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

export default SaveNoteScreen;
