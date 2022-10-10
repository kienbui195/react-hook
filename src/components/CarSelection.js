import { useState } from 'react'

const CarSelection = (props) => {
   const [car, setCar] = useState('')
   const [color, setColor] = useState('')

   const chooseCar = (e) => {
      setCar(e.target.value)
   }

   const chooseColor = (e) => {
      setColor(e.target.value)
   }


   return (
      <>
         <h1>Select Your Car</h1>
         <div>
            Select a car
            <select onChange={(e) => chooseCar(e)}>
               <option selected>Kia</option>
               <option>Mercerdes</option>
               <option>Toyota</option>
            </select>
         </div>
         <div>
            Select a color
            <select onChange={(e) => chooseColor(e)}>
               <option selected>Red</option>
               <option>Brown</option>
               <option>Black</option>
            </select>
         </div> 
         <div>
            <h2>
               You selected a {color} - {car}
            </h2>
         </div>
      </>
   )
}

export default CarSelection
