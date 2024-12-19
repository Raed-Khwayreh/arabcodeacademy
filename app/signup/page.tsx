import FormField from '@/components/ui/FormField/FormField';
import EnvelopeIcon from '@/components/ui/FormField/Icons/EnvelopeIcon';
import React from 'react'

const Signup:React.FC=()=>{

  return (
    <div>
     <FormField label='عنوان البريد الإلكتروني' placeholder='لن نشارك بريدك الإلكتروني أبدًا مع أي شخص' icon={<EnvelopeIcon/>}/>
   

    </div>
  )
 
}

export default Signup;