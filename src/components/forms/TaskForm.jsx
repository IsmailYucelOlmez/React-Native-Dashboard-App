import React, {useState} from 'react'
import { Form,Field } from 'react-final-form';
import { View,Pressable, Text } from 'react-native'
import { CustomField,SubmitButton } from '../../components/forms/FormElements'
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const TaskForm = ({setAbsoluteFormType}) => {

  const [error,setError]=useState("");

  const initialValues = {  taskTitle: "",taskText: "",assignedUserId: "" };
  const required = value => !value && 'Lütfen boş bırakmayınız';

  const onSubmitPost = (data)=>{
    
    let userId="";

    axios.get(`https://localhost:7296/api/Users?UserName=${data.assignedUserId}`).then((res)=>{
    
      userId=res.data.id  

    }).catch((err)=>{

      console.log(err);
    })

    if(userId){
      data.assignedUserId=userId;
      
      axios.post(`https://localhost:7296/api/Tasks`,data).then(()=>{

      }).catch((err)=>{

        console.log(err);
      })
    }
    else{
      setError("User doesn't exist with this name");
    }
  }

  return (
    <View className={`absolute bg-white flex justify-center items-center w-full h-3/4 z-50`}>

      <Pressable onPress={()=>setAbsoluteFormType("")} className="absolute right-2 top-2">
          <Ionicons name="close-circle-outline" size={24} color="black" />
      </Pressable>

      <Form
        initialValues={initialValues}
        onSubmit={values => onSubmitPost(values)}
        render={({ handleSubmit }) => {
          return (
            <>
              <CustomField name="taskTitle" validate={required} placeholder="Enter Task Title"  secureTextEntry={false}/>

              <CustomField name="taskText" validate={required} placeholder="Enter Task Text"  secureTextEntry={false} />

              <CustomField name="assignedUserId" validate={required} placeholder="Enter Assigned User" secureTextEntry={false} />
 
              {error && (
                <Text>{error}</Text>
              )}
              <SubmitButton {...{ handleSubmit }} ButtonText={`Create`} />
            </>
          );
        }}
      />
    </View>
  )
}

export default TaskForm
