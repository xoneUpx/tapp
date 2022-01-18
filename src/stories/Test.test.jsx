import React from 'react'
import Test from './Test'
//cleanup is automatic after each render - this import prevents it
import '@testing-library/react/dont-cleanup-after-each'
import {screen, render} from '@testing-library/react'

describe('some tests', ()=>{
  beforeAll(()=>{
  render(<Test name='lol'/>)
});
  test('check for existence', ()=>{
    const div = screen.getByText(/test/i)
    expect(div).toBeInTheDocument()
  });
  test('check for props', () =>{
    const prop = screen.getByText(/lol/i)
    expect(prop).toBeInTheDocument()

  })
})
