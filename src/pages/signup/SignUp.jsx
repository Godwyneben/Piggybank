import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

// styles 
import styles from './SignUp.module.css'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const { signup, isPending, error } = useSignup()


  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, userName)
  } 

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
        <h2>Sign Up</h2>
        <label>
          <span>email:</span>
          <input 
            type="text"
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
          />
        </label>

        <label>
          <span>password:</span>
          <input 
            type="password"
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
          />
        </label>

        <label>
          <span>username:</span>
          <input 
            type="text"
            onChange={(e) => setUserName(e.target.value)} 
            value={userName}
          />
        </label>

        {!isPending && <button className="btn">signup</button>}
        {isPending && <button className='btn' disabled>loading</button>}
        {error && <p>{error}</p>}
    </form>
  )
}
