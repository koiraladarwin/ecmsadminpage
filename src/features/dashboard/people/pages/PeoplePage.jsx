import React from 'react'
import { useParams } from 'react-router-dom'

function PeoplePage() {
  const { peopleId } = useParams()

  return (
    <h2 className="text-xl font-bold text-gray-800">
      {peopleId}
    </h2>
  )
}

export default PeoplePage