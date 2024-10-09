import React, { useEffect, useState } from 'react'
import Quiz from './Components/Quiz'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/data.json').then(res => res.json()).then(({data}) => setData(data))
  }, [])

  return (
    <>
      {data?.length && <Quiz data={data} />}
    </>
  )
}

export default App