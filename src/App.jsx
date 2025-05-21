import { useState } from 'react'
import Display from './components/Display'
import ButtonPanel from './components/ButtonPanel'
import Logo from './components/Logo'
import Header from './components/Header'
import { handleButtonClick } from './utils/utils'
import './App.css'


function App() {
  const [input, setInput] = useState('');

  return (
    <>
      <Header title='React Calculator'/>
      <Logo />
      <div className="calculator">
        <Display value={input} />
        <ButtonPanel onButtonClick={(value) => handleButtonClick(value, input, setInput)} />
      </div>
    </>
  );
}

export default App