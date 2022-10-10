import { useState, useEffect } from 'react'

const Effect = () => {
   let [selected, setSelected] = useState(0)
   let [valueSelected, setValueSelected] = useState('')

   const choice = (e) => {
      setSelected(e.target.value)
   }

   useEffect(() => {
      switch (selected) {
         case '0':
            setValueSelected('Java')
            break
         case '1':
            setValueSelected('PHP')
            break
         case '2':
            setValueSelected('JS')
            break
         default:
      }
   }, [selected])

   return (
      <div>
         Khoá học :
         <select
            onChange={(e) => {
               choice(e)
            }}>
            <option value="0">Java</option>
            <option value="1">PHP</option>
            <option value="2">Javascript</option>
         </select>
         <h2>Your selected: {valueSelected}</h2>
      </div>
   )
}

export default Effect;
