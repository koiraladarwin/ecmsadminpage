import React from 'react'
import { useParams } from 'react-router-dom'

function ReportPage() {
  const {reportId}=useParams()
  return (
    <h2 className="text-xl font-bold text-gray-800">
      {reportId}
    </h2>
  )
}

export default ReportPage