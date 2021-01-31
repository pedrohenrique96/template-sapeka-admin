import React, { FunctionComponent, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Label from '../../components/Label';
import { useAuth } from '../../hooks/auth';
// import getValidationErrors from '../../utils/getValidationErrors';
// import { useToast } from '../../hooks/toast';

import { Container, Box, Logo, FormSubmit } from './styles';

interface InputType {
  email: string;
  password: string;
}

const Authentication: FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const handleSubmit = useCallback(
    async (data: InputType) => {
      try {
        formRef.current?.setErrors({});

        const schema = yup.object().shape({
          email: yup
            .string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: yup.string().required('Senha obrigatório'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        signIn({ email: data.email, password: data.password });
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          // const errors = getValidationErrors(err);
          // formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn],
  );
  return (
    <Container>
      <Box>
        <Logo />

        <FormSubmit onSubmit={handleSubmit}>
          <Label>Seu E-mail</Label>
          <Input type="email" name="email" placeholder="exemplo@email.com" />

          <Label>Sua Senha</Label>
          <Input type="password" name="password" placeholder="*********" />

          <Button type="submit">Entrar</Button>
        </FormSubmit>
      </Box>
    </Container>
  );
};

export default Authentication;
