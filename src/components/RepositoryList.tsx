import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  seperator: {
    height: 10,
  }
});

export interface NodeType {
  id: string;
  name: string;
  ownerName: string;
  createdAt: string;
  fullName: string;
  reviewCount: number;
  ratingAverage: number;
  forksCount: number;
  stargazersCount: number;
  description: string;
  language: string;
  ownerAvatarUrl: string;

}
interface EdgesType {
  node: NodeType;
  cursor: string;
}
export interface RepositoriesType {
  edges: EdgesType[];
  totalCount?: number;
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
    endCursor: string;
  };
}


const RepositoryList = () => {
  const { repositories } = useRepositories();

  const ItemSeperator = () => <View style={styles.seperator} />;
  
  const renderItemFunc = ({ item }: { item: NodeType }) => {
    return (
      <RepositoryItem item={item} />
    );
  };

  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

  return (

    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeperator}
      renderItem={renderItemFunc}
      keyExtractor={item => item.id}
    />
  );

};

export default RepositoryList;