import { useState, ChangeEvent, FormEvent } from "react";
import {
  RVForm,
  RVFormGroup,
  RVInput,
  RVFormFeedback,
} from "./Components/RVForm";
import { Button } from "reactstrap";

const App = () => {
  const defaultObj = {
    cim: "",
    nev: "",
    kor: "",
  };

  const [obj, setObj] = useState(defaultObj);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name, type, checked, value } = target;
    const newValue = type === "checkbox" ? checked : value;

    setObj({
      ...obj,
      [name]: newValue,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <RVForm onSubmitForm={onSubmit}>
        <RVFormGroup>
          <RVInput
            required
            name="cim"
            value={obj.cim}
            onChange={handleInputChange}
          />
          <RVFormFeedback valid={obj.cim !== ""}>
            Ez nagyon fasza...
          </RVFormFeedback>
        </RVFormGroup>
        <RVFormGroup>
          <RVInput
            required
            name="nev"
            value={obj.nev}
            onChange={handleInputChange}
          />
          <RVFormFeedback valid={obj.nev !== ""}>
            A mező kitöltése kötelező
          </RVFormFeedback>
        </RVFormGroup>
        <RVFormGroup>
          <RVInput
            required
            type="number"
            name="kor"
            value={obj.kor}
            onChange={handleInputChange}
          />
          <RVFormFeedback valid={obj.kor !== ""}>
            A mező kitöltése kötelező
          </RVFormFeedback>
        </RVFormGroup>
        <Button type="submit">Elküld</Button>
      </RVForm>
    </div>
  );
};

export default App;
