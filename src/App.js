import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incNumber,decNumber } from './action'

const App = () => {
  const myState=useSelector((state)=>state.changeTheNumber)
  const dispatch=useDispatch()


  return (
    <>
    <div className='container'>
      <h1>Increment /Decrement</h1>

      <div className='quentity'>
          <a className='quentity_minus' title='decrement' onClick={() => dispatch(decNumber())} ><span>-</span></a>
          <input name='quentity' type='text' className='quentity_input' value={myState}  />
          <a className='quentity_plus' title='increment' onClick={()=>dispatch(incNumber())}><span>+</span></a>

      </div>
    </div>
    </>
  )
}

export default App
