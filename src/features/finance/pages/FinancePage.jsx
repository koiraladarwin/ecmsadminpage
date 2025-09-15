import React from 'react'
import { useParams } from 'react-router-dom'

function FinancePage() {
  const { financeId } = useParams()
  return (
    <h2 className="text-xl font-bold text-gray-800">
      {financeId}
    </h2>
  )
}

export default FinancePage