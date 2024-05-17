import React, { useState } from 'react'
import { View,TextInput,Text,TouchableOpacity } from 'react-native';
import { Field } from 'react-final-form';



export const CustomTextInput = ({ placeholder, input, meta, label ,secureTextEntry}) => (
    <View className="m-3" >
      
      <TextInput className="p-4 text-slate-600 rounded-2xl w-full border-b-[#787878] bg-[#f4f4f4]" {...input} placeholder={placeholder} secureTextEntry={secureTextEntry}/>
      {meta.error && meta.touched && (
        <Text className="mt-2 text-white">{meta.error}</Text>
      )}
    </View>
  );
  
export const SubmitButton = ({ handleSubmit,ButtonText }) => (
    <TouchableOpacity className="bg-[#00a884] rounded-xl px-2 py-1 w-full mt-3" onPress={handleSubmit}>
      <Text className="text-white text-center text-lg" >{ButtonText}</Text>
    </TouchableOpacity>
  );
  
export const CustomField = ({ name, placeholder, label, validate, secureTextEntry}) => {
    return (
      <Field
        {...{ name, validate }}
        render={({ input, meta }) => (
          <>
            <CustomTextInput {...{ input, meta, label, placeholder, secureTextEntry }} />
          </>
        )}
      />
    );
  };

