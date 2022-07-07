import './Samples.css'

import React from 'react'
import Sample from './Sample'

const Samples = ({resume}) => {
  return (
      <main className='list'>
        <Sample resume={resume}/>
      </main>
  )
}

export default Samples