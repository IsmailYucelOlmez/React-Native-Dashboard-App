import React from 'react'
import { Form,Field } from 'react-final-form';
import { View,Pressable } from 'react-native'
import { CustomField,SubmitButton } from '../../components/forms/FormElements'
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const EmployeeForm = ({operation,id,setShowEmployeeForm}) => {

  const initialValues = { ename: "",ephone: "",hireDate: "",job: "",estatu: "",mail: "",elocation: ""};
  const required = value => !value && 'Lütfen boş bırakmayınız';

  const onSubmitPut = (data) => {

    axios.put(`https://localhost:7296/api/Emplyoees/${id}`,data).then(()=>{    

      }).catch((err)=>{
  
        console.log(err);
      })
  
    }
  

  const onSubmitPost = (data)=>{
    
    axios.post(`https://localhost:7296/api/Emplyoees`,data).then(()=>{

    }).catch((err)=>{

      console.log(err);
    })
  }

  return (
    <View className={`${operation=="PUT" ? 'absolute':'' }  bg-white flex justify-center items-center w-full h-full z-50`}>

      {operation=="PUT" && (
        <Pressable onPress={()=>setShowEmployeeForm(false)} className="absolute right-2 top-2">
          <Ionicons name="close-circle-outline" size={24} color="black" />
        </Pressable>
      )}

      <Form
        initialValues={initialValues}
        onSubmit={values => operation=="PUT" ? onSubmitPut(values):onSubmitPost(values)}
        render={({ handleSubmit }) => {
          return (
            <>
              <CustomField name="ename" validate={required} placeholder="Enter Name"  secureTextEntry={false}/>

              <CustomField name="ephone" validate={required} placeholder="Enter Phone"  secureTextEntry={false} />

              <CustomField name="hireDate" validate={required} placeholder="Enter Hire Date" secureTextEntry={false} />

              <CustomField name="job" validate={required} placeholder="Enter Title"  secureTextEntry={false} />

              <CustomField name="estatu" validate={required} placeholder="Enter Statu(active,disabled)"  secureTextEntry={false} />

              <CustomField name="mail" validate={required} placeholder="Enter Mail" secureTextEntry={false} />
              
              <CustomField name="elocation" validate={required} placeholder="Enter Location" secureTextEntry={false} />
    
              <SubmitButton {...{ handleSubmit }} ButtonText={`${operation=="PUT" ? 'Update':'Create'}`} />
            </>
          );
        }}
      />
    </View>
  )
}

export default EmployeeForm
