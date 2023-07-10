import * as React from 'react';
import Select from 'react-select';
import Test from './test';

function App() {
  const options = [
    {
      Name: 'Test1',
      Class: 'II Yamuna',
      Account: '123',
    },
    {
      Name: 'Test2',
      Class: 'III Yamuna',
      Account: '456',
    },
    {
      Name: 'Test3',
      Class: 'II Yamuna',
      Account: '789',
    },
    {
      Name: 'Test4',
      Class: 'II Yamuna',
      Account: '1011',
    },

    // ...
  ];
  const [value, setValue] = React.useState<any>({});

  return (
    <div>
      {JSON.stringify(value)}
      <Select
        name="accounts"
        options={options}
        value={value}
        onChange={setValue}
        getOptionLabel={(option) => option.Name}
        getOptionValue={(option) => option.Account}
      /> 
      <br/>
      <div>
        <Test />
      </div>
    </div>
  );
}

export default App;
