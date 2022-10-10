import Counter from './components/Counter'
import Effect from './components/Effect'
import './App.css'
import MyClock from './components/MyClock'
import CarSelection from './components/CarSelection'
import TimeCount from './components/TimeCount'
import DoubleCount from './components/DoubleCount'

function App() {
   return (
      <div className="App">
         {/* Triển khai useState */}
         <Counter />

         {/* Triển khai useEffect */}
         <Effect />

         {/* Clock */}
         <MyClock />

         {/* Xây dựng component Car selection */}
         <CarSelection />

         {/* Xây dựng Component Timer */}
         {/*TimeCount >*/}

         {/* Xây dựng Component Counter */}
         <DoubleCount />
      </div>
   )
}

export default App
