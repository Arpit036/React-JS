import React , {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from  "react-redux"
import authService from "react-hook-form"

function Login(){
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()
  const [error, setError] = useState("")

  const login = async(data) => {
    setError("")
    try{
       const session = await authService.login(data)
       if(session){
        const userData = await authService.getCurrentUser()
        if(userdata) dispatch(authLogin(userdata))
       }
    }catch(error){
      setError(error.message)
    }
  }
  return (
    <div
    className='flex items-center justify-center w-full'>
      <div className={'mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-20 border border-black/10'}></div>
      <div
      className='mb-2 flex justify-center'>
        <span className='inline-block w-full max-w-[100px'>
          <Logo width="100px" />
        </span>
      </div>

      <h2 className='text-center text-2xl font-bold leading-tight' sign in to your account></h2>
    </div>
  )
}

export default Login
