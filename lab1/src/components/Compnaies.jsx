import React from 'react'
import Programers from './ Programers'
import Services from './Services'

function Compnaies(props) {
  return (
    <>
    <div  className='container-col'>
   

       <h1> company name: {props.company_name}</h1> 
       <h3> Employee:{props.employee_member}</h3> 
       <h3> Year:{props.yearOfEstablis}</h3> 


    
 <div className={props.companyName1 == 'Tuwaiq'? 'purble' : 'gray'}>
      <Programers
         name1={props.name1}
          programming_language={props.programming_language1}
          experience={props.experience1}
          companyName1={props.companyName1}
        />
        </div>
        <div className={props.companyName1 == 'Tuwaiq'? 'purble' : 'gray'}>
         <Programers
          name1={props.name2}
          programming_language={props.programming_language2}
          experience={props.experience2}
          companyName1={props.companyName1}
        />
        </div>
        <div className={props.companyName1 == 'Tuwaiq'? 'purble' : 'gray'}>
         <Programers
          name1={props.name3}
          programming_language={props.programming_language3}
          experience={props.experience3}
          companyName1={props.companyName1}
        />
</div>
        <Services typefServices= {props.typefServices} prices={props.prices}/>

    </div>
    </>
  )
}

export default Compnaies