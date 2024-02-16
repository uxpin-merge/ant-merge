import * as React from 'react'
import Tour from '../Tour'
const steps = [
  {
    title: 'Upload File',
    description: 'Put your files heresssss.',
  },
  {
    title: 'Save',
    description: 'Save your changes.',
  },
  {
    title: 'Other Actions',
    description: 'Click to see other actions.',
  },
]

export default <Tour uxpId="tour-1" steps={steps} />
