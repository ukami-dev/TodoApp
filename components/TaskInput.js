import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
  Text
} from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome from '@expo/vector-icons/FontAwesome';

/*
  endDate : "",
    favoris : false,
    callBack: "",
    repeat : false,
    file : "", */

export default function TaskInput(props) {
  const [enteredTaskTitle, setEnteredTaskTitle] = useState("");
  const [enteredTaskNote, setEnteredTaskNote] = useState("");
  const [enteredTaskCallBack, setEnteredTaskCallBack] = useState("01-01-2023 12:30");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  //const favoris = "
  function noteItnputHandler(enteredNote) {
    setEnteredTaskNote(enteredNote);
  }

  function callBackInputHandler(enteredDate) {
  }
  function titleInputHandler(enteredTitle) {
    setEnteredTaskTitle(enteredTitle);
  }

  function addTaskHandler() {
    var detail = enteredTaskTitle +"\n"+ enteredTaskCallBack + "\n"+ enteredTaskNote
    props.onAddTask(detail); 
    setEnteredTaskTitle("");
    setEnteredTaskNote("");
    setEnteredTaskCallBack("");
    /*
    .concat(enteredTaskCallBack,"\n",enteredTaskNote)
    */
  }

  


  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }
  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }
const handleConfirm = (date) => {
  setEnteredTaskCallBack(date);
  hideDatePicker();
}


  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/logo.png")}
        />
          <Text style = {styles.textAppName}>Todo</Text>    
          <TextInput
            style={styles.textInputTask}
            onChangeText={titleInputHandler}
            placeholder="Ajouter titre"
            value={enteredTaskTitle}
          />
          <View style = {styles.widView}>
              <View style = {styles.buttonTask}>
                <FontAwesome.Button name="star" backgroundColor="#E2C440">
                  Ajouter aux favoris
                </FontAwesome.Button>
              </View>
            <View style = {styles.buttonTask}>
              <FontAwesome.Button name="bell" backgroundColor="#8C3280" >
                  Rappel
              </FontAwesome.Button>
            </View>
            <View style = {styles.buttonTask}>
                <FontAwesome.Button name="calendar" backgroundColor="#E24040"  onPress={showDatePicker} >
                  Ajouter une date d'échéance
                </FontAwesome.Button>
            </View>

            <View style = {styles.buttonTask}>
                <FontAwesome.Button name="repeat" backgroundColor="#3E5252" >
                  Répéter
                </FontAwesome.Button>
            </View>
            
            <View style = {styles.buttonTask}>
              <FontAwesome.Button name="file" backgroundColor="#3b5998">
                  Ajouter un fichier
                </FontAwesome.Button>
           </View>
           
          </View>
         
          <TextInput
            style={styles.textInputNote}
            multiline = {true}
            onChangeText={noteItnputHandler}
            placeholder="Ajouter une note "
            value={enteredTaskNote}
          />
             

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <FontAwesome.Button name="ban" backgroundColor="#f31282" onPress={props.onCancel} >
              Annuler
            </FontAwesome.Button>
          </View> 

          <View style={styles.button}>
            <FontAwesome.Button name="check" backgroundColor="#5e0acc" onPress={addTaskHandler} >
              Ajouter
            </FontAwesome.Button>
          </View>
        </View>
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />  
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#15172F",
    width : "100%",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 8,
    marginBottom: 0
  },
  textInputNote: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    marginRight: 0,
    padding: 8,
    height : 100,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    marginLeft :0,
    
  },
  button: {
    marginHorizontal: 8,
    marginTop: 8,
    marginLeft :0,
    width : 150
  },
  textInputTask: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    marginRight:0,
    padding: 8,
    
  },
  buttonTask : {
    width : "100%",
    marginTop :10,
    marginLeft: 0,
    
  },
  widView : {
    width: "100%",
  },
  textAppName :{
    color: "red",
    marginBottom: 8,
    fontWeight : "bold",
  }
});
