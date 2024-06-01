import React from 'react'
import { Form,Field } from 'react-final-form';
import { View,Pressable } from 'react-native'
import { CustomField,SubmitButton } from '../../components/forms/FormElements'
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const UserForm = ({operation,id,setShowUserForm}) => {

  const initialValues = { userName: '', password: '', email:'',phone:'',roleId:''};
  const required = value => !value && 'Lütfen boş bırakmayınız';

  const onSubmitPut = (data) => {
    
    if(data.roleId=="Admin") data.roleId="2"
    else data.roleId="1"

    axios.put(`https://localhost:7296/api/Users/${id}`,data).then(()=>{
        
        setShowUserForm(false);

      }).catch((err)=>{
  
        console.log(err);
        
      })
  
    }
  

  const onSubmitPost = (data)=>{

    if(data.roleId=="Admin") data.roleId="2"
    else data.roleId="1"
    
    axios.post(`https://localhost:7296/api/Users`,data).then(()=>{

    }).catch((err)=>{

      console.log(err);
    })
  }

  return (
    <View className={`${operation=="PUT" ? 'absolute':'flex' }  bg-white flex justify-center items-center w-full h-full z-50`}>

      {operation=="PUT" && (
        <Pressable onPress={()=>setShowUserForm(false)} className="absolute right-2 top-2">
          <Ionicons name="close-circle-outline" size={24} color="black" />
        </Pressable>
      )}
      <Form
        initialValues={initialValues}
        onSubmit={values => operation=="PUT" ? onSubmitPut(values):onSubmitPost(values)}
        render={({ handleSubmit }) => {
          return (
            <>
              <CustomField name="userName" validate={required} placeholder="Enter User Name" label="User Name" secureTextEntry={false}/>

              <CustomField name="password" validate={required} placeholder="Enter Password" label="Şifre" secureTextEntry={true} />

              <CustomField name="email" validate={required} placeholder="Enter Email" label="Email" secureTextEntry={false} />

              <CustomField name="phone" validate={required} placeholder="Enter Phone Number" label="Phone" secureTextEntry={false} />

              <CustomField name="roleId" validate={required} placeholder="Enter Role (User or Admin)" label="Role" secureTextEntry={false} />

              <SubmitButton {...{ handleSubmit }} ButtonText={`${operation=="PUT" ? 'Update':'Create'}`} />
            </>
          );
        }}
      />
    </View>
  )
}

export default UserForm
