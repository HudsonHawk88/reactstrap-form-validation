import { FC, ReactElement, ChangeEvent, FormEvent, useState } from 'react';
import {
    Form,
    Input,
    FormGroup,
    FormFeedback,
    FormProps,
    InputProps,
    InputGroup,
    InputGroupText,
    InputGroupProps,
    InputGroupTextProps,
    FormGroupProps,
    FormFeedbackProps,
    FormText,
    FormTextProps
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const validateForm = (e: any, submitFn: Function) => {
    const { target } = e;
    const isFormValid = target.checkValidity();
    console.log('isFormValid: ', isFormValid);
    if (isFormValid) {
        submitFn(e);
    }
};

const RVForm: FC<FormProps> = ({ className = 'reactstrap-form', children, noValidate = false, onSubmit, ...rest }): ReactElement => {
    return (
        <Form
            className={className}
            noValidate={noValidate}
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
                if (noValidate && onSubmit) {
                    e.preventDefault();
                    validateForm(e, onSubmit);
                } else {
                    if (onSubmit) {
                        onSubmit(e);
                    }
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

const RVInputGroupText: FC<InputGroupTextProps> = ({ className = 'reactstrap-form-inputgroup-text', children, ...rest }): ReactElement => {
    return (
        <InputGroupText className={className} {...rest}>
            {children}
        </InputGroupText>
    );
};

const RVFormGroup: FC<FormGroupProps> = ({ className = 'reactstrap-form-group', children, ...rest }): ReactElement => {
    return (
        <FormGroup className={className} {...rest}>
            {children}
        </FormGroup>
    );
};

const RVFormText: FC<FormTextProps> = ({ className = 'reactstrap-form-text', children, ...rest }): ReactElement => {
    return (
        <FormText className={className} {...rest}>
            {children}
        </FormText>
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
        if (e.target.type === 'checkbox') {
            if (e.target.checked === false) {
                setIsValid(false);
            } else {
                setIsValid(true);
            }
        } else {
            if (e.target.value === '') {
                setIsValid(false);
            } else {
                setIsValid(true);
            }
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
    RVInputGroupText,
    RVFormFeedback,
    RVFormText,
    FormProps as RVFormProps,
    InputProps as RVInputProps,
    InputGroupProps as RVInputgroupProps,
    InputGroupTextProps as RVInputGroupTextProps,
    FormGroupProps as RVFormGroupProps,
    FormFeedbackProps as RVFormFeedbackProps,
    FormTextProps as RVFormTextProps
};
