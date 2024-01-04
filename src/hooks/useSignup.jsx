import { useState, useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (email, password, userName) => {
        setError(null)
        setIsPending(true)

        try{
            // signup user
          const res = await projectAuth.createUserWithEmailAndPassword(email, password)

          if (!res) {
            throw new Error ('Could not complete signup')
          }

         // add user name to user 
         await res.user.updateProfile({ userName })

         //  dispatch login acton 
         dispatch({ type: 'LOGIN', payload: res.user})

         //  update state 
         if(!isCancelled) {
              setIsPending(false)
              setError(null)
            }
        } 
        
        catch (err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { error, isPending, signup }
}