import React from 'react'
import { Form,Field } from 'react-final-form';
import { View,Pressable } from 'react-native'
import { CustomField,SubmitButton } from '../../components/forms/FormElements'
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const ProductForm = ({operation,id,setShowProductForm}) => {

  const initialValues = { pName: "",unitPrice: "",stockAmount: "",pBrand: ""};
  const required = value => !value && 'Lütfen boş bırakmayınız';

  const onSubmitPut = (data) => {

    axios.put(`https://localhost:7296/api/Products/${id}`,data).then(()=>{
        
    }).catch((err)=>{
  
      console.log(err);
    })
  
  }
  

  const onSubmitPost = (data)=>{
    
    axios.post(`https://localhost:7296/api/Products`,data).then(()=>{

    }).catch((err)=>{

      console.log(err);
    })
  }

  return (
    <View className={`${operation=="PUT" ? 'absolute':'' }  bg-white flex justify-center items-center w-full h-full z-50`}>

      {operation=="PUT" && (
        <Pressable onPress={()=>setShowProductForm(false)} className="absolute right-2 top-2">
          <Ionicons name="close-circle-outline" size={24} color="black" />
        </Pressable>
      )}
      
      <Form
        initialValues={initialValues}
        onSubmit={values => operation=="PUT" ? onSubmitPut(values):onSubmitPost(values)}
        render={({ handleSubmit }) => {
          return (
            <>
              <CustomField name="pName" validate={required} placeholder="Enter Name"  secureTextEntry={false}/>

              <CustomField name="unitPrice" validate={required} placeholder="Enter Unit Price"  secureTextEntry={false} />

              <CustomField name="stockAmount" validate={required} placeholder="Enter Stock Amount"  secureTextEntry={false} />

              <CustomField name="pBrand" validate={required} placeholder="Enter Brand" secureTextEntry={false} />

              <SubmitButton {...{ handleSubmit }} ButtonText={`${operation=="PUT" ? 'Update':'Create'}`} />
            </>
          );
        }}
      />
    </View>
  )
}

export default ProductForm
