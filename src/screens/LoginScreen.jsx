import React from 'react'
import { ImageBackground } from 'react-native'
import { View,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginBackground from '../../assets/loading_bg.jpeg'
import { Form } from 'react-final-form'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { CustomField,SubmitButton } from '../components/forms/FormElements'
import {changeName,changeId,changeRole} from '../redux/slices/userSlice'

const LoginScreen = () => {

  const initialValues = { name: '', password: ''};
  const required = value => !value && 'Lütfen boş bırakmayınız';

  const {name}=useSelector((state)=>state.user)
  const dispatch=useDispatch();

  const onSubmit = (data) => {
    
    axios.get(`https://localhost:7296/api/Users?UserName=${data.name}&Password=${data.password}`).then((res)=>{
      
      dispatch(changeName(res.data[0].userName))
      dispatch(changeId(res.data[0].id))
      dispatch(changeRole(res.data[0].roleId))     
      
    })
    
  }
  
  return (
    <SafeAreaView className=" h-full w-full">
      <ImageBackground source={LoginBackground} resizeMode='cover' className="w-full h-full flex justify-center items-center">
      
      <View className="flex flex-col justify-center items-center gap-5">
      <Text className="text-2xl font-bold text-white text-center">LOGIN</Text>
      <Form
        initialValues={initialValues}
        onSubmit={values => onSubmit(values)}
        render={({ handleSubmit }) => {
          return (
            <>
              <CustomField name="name" validate={required} placeholder="Enter User Name" label="User Name" secureTextEntry={false}/>

              <CustomField name="password" validate={required} placeholder="Şifre Giriniz" label="Şifre" secureTextEntry={true} />
        
              <SubmitButton {...{ handleSubmit }} ButtonText={"Giriş"} />
            </>
          );
        }}
      />
      </View>
      
      
      </ImageBackground>
    </SafeAreaView>
  )
}

export default LoginScreen
