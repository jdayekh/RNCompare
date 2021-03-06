import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";

const Users = (props, { navigation }) => {
  const [id, setId] = React.useState(props.value);

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    var responseText = "";
    const jsonUrl = "https://rawnet-react-native-test.glitch.me/comments.json";
    var json = "";
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        var filteredItem = responseJson.filter((item) => item.postId == id);
        console.log(filteredItem);
        setComments(filteredItem);
        setError(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
        setLoading(false);
      });
    setLoading(false);
  }, []);

  const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.commentContainer}>
            <View style={styles.sectionContent}>
              <Text style={styles.labelHeading}>Name: </Text>
              <Text style={styles.copyText}>{item.name}</Text>
            </View>
            <View style={styles.sectionContent}>
              <Text style={styles.labelHeading}>Email: </Text>
              <Text style={styles.copyText}>{item.email}</Text>
            </View>
            <View style={styles.sectionContent}>
              <Text style={styles.copyText}>{item.body}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };

  if (loading) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator />
      </View>
    );
  } else
    return (
      <View style={styles.sectionContainer}>
        {error ? (
          <Text style={{ color: "red" }}>
            An error occurred, while fetching this post's comments{" "}
          </Text>
        ) : (
          <FlatList
            style={styles.flatList}
            renderItem={renderItem}
            data={comments}
          />
        )}
      </View>
    );
};

export default Users;

const width_proportion_left = "95%";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  commentContainer: {
    flexDirection: "column",
    textAlign: "left",
    color: global.primary_color,
    backgroundColor: global.background_color,
    padding: 5,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 7,
    borderWidth: 1,
  },
  body: {
    flexDirection: "column",
    textAlign: "left",
    color: global.primary_color,
    backgroundColor: global.background_color,
    padding: 5,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 7,
    fontSize: 30,
  },
  labelHeading: {
    color: global.primary_color,
    fontWeight: "bold",
    fontSize: 17,
  },
  sectionContent: {
    flexDirection: "row",
    width: width_proportion_left,
  },
  copyText: {
    fontSize: 17,
    color: global.dark_gray,
    textAlign: "left",
  },
});
