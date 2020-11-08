import FormComponent from './FormComponent'
import ReactorComponent from './ReactorComponent'
import ChartComponent from './ChartComponent'
import ReactorModel from './ReactorModel';

function App() {
  var viewModel = new ReactorModel(
    {p: 0, i: 0, d: 0}
  );
  
  return (
    <div className="AppWrapper">
      <FormComponent viewModel={viewModel} />
      <div className="GraphicalWrapper">
        <ReactorComponent/>
        <ChartComponent/>
      </div>
    </div>
  );
}

export default App
