import './Samples.css'

import React from 'react'
import Sample from './Sample'

const Samples = ({resume}) => {
  return (
      <section>
        <main className='list'>
          <Sample resume={resume}/>
        </main>
      </section>
  )
}

export default Samples