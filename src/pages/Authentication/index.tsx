import React, { FunctionComponent, useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Label from '../../components/Label';
import { useAuth } from '../../hooks/auth';
// import getValidationErrors from '../../utils/getValidationErrors';
// import { useToast } from '../../hooks/toast';

import { Container, Box, Logo } from './styles';

interface InputType {
  email: string;
  password: string;
}

const Authentication: FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  // const { addToast } = useToast();
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

        // addToast({
        //   type: 'error',
        //   title: 'Erro na autenticação',
        //   description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        // });
      }
    },
    [signIn],
  );
  return (
    <Container>
      <Box>
        <Logo />

        <Form onSubmit={handleSubmit}>
          <Label>Seu E-mail</Label>
          <Input type="email" name="email" placeholder="exemplo@email.com" />

          <Label>Sua Senha</Label>
          <Input type="password" name="password" placeholder="*********" />

          <Button>Entrar</Button>
        </Form>
      </Box>
    </Container>
  );
};

export default Authentication;
