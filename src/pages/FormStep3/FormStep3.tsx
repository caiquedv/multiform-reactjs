import { ChangeEvent, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import * as C from './styles';

export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    const handleNextStep = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (state.email !== '' && state.github !== '') {
            navigate('/multiform-reactjs/step4');
        } else {
            alert('Preencha os dados.')
        }
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    };

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    };

    useEffect(() => {
        if (state.name === '') {
            navigate('/multiform-reactjs/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/4</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

                <hr />

                <form>
                    <label>
                        Qual seu email?
                        <input type="text" value={state.email} onChange={handleEmailChange} />
                    </label>

                    <label>
                        Qual seu GitHub?
                        <input type="text" value={state.github} onChange={handleGithubChange} />
                    </label>

                    <label>
                        <Link to='/multiform-reactjs/step2'>Voltar</Link>
                        <button onClick={handleNextStep}>Finalizar Cadastro</button>
                    </label>
                </form>
            </C.Container>
        </Theme>
    );
}