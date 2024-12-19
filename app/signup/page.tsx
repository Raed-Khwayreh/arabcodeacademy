
import SignupFormOne from '@/components/ui/SignupForms/SignupFormOne/SignupFormOne';
import React from 'react'
import styles from './page.module.css'
const Signup:React.FC=()=>{

  return (
    <div className={styles.signupPage}>
      <SignupFormOne/>
   

    </div>
  )
 
}

export default Signup;