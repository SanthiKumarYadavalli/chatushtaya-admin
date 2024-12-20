import React from 'react'
import AllContacts from '@/components/all-contacts'

export default function page() {
  return (
    <div className='p-5'>
      <h1 className='text-[calc(30px)]'>Contacts</h1>
      <AllContacts />
    </div>
  )
}
