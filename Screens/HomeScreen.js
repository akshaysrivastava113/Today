
import React,{useState} from 'react'
import { StyleSheet, Text, View, AsyncStorage, TextInput, Button} from 'react-native'

const HomeScreen = () => {
    const[task,setTask] = useState(["This is title","0230","INPRO"]);
    const value="";
    const saveTitle = async() => {
        try{
            await AsyncStorage.setItem("Title",task[0]);
        }catch(err){
            console.log(err)
        }
    }
    const saveTime= async() => {
        try{
            await AsyncStorage.setItem("Time",task[1]);
        }catch(err){
            console.log(err)
        }
    }
    const saveProgress = async() => {
        try{
            await AsyncStorage.setItem("Progress",task[2]);
        }catch(err){
            console.log(err)
        }
    }

    const load = async () => {
        try {
          const title = await AsyncStorage.getItem('Title');
          const time = await AsyncStorage.getItem('Time');
          const progress = await AsyncStorage.getItem('Progress');
          if (title !== null || time !== null || progress !== null) {
            console.log(title);
            console.log(time);
            console.log(progress);
          }
        } catch (error) {
        }
      };

    return (
        <View>
            <Text>Home Screen</Text>
            <Text>{task}</Text>
            <Text></Text>
            <TextInput onChangeText={(text) => setTask([text,task[1],task[2]])}></TextInput>
            <TextInput onChangeText={(text) => setTask([task[0],text,task[2]])}></TextInput>
            <TextInput onChangeText={(text) => setTask([task[0],task[1],text])}></TextInput>

            <Button title="Save" onPress={() => { saveTitle(); saveTime(); saveProgress()}}></Button>
            <Button title="Load " onPress={() => load()}></Button>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
