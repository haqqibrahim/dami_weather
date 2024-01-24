import React from 'react'

const Form = ({handlesubmit,handlechange,city}) => {
  return (
    <div className='leftSide3'>
         <h2 className='greeting'>D R E X</h2>
                <div>
                    <form>
                        <input placeholder=' Enter City' value={city} onChange={handlechange} type="text"  className='input'></input> <button type='submit' onClick={handlesubmit} className='btn'>search</button>
                    </form>
                </div>
    </div>
  )
}

export default Form;