import FormComponent from './FormComponent'
import ReactorComponent from './ReactorComponent'
import ChartComponent from './ChartComponent'
import ReactorModel from './ReactorModel';
import './App.css'

function App() {
  var viewModel = new ReactorModel(
    {p: 10, i: 0, d: 0}
  );
  
  return (
    <div className="AppWrapper">
      <div className="GraphicalWrapper">
        <FormComponent viewModel={viewModel}/>
        <ReactorComponent viewModel={viewModel}/>  
      </div>
      
      <div className="GraphicalWrapper">
        <ChartComponent
          viewModel={viewModel}
        />
      </div>
    </div>
  );
}

export default App
