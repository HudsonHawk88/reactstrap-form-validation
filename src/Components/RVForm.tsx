import { FC, ReactElement, ChangeEvent, useState } from 'react';
import { Form, Input, FormGroup, FormFeedback, FormProps, InputProps, FormGroupProps, FormFeedbackProps } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const RVForm: FC<FormProps> = ({ className = 'reactstrap-form', children, onSubmit, ...rest }): ReactElement => {
    return (
        <Form className={className} onSubmit={onSubmit} {...rest}>
            {children}
        </Form>
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

export { RVForm, RVFormGroup, RVInput, RVFormFeedback, FormProps as RVFormProps, InputProps as RVInputProps, FormGroupProps as RVFormGroupProps, FormFeedbackProps as RVFormFeedbackProps };
