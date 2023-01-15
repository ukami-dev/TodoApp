import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const TaskItem = (props) => {
  
  return (
    <View style={styles.tasktems}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.taskText}>
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  tasktems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#f5b402",
  },
  taskText: { color: "white", padding: 8 },
});
