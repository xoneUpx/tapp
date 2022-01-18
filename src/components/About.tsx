import React from 'react'
import {useLocation} from 'react-router-dom'

const About: React.FC<Props> = ({name}) => {
  const params = useLocation()
  console.log(params)
  return (
    <div>About {name}</div>
  )
}
interface Props {
  name?: string;
}
export default About
