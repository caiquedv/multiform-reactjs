import { FormEvent, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Theme } from '../../components/Theme/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import * as C from './styles';

export const FormStep4 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    const handleNextStep = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (state.name !== '') {
            navigate('/multiform-reactjs/tks');
        } else {
            alert('Preencha os dados.')
        }
    };

    useEffect(() => {
        if (state.name === '') {
            navigate('/multiform-reactjs/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
    }, []);

    return (
        <Theme>
            <C.Container>
                <p>Passo 4/4</p>
                <h1>Confirme seus dados</h1>
                <p>Caso estejam corretos clique em <i>"Confirmar Dados"</i>.</p>

                <hr />

                <ul>
                    <li>Nome: <span>{state.name}</span></li>
                    <li>Email: <span>{state.email}</span></li>
                    <li>GitHub: <span>{state.github}</span></li>
                    <li>Nível:
                        <span>
                            {state.level === 0 ? '🥳 Comecei a programar há menos de 2 anos' 
                            : '😎 Já programo há 2 anos ou mais'}
                        </span>
                    </li>
                </ul>

                <Link to='/multiform-reactjs/step3'>Voltar</Link>
                <button onClick={handleNextStep}>Confirmar Dados</button>
            </C.Container>
        </Theme>
    );
}