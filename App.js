import { useState } from "react";
import { Button, StyleSheet, TextInput, View, FlatList, Image, Text } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import { StatusBar } from "expo-status-bar";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function App() {
  const [modalVisible, setModalVisible] = useState(true);
  const [task, setTask] = useState([]);

  //add a task
  function addTaskHandler(enteredText) {
    setTask((currentTask) => [
      ...task,
      { text: enteredText, id: Math.random().toString() },
    ]);
    setModalVisible(false);
  }
  //delete task
  function deleteTaskHanlder(id) {
    setTask((currentTask) => {
      return currentTask.filter((task) => task.id !== id);
    });
  }
  //modal visibility
  function startAddTaskHanlder() {
    setModalVisible(true);
  }
  //end add task
  function endAddTaskHandler() {
    setModalVisible(false);
  }
  return (
    <>
      <StatusBar style="light" />

      <View style={styles.appContainer}>
        <Image style = {styles.image} 
          source={require("./assets/images/logo.png")}  
        ></Image>
        <Text style ={ styles.title}> Todo </Text>
        <FontAwesome.Button name="plus" backgroundColor="#d91193" borderRadius={10} onPress={startAddTaskHanlder}>
           Ajouter une nouvelle tâche
        </FontAwesome.Button>
      

        <TaskInput
          visible={modalVisible}
          onAddTask={addTaskHandler}
          onCancel={endAddTaskHandler}
        />

        <View style={styles.tasksContainer}>
          <FontAwesomeIcon icon="fa-solid fa-star" />
          <FlatList
            style = {styles.flatlist}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            data={task}
            renderItem={(itemData) => {
              return (
                <TaskItem
                  onDeleteItem={deleteTaskHanlder}
                  id={itemData.item.id}
                  text={itemData.item.text}
                />
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>

      </View>
    </>
  );
  
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,

    paddingHorizontal: 16,
  },
  tasksContainer: {
    flex: 5,
  },
  flatlist : {
    color :  "#F2D800",
  },
  
  image: {
    width: 100,
    height: 100,
    marginTop: 8,
    marginBottom: 8,
  },
  title :{
    marginTop: -100,
    color :  "white",
    marginBottom : 10,
    marginLeft : 120,
    fontSize : 60,
  } 
});