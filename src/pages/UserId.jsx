import React from 'react'
import { useParams } from 'react-router'

const UserId = () => {
    const {id} = useParams();
  return (
    <div>
      <p>User Id Is : {id}</p>
    </div>
  )
}

export default UserId
