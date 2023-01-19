import { useState } from 'react'


import './styles.css'

import Title from './Title.js'
import NameLength from './NameLength.js'
import NameReversed from './NameReversed.js'

export default function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title userName ={name} />
      <NameLength NameLength= {name}/>
     <NameReversed NameReversed = {name} />
    </div>
  )
}
