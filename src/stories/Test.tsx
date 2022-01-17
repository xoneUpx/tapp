import React from 'react'

const Test = (props: TestProps) => {
  return (
    <div>Test {props.name}</div>
  )
}
interface TestProps {
  name?: string;
}
export default Test;
