import { useEffect } from "react";
import { useState } from "react";

const useToken = user => {

  // custom hook api;

  const [token, setToken] = useState('')
  const email = user?.user?.email;
  const currentEmail = { email: email }
  
  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`, {
      method: 'PUT',
      headers: {
        "content-type": "application/json"
        
      },
      body: JSON.stringify(currentEmail)
    })
      .then(res => res.json())
      .then(data => {
        console.log('new user data', data)
        const accessToken = data.token;
        localStorage.setItem('accessToken', accessToken)
        setToken(accessToken)
      })
  }, [user])

  return [token]
}
export default useToken;