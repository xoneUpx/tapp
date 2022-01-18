import React from 'react'

const Test = ({name}: TestProps) => {
  return (
    <div>Test {name}</div>
  )
}
interface TestProps {
  name?: string;
}
export default Test;
