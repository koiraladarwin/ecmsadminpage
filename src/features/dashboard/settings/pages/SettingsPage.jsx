import React from 'react'
import { useParams } from 'react-router-dom'

function SettingsPage() {
  const { settingId } = useParams()
  return (
    <h2 className="text-xl font-bold text-gray-800">
      {settingId}
    </h2>
  )
}

export default SettingsPage