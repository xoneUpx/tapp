import React from 'react'
import {useLocation} from 'react-router-dom'

const Test: React.FC<Props> = ({name}) => {
  const params = useLocation()
  console.log(params)
  return (
    <div>Test {name}</div>
  )
}
interface Props {
  name?: string;
}
export default Test
