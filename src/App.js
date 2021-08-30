import './App.css';
import AddItem from './components/item/AddItem';

function App() {
  return (
    <div className="App">
      <AddItem formInfo={[
        {name: 'field1', type: 'text', placeholder: 'placeholder1', value: ''},
        {name: 'field2', type: 'text', placeholder: 'placeholder2', value: ''},
        {name: 'field3', type: 'checkbox', placeholder: '', value: false},
      ]}></AddItem>
    </div>
  );
}

export default App;
