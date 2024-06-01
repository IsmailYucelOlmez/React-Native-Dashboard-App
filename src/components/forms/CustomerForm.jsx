import React from 'react'
import { Form,Field } from 'react-final-form';
import { View,Pressable } from 'react-native'
import { CustomField,SubmitButton } from '../../components/forms/FormElements'
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const CustomerForm = ({operation,id,setShowCustomerForm}) => {

  const initialValues = { cName: "",cmail: "",cPhone: "",cBudget: "",cStatu: "",cLocation: ""};
  const required = value => !value && 'Lütfen boş bırakmayınız';

  const onSubmitPut = (data) => {

    axios.put(`https://localhost:7296/api/Customers/${id}`,data).then(()=>{    

      }).catch((err)=>{
  
        console.log(err);
      })
  
    }
  

  const onSubmitPost = (data)=>{
    
    axios.post(`https://localhost:7296/api/Customers`,data).then(()=>{

    }).catch((err)=>{

      console.log(err);
    })
  }

  return (
    <View className={`${operation=="PUT" ? 'absolute':'' }  bg-white flex justify-center items-center w-full h-full z-50`}>

      {operation=="PUT" && (
        <Pressable onPress={()=>setShowCustomerForm(false)} className="absolute right-2 top-2">
          <Ionicons name="close-circle-outline" size={24} color="black" />
        </Pressable>
      )}

      <Form
        initialValues={initialValues}
        onSubmit={values => operation=="PUT" ? onSubmitPut(values):onSubmitPost(values)}
        render={({ handleSubmit }) => {
          return (
            <>
              <CustomField name="cName" validate={required} placeholder="Enter Name"  secureTextEntry={false}/>

              <CustomField name="cMail" validate={required} placeholder="Enter Mail"  secureTextEntry={false} />

              <CustomField name="cPhone" validate={required} placeholder="Enter Phone Number" secureTextEntry={false} />

              <CustomField name="cBudget" validate={required} placeholder="Enter Customer Budget"  secureTextEntry={false} />

              <CustomField name="cStatu" validate={required} placeholder="Enter Statu(active,disabled)"  secureTextEntry={false} />

              <CustomField name="cLocation" validate={required} placeholder="Enter Location" secureTextEntry={false} />

              <SubmitButton {...{ handleSubmit }} ButtonText={`${operation=="PUT" ? 'Update':'Create'}`} />
            </>
          );
        }}
      />
    </View>
  )
}

export default CustomerForm
