import FormComponent from './FormComponent'
import ReactorComponent from './ReactorComponent'
import ChartComponent from './ChartComponent'
import './App.css'
import { useState } from 'react'

function App() {

  const [model, setModel] = useState(0)

  function handleModel(){
    setModel(model + 1)
  }

  return (
    <div className="AppWrapper">
      <FormComponent/>
      <div className="GraphicalWrapper">
        <ReactorComponent/>
        <ChartComponent
          model={model}
        />
        <button onClick={handleModel}>botão</button>
      </div>
      
    </div>
    
  );
}

export default App
