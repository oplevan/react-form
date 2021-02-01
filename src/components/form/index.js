import React, { useState } from 'react';
import Message from '../message';
import { BiError } from 'react-icons/bi';
import {
  GlobalStyle,
  FormWrapper,
  Form,
  FormTitle,
  Group,
  Label,
  Input,
  Button,
  ErrorText,
  ErrorIcon,
} from './styles/form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const postData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 400);
  });
};

const ReactForm = () => {
  const [showMessage, setShowMessage] = useState(false);

  // form validation rules
  const validation = Yup.object().shape({
    name: Yup.string()
      .required('Please enter your name')
      .min(3, 'Name must be at least 3 characters'),
    // email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Please enter a password')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .required('Retype Password')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    DoB: Yup.string()
      .required('Please enter your date of birth')
      .matches(
        /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/,
        'Please use the following format dd/mm/yyyy'
      ),
    age: Yup.string().required('Please enter your age'),
    terms: Yup.bool().oneOf([true], 'Accept T&C is required'),
  });

  // functions to build form returned by useForm() hook
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validation),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    const result = await postData(data);

    console.log(
      'The form has been successfully submitted \n' +
        JSON.stringify(data, null, 3)
    );
    reset();

    if (result.success) {
      setShowMessage(true);
    }
  };

  const closeMessage = (newState) => {
    setShowMessage(newState);
  };

  return (
    <>
      <GlobalStyle />
      <FormWrapper>
        <FormWrapper>
          <Form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <FormTitle>Form</FormTitle>
            <Group>
              <Label htmlFor='name'>
                Name <span>*</span>
              </Label>
              <Input
                placeholder='Enter your name'
                error={errors.name ? 'error' : ''}
                name='name'
                type='text'
                ref={register}
              ></Input>
              {errors.name && (
                <>
                  <ErrorIcon>
                    <BiError />
                  </ErrorIcon>
                  <ErrorText>{errors.name?.message}</ErrorText>
                </>
              )}
            </Group>
            {/* <Group>
              <Label htmlFor='email'>
                E-mail <span>*</span>
              </Label>
              <Input
                placeholder='name@mail.com'
                error={errors.email ? 'error' : ''}
                name='email'
                type='text'
                ref={register}
              ></Input>
              {errors.email && <Error>{errors.email?.message}</Error>}
            </Group> */}
            <Group>
              <Label htmlFor='password'>
                Password <span>*</span>
              </Label>
              <Input
                placeholder='Create password'
                error={errors.password ? 'error' : ''}
                type='password'
                name='password'
                ref={register}
              ></Input>
              {errors.password && (
                <>
                  <ErrorIcon>
                    <BiError />
                  </ErrorIcon>
                  <ErrorText>{errors.password?.message}</ErrorText>
                </>
              )}
            </Group>
            <Group>
              <Label htmlFor='confirmPassword'>
                Confirm Password <span>*</span>
              </Label>
              <Input
                placeholder='Confirm Password'
                error={errors.confirmPassword ? 'error' : ''}
                name='confirmPassword'
                type='password'
                ref={register}
              ></Input>
              {errors.confirmPassword && (
                <>
                  <ErrorIcon>
                    <BiError />
                  </ErrorIcon>
                  <ErrorText>{errors.confirmPassword?.message}</ErrorText>
                </>
              )}
            </Group>
            <Group>
              <Label htmlFor='DoB'>
                Date of Birth <span>*</span>
              </Label>
              <Input
                placeholder='DD/MM/YYYY'
                error={errors.DoB ? 'error' : ''}
                name='DoB'
                type='text'
                ref={register}
              ></Input>
              {errors.DoB && (
                <>
                  <ErrorIcon>
                    <BiError />
                  </ErrorIcon>
                  <ErrorText>{errors.DoB?.message}</ErrorText>
                </>
              )}
            </Group>
            <Group>
              <Label htmlFor='age'>
                Age <span>*</span>
              </Label>
              <Input
                placeholder='Enter your age'
                error={errors.age ? 'error' : ''}
                type='number'
                name='age'
                ref={register}
              ></Input>
              {errors.age && (
                <>
                  <ErrorIcon>
                    <BiError />
                  </ErrorIcon>
                  <ErrorText>{errors.age?.message}</ErrorText>
                </>
              )}
            </Group>
            <Group terms>
              <Input type='checkbox' name='terms' ref={register} />
              <Label htmlFor='terms'>
                I agree to the terms and conditions of{' '}
                <a href='/'>Privacy Policy</a>
              </Label>
              {errors.terms && <ErrorText>{errors.terms?.message}</ErrorText>}
            </Group>
            <Button type='submit'>Submit</Button>
          </Form>
        </FormWrapper>
      </FormWrapper>
      {showMessage ? <Message onClose={closeMessage} /> : null}
    </>
  );
};

export default ReactForm;
