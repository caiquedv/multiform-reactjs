import { ChangeEvent, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import * as C from './styles';

export const FormStep1 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    const handleNextStep = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        if(state.name !== '') {
            navigate('/multiform-reactjs/step2');
        } else {
            alert('Preencha os dados.')
        }
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    };

    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    },[]);

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/4</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr />

                <form>
                    <label>
                        Seu nome completo
                        <input type="text" autoFocus value={state.name} onChange={handleNameChange} />
                    </label>

                    <button onClick={handleNextStep}>Próximo</button>
                </form>
            </C.Container>
        </Theme>
    );
}