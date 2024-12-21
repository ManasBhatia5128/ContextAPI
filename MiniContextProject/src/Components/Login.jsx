import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault() // Prevents default behavior of submit button, sending value to server
        setUser({userName, userPass});
    }

  return (
    <>
    <h2>Login</h2>
    <input onChange={(e)=>setUserName(e.target.value)} value={userName} type="text" name="" id="" placeholder='username'/>
    <input onChange={(e)=>setUserPass(e.target.value)} value={userPass} type="password" name="" id="" placeholder='password'/>
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login