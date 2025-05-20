import { useState } from 'react'
import Display from './components/Display'
import ButtonPanel from './components/ButtonPanel'
import Logo from './components/Logo'
import Header from './components/Header'
import './App.css'


function App() {
  const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setInput(eval(input).toString());
            } catch (error) {
                setInput('Error');
            }
        } else if (value === 'C') {
          setInput('');
        } else {
            setInput(input + value);
        }
    };

  return (
    <>
      <Header title='React Calculator'/>
      <Logo />
    <div className="calculator">
      <Display value={input} />
      <ButtonPanel onButtonClick={handleButtonClick} />
    </div>
    </>
  )
}

export default App