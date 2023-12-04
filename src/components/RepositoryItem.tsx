import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { RepositoriesType } from './RepositoryList';

const styles = StyleSheet.create({
  // Flex Containers
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    // flexGrow: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    // flexGrow: 1,
    paddingLeft: 10,
    paddingRight: 20,
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    // flexGrow: 1,
    paddingLeft: 10,
    paddingRight: 20,
    justifyContent: 'space-between',
    // alig: 'center',
  },
  statsItem: {
    display: 'flex',
    alignSelf: 'center',
  },
  // Component styles
  languageTag: {
    backgroundColor: '#0366d6',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
});

const RepositoryItem = ({ item }: { item: RepositoriesType }) => {
  return (
    <View style={styles.flexContainer}>
      <Image source={{ uri: item.ownerAvatarUrl, width: 32, height: 32 }} />
      <View style={styles.textContainer}>
        <View style={styles.descriptionContainer}>
          <Text>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <Text style={styles.languageTag}>{item.language}</Text>
        </View>
        <View style={styles.statsContainer}>
          <View>
            <Text>{item.stargazersCount}</Text>
            <Text>Stars</Text>
          </View>
          <View>
            <Text>{item.forksCount}</Text>
            <Text>Forks</Text>
          </View>
          <View>
            <Text>{item.reviewCount}</Text>
            <Text>Reviews</Text>
          </View>
          <View>
            <Text>{item.ratingAverage}</Text>
            <Text>Rating</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
