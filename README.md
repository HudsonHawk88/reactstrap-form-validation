# @inftechsol/reactstrap-form-validation

## About component

It is a simle form component with validator. This component's base is reactstrap Form, and Inputs and all props comes from there.

## Compatibility

This component use [React v18.1.0](https://www.npmjs.com/package/react 'React v18.1.0'), [react-dom v18.1.0](https://www.npmjs.com/package/react-dom 'React DOM v18.1.0'),
[Bootstrap v5.1.3](https://www.npmjs.com/package/bootstrap 'Bootstrap v5.1.3') and [reactstrap v9.0.2](https://www.npmjs.com/package/reactstrap 'Reactstrap v9.0.2').

## Installation

npm i @inftechsol/reactstrap-form-validation

## Basic usage

```jsx
import { useState } from 'react';
import { RVForm, RVFormGroup, RVInput, RVFormFeedback } from '@inftechsol/reactstrap-form-validation';
import { Button, Label } from 'reactstrap';

const App = () => {
    const defaultObj = {
        address: '',
        name: '',
        age: ''
    };

    const style = {
        padding: '20px'
    };

    const [obj, setObj] = useState(defaultObj);

    const handleInputChange = (e) => {
        const { target } = e;
        const { name, type, checked, value } = target;
        const newValue = type === 'checkbox' ? checked : value;

        setObj({
            ...obj,
            [name]: newValue
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Event: ', e);
    };

    return (
        <div style={style}>
            <RVForm onSubmit={onSubmit}>
                <RVFormGroup>
                    <Label>Address:</Label>
                    <RVInput required name="address" value={obj.address} onChange={handleInputChange} />
                    <RVFormFeedback>This is soooo good...</RVFormFeedback>
                </RVFormGroup>
                <RVFormGroup>
                    <Label>Name: </Label>
                    <RVInput required name="name" value={obj.name} onChange={handleInputChange} />
                    <RVFormFeedback>This field is required!</RVFormFeedback>
                </RVFormGroup>
                <RVFormGroup>
                    <Label>Age: </Label>
                    <RVInput required type="number" name="age" value={obj.age} onChange={handleInputChange} />
                    <RVFormFeedback>This field is required!</RVFormFeedback>
                </RVFormGroup>
                <Button type="submit">Send</Button>
            </RVForm>
        </div>
    );
};

export default App;
```

## Properties

All comes from reactstrap Forms and Inputs except RVForm onSubmitFrom. See
[Reactstrap form and input props](https://reactstrap.github.io/?path=/docs/components-forms--props 'Reactstrap Form and input props')
