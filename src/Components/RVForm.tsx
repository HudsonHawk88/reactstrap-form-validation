import { FC, ReactElement, ChangeEvent, FormEvent, useState } from 'react';
import { Form, Input, FormGroup, FormFeedback, FormProps, InputProps, InputGroup, InputGroupProps, FormGroupProps, FormFeedbackProps } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const validateForm = (e: any, submitFn: Function) => {
    const { target } = e;
    const isFormValid = target.checkValidity();
    if (isFormValid) {
        submitFn(e);
    }
};

const RVForm: FC<FormProps> = ({ className = 'reactstrap-form', children, noValidate, onSubmit = () => {}, ...rest }): ReactElement => {
    return (
        <Form
            className={className}
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
                if (noValidate) {
                    validateForm(e, onSubmit);
                } else {
                    onSubmit(e);
                }
            }}
            {...rest}
        >
            {children}
        </Form>
    );
};

const RVInputGroup: FC<InputGroupProps> = ({ className = 'reactstrap-form-inputgroup', children, ...rest }): ReactElement => {
    return (
        <InputGroup className={className} {...rest}>
            {children}
        </InputGroup>
    );
};

const RVFormGroup: FC<FormGroupProps> = ({ className = 'reactstrap-form-group', children, ...rest }): ReactElement => {
    return (
        <FormGroup className={className} {...rest}>
            {children}
        </FormGroup>
    );
};

const RVFormFeedback: FC<FormFeedbackProps> = ({ className = 'reactstrap-form-feedback', children = 'A mező kitöltése kötelező!', ...rest }): ReactElement => {
    return (
        <FormFeedback className={className} {...rest}>
            {children}
        </FormFeedback>
    );
};

const RVInput: FC<InputProps> = ({
    className = 'reactstrap-form-input',
    onChange = () => {
        console.log('...');
    },
    ...rest
}): ReactElement => {
    const [isValid, setIsValid] = useState(true);

    const validate = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    };

    return (
        <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onChange(e);
                validate(e);
            }}
            onInvalid={(e: ChangeEvent<HTMLInputElement>) => validate(e)}
            invalid={!isValid}
            className={className}
            {...rest}
        />
    );
};

export {
    RVForm,
    RVFormGroup,
    RVInput,
    RVInputGroup,
    RVFormFeedback,
    FormProps as RVFormProps,
    InputProps as RVInputProps,
    InputGroupProps as RVInputgroupProps,
    FormGroupProps as RVFormGroupProps,
    FormFeedbackProps as RVFormFeedbackProps
};
