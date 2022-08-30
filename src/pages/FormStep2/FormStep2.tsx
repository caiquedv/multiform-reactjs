import { ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SelectOption } from '../../components/SelectOption/SelectOption';
import { Theme } from '../../components/Theme/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import * as C from './styles';

export const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/multiform-reactjs/step3');
        } else {
            alert('Preencha os dados.')
        }
    };
    
    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    };

    useEffect(() => {
        if (state.name === '') {
            navigate('/multiform-reactjs/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/4</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to='/multiform-reactjs/'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button> 
            </C.Container>
        </Theme>
    );
}