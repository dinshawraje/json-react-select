import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

function Test() {
  const [colourOptions, setColourOptions] = useState([
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
  ]);

  const [value, setValue] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  const handleCreate = (inputValue: string) => {
    const newOption = {
      Name: inputValue,
      Class: '',
      Account: inputValue,
    };

    setColourOptions([...colourOptions, newOption]);
    setValue(newOption);
  };

  const options = colourOptions.map((option) => ({
    value: option.Account,
    label: option.Account,
  }));

  return (
    <CreatableSelect
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      options={options}
      value={value}
      onChange={handleChange}
      onCreateOption={handleCreate}
    />
  );
}

export default Test;
