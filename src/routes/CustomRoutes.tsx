import React, {lazy, Suspense, PropsWithChildren} from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import routes from './routes'
import Test from '../components/Test'
import About from '../components/About'

interface Dict<T> {
  [key: string]: T
}

//const comps: Dict<typeof Test>> = {
const comps: Dict<React.FC<{name?: string}>> = {
  Test,
  About,
}
//map is better?
//const arr = [['Test', Test], ['About', About]]
//const comps = new Map<string, typeof Test>(arr)
//console.log(comps.get("Test"))

const CustomRoutes = (props: PropsWithChildren<{}>) => {
  const renderComponent = (cname: string) => {
       //const Comp = comps[cname]
       const Comp = comps[cname]
       console.log(Comp)
      //return React.createElement(Comp, {name: cname})
      return (<Comp name={cname} />)
       //return (<Comp name="test" />)
   }
  return (
    <BrowserRouter>
    <Routes>{
      //add lazy loading?
   routes.map((route, index) => {
        return (
          //is this legal?
        <Route key={index} path={route.path} element={renderComponent(route.name)} /> )
      })}
    </Routes>
    </BrowserRouter>
  )
}
//import from Test definition?
interface Props {
  name?: string;
}
export default CustomRoutes
