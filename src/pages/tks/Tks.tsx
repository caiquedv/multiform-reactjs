import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormActions, useForm } from '../../contexts/FormContext';
import * as C from './styles';

export const Tks = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 0
            });
        }
    }, []);

    return (
        <C.Container>Obrigado por utilizar este sistema!</C.Container>
    );
}