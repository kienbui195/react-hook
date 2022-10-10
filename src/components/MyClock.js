import useClock from '../hooks/useClock';

const MyClock = (props) => {
    const [time, ampm] = useClock();

   return (
      <div id="Clock-style">
         {time}
         <span> {ampm}</span>
      </div>
   )
}

export default MyClock;
