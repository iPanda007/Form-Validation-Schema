import React,{useState} from 'react'
import {set, useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";



const App = () => {


  const [confirm,setConfirm] = useState("");

const schema = yup.object().shape({
  firstName: yup.string().required("need name"),
  lastName:yup.string().required() ,
  email: yup.string().required() ,
  age: yup.number().positive().integer().required() ,
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().required('Confirm Password is required')
  .oneOf([yup.ref("password"),null],'Password Does not match')
})
  const {register,handleSubmit,formState:{ errors }} = useForm({
    resolver:yupResolver(schema)
  })

  const submitForm = (data)=>{
       console.log(data)
  }
  return (
    <div>
       <form onSubmit={handleSubmit(submitForm)}>
           <input type="text"  {...register("firstName",{ required: true })} name="firstName" placeholder="first Name..."/>
           <p>{errors.firstName?.message}</p>
           <input type="text" {...register("lastName",{ required: true })} name="lastName"  placeholder='last Name...' />
            <p>{errors.lastName?.message}</p>
           <input type="text" {...register("email",{ required: true })} name="email"  placeholder='Email...'/>
            <p>{errors.email?.message}</p>
            <input type="text" {...register("age",{ required: true })} name="age"  placeholder='age...'/>
            <p>{errors.age?.message}</p>
           <input type="text" {...register("password",{ required: true})} name="password"  placeholder="Password..."/>
              <p>{errors.password?.message}</p>
           <input type="text" {...register("confirmPassword",{ required: true})}  name="confirm password" placeholder='Password...' />
           <p>{errors.confirmPassword?.message}</p>
           <input type="submit" />

       </form>
    </div>
  )
}

export default App
