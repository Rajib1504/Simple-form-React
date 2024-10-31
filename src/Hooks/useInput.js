import { useState } from "react"

const useInput = (defaultValue ="")=>{
      const [value,setValue] = useState(defaultValue);
      
      // const handelChange = e =>{
      //       setValue(e.target.value);
      // }//for arry
      const onChange = e =>{
            setValue(e.target.value);
      }//object
      // return[value,handelChange]//array
      return{value,onChange}
}
export default useInput



