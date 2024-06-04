import React, {useEffect} from 'react'
import { Form,Field } from 'react-final-form';
import { View,Pressable } from 'react-native'
import { CustomField,SubmitButton } from '../../components/forms/FormElements'
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useGetEmployeesByIdQuery } from '../../redux/slices/apiSlice';

const EmployeeForm = ({operation,id,setAbsoluteFormType}) => {

  const initialValues = { ename: "",ephone: "",hireDate: "",job: "",estatu: "",mail: "",elocation: ""};
  const required = value => !value && 'Lütfen boş bırakmayınız';

  const employeeData=useGetEmployeesByIdQuery(id)
  initialValues.ename=employeeData?.data?.ename
  initialValues.ephone=employeeData?.data?.ephone
  initialValues.hireDate=employeeData?.data?.hireDate
  initialValues.job=employeeData?.data?.job
  initialValues.estatu=employeeData?.data?.estatu
  initialValues.elocation=employeeData?.data?.elocation

  const resetInitialValues=()=>{

    initialValues.ename=""
    initialValues.ephone=""
    initialValues.hireDate=""
    initialValues.job=""
    initialValues.estatu=""
    initialValues.elocation=""
  }

  useEffect(()=>{

    resetInitialValues();
  },[])

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
    <View className={`${operation=="PUT" ? 'absolute':'' }  bg-white flex justify-center items-center w-full h-1/2 z-50`}>

      {operation=="PUT" && (
        <Pressable onPress={()=>setAbsoluteFormType("")} className="absolute right-2 top-2">
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
