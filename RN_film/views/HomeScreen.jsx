import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';
import MovieList from '../components/MovieList';
import { queryMovies } from '../api';
import Loading from '../components/Loading';

export default function HomeScreen({navigation}) {

  const [recentMovies, setRecentMovies] = useState([]);
  const [comingMovies, setComingMovies] = useState([]);
  const [recommendMovies, setRecommendMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await queryMovies(1);
      const data2 = await queryMovies(2);
      const data3 = await queryMovies(3);
      setRecentMovies(data1);
      setComingMovies(data2);
      setRecommendMovies(data3);
    }
    fetchData();
  }, []);


  return recentMovies.length > 0 && comingMovies.length > 0 && recommendMovies.length > 0 ?
    <ScrollView style={styles.container}>
      <MovieList title="近期上映" moviesData={recentMovies} navigation={navigation} />
      <MovieList title="即将上映" moviesData={comingMovies} navigation={navigation} />
      <MovieList title="推荐电影" moviesData={recommendMovies} navigation={navigation} />
    </ScrollView>
    :
    <Loading />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})