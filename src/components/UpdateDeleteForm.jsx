import React, { useEffect, useId, useState } from 'react'
import { View } from 'react-native'
import axios from "axios";

const UpdateDeleteForm = ({selectedTab,notifyDelete,notifyUpdate,notifyError,selectedId,setSelectedId,setShowPopup}) => {

  const id=useId();

  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [role,setRole]=useState("");
  const [image, setImage] = useState(null);

  const changeName=(value)=>{  setName(value);  }

  const changePassword=(value)=>{  setPassword(value);  }

  const changeEmail=(value)=>{  setEmail(value);  }

  const changePhone=(value)=>{  setPhone(value);  }

  const changeImage=(value)=>{  setImage(value);  }

  const resetStates=()=>{

    setName("");
    setPassword("");
    setEmail("");
    setPhone("");

    setSelectedId("");
  }


  const onChangeRole = (selectedOption) => {
 
    setRole(selectedOption.value);  
  
  };

  


  const editData=()=>{


  }


  const updateData=()=>{

   


    axios.put(url,data).then(()=>{

      notifyUpdate();
      resetStates();
      setShowPopup(false);

    }).catch((err)=>{

      console.log(err);
      notifyError();
    })

  }

  const deleteData=()=>{

   

  }

  useEffect(()=>{

    editData();
  },[])




  return (
    <View>
    {(operationType=="user") && (

      <Form action="" className='flex flex-col gap-3'>

        <TextInput required type="text" id={id+'name'} value={name} onChangeText={(e)=>changeName(e.target.value)} placeholder='Enter Name' className='px-3 py-1 rounded-full border border-black outline-none'/>          
           
        <TextInput required secureTextEntry  id={id+'password'} value={password} onChangeText={(e)=>changePassword(e.target.value)} placeholder='Enter Password' className='px-3 py-1 rounded-full border border-black outline-none' />

        <TextInput required type="email-address" id={id+'email'} value={email} onChangeText={(e)=>changeEmail(e.target.value)} placeholder='Enter Email' className='px-3 py-1 rounded-full border border-black outline-none'/>

        <TextInput required type="number-pad" id={id+'tel'} value={phone} onChangeText={(e)=>changePhone(e.target.value)} pattern='[0]{1}[5]{1}[0-9]{9}' placeholder='Enter Phone Number' className='px-3 py-1 rounded-full border border-black outline-none'/>          

        <Picker selectedValue={""} onValueChange={""}>
          <Picker.Item label="" value="" />
          <Picker.Item label="" value="" />
          <Picker.Item label="" value="" />
        </Picker>
        <Button onClick={(e)=>{e.preventDefault(); addData()}} title='Add' className='w-full p-2 rounded-full text-white bg-[#009D69] border border-white hover:border-[#009D69]'/>       

      </Form>

      )}

      {operationType=="product" && (

      <Form action=""  className='flex flex-col gap-3'>

          <TextInput required type="text" id={id+'animalName'} value={animalName} onChange={(e)=>changeAnimalName(e.target.value)} placeholder="Enter Animal's Name" className='px-3 py-1 rounded-full border border-black outline-none'/>          
          
          <TextInput required type="text" id={id+'age'} value={age} onChange={(e)=>changeAge(e.target.value)} placeholder="Enter Animal's Age" className='px-3 py-1 rounded-full border border-black outline-none'/>          

          <TextInput required type="text" id={id+'agemonth'} value={ageMonth} onChange={(e)=>changeAgeMonth(e.target.value)} placeholder="Enter Animal's Month" className='px-3 py-1 rounded-full border border-black outline-none'/>   
       
          <TextInput required type="text" id={id+'about'} value={about} onChange={(e)=>setAbout(e.target.value)} placeholder="Write Animal About" className='px-3 py-1 rounded-full border border-black outline-none'/> 
        
          <View style={{ marginVertical: 10 }}>
            {image && <Text>Selected Image: {image}</Text>}
            <Button title="Add Photo" onPress={pickImage} />

          </View>

          <Button onClick={(e)=>{e.preventDefault(); addData()}} title='Add' className='w-full p-2 rounded-full text-white bg-[#009D69] border border-white hover:border-[#009D69]' />       

      </Form>
      )}
  

</View>
  )
}

export default UpdateDeleteForm
