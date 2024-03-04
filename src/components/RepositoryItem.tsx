import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NodeType } from './RepositoryList';
import kFormatter from '../utils/kFormatter';

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
    paddingLeft: 10,
    paddingRight: 10,
    flexGrow: 1,

  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 20,
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  statsItem: {

  },
  // Component styles
  imageStyle: {
    borderRadius: 5,
    height: 40,
    width: 40,
  },
  languageTag: {
    backgroundColor: '#0366d6',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  repoName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: 'grey',
    marginBottom: 5,
  },
  statNumbers: {
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  statTitle: {
    textAlign: 'center',
    color: 'grey',
  },
});

const RepositoryItem = ({ item }: { item: NodeType }) => {
  return (
    <View style={styles.flexContainer}>
      <Image source={{ uri: item.ownerAvatarUrl }} style={styles.imageStyle} />
      <View style={styles.textContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.repoName}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.languageTag}>{item.language}</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsItem}>
            <Text style={styles.statNumbers}>{kFormatter(item.stargazersCount)}</Text>
            <Text style={styles.statTitle}>Stars</Text>
          </View>
          <View style={styles.statsItem}>
            <Text style={styles.statNumbers}>{kFormatter(item.forksCount)}</Text>
            <Text style={styles.statTitle}>Forks</Text>
          </View>
          <View style={styles.statsItem}>
            <Text style={styles.statNumbers}>{kFormatter(item.reviewCount)}</Text>
            <Text style={styles.statTitle}>Reviews</Text>
          </View>
          <View style={styles.statsItem}>
            <Text style={styles.statNumbers}>{kFormatter(item.ratingAverage)}</Text>
            <Text style={styles.statTitle}>Rating</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
