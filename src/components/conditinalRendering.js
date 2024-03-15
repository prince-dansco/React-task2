import React from 'react'

const ConditinalRendering = () => {
    const mark = 50
  return (

    <div>
      <h1>{mark >= 50 ? (
        <h2>pass</h2>
      ) : (
      <h2>failed</h2>
      )}</h1>
    </div>
  )
}

export default ConditinalRendering
