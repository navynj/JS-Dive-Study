import { MemberType } from '@/types/member'
import React from 'react'

const Profile = ({name, icon}: Partial<MemberType>) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="bg-gray-100 rounded-full w-12 aspect-square flex justify-center items-center text-2xl">{icon}</div>
        <p className="font-extrabold text-sm text-center">{name}</p>
    </div>
  )
}

export default Profile