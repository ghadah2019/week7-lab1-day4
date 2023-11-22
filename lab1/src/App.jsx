import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Programers from './components/ Programers'
import Compnaies from './components/Compnaies'

import Services from './components/Services'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container-1'>
    <Compnaies company_name ="Zain" employee_member="1000" yearOfEstablis="2000" name1 = "ahmad" name2="mohammed" name3="amal" typefServices="programming" prices="1000$" companyName1= "Zain" programming_language1="javascript" experience1="2 years" experience2="2 years" experience3="2 years"></Compnaies>
    <Compnaies company_name ="Aramco" employee_member="2000" yearOfEstablis="1999" name1 = "amjad" name2="Sarah" name3="Turki" typefServices="Oil Gas" prices="2200$" companyName1= "Aramco" programming_language1="c++ " experience1="3 years" experience2="3 years" experience3="2 years"></Compnaies>
    <Compnaies company_name ="Tuwaiq" employee_member="2000" yearOfEstablis="2002" name1 = "amjad" name2="Sarah" name3="Turki" typefServices="Teaching" prices="2200$" companyName1= "Tuwaiq "  programming_language1="react" experience1="3 years" experience2="2 years" experience3></Compnaies>
  {/* <Programers name1="ahmad" programming_language="javascript" experience="3 years" company_name="zain"/>
  <Programers name1="amal" programming_language="java" experience="4 years" company_name="zain"/>
  <Programers name1="sarah" programming_language="swift" experience="6 years" company_name="zain"/>
  <Compnaies company_name="tuwaiq" employee_member="1000" yearOfEstablis="5 years"/>
  <Compnaies company_name="zain" employee_member="1000" yearOfEstablis="5 years" /> */}
  {/* <Services typefServices="programming" prices="1000$"/> */}

  {/* <Compnaies></Compnaies> */}
   </div>
    </>
  )
}

export default App
