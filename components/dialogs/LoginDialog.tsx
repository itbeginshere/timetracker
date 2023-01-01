import { Form, Formik } from 'formik';
import { useMemo } from 'react';
import useToggle from '../../hooks/useToggle';
import { ILoginFormValues, UserHelper } from '../../models/user/user';
import Textfield from '../input/Textfield';
import DialogHeader from './common/DialogHeader';
import DialogWrapper from './common/DialogWrapper';

interface ILoginDialogProps {
    loading : boolean;
    onSignIn : (values : ILoginFormValues) => void;
    onRegister : (values : ILoginFormValues) => void;
    onClose : () => void;
}

const LoginDialog = (props : ILoginDialogProps) => {
    
    const { loading } = props;
    const { onSignIn, onRegister, onClose } = props;
    
    const [register, switchToRegisterForm, switchToLoginForm] = useToggle();

    const validationSchema = useMemo(() => {
        return UserHelper.getLoginFormValidationSchema();
    }, []);

    return (
        register ? (
                <DialogWrapper loading={loading} onClose={onClose}>
                    <DialogHeader title={'Register'}/>
                    <Formik
                        initialValues={UserHelper.getLoginFormValues()}
                        validationSchema={validationSchema}
                        onSubmit={onRegister}
                    >
                        <Form className={'flex flex-col gap-3'}>
                            <Textfield name={'email'} label={'Email'}/>
                            <Textfield name={'password'} label={'Password'}/>
                            <button 
                                className={'transition rounded-3xl py-2 px-10 border-2 border-primary hover:border-secondary bg-primary hover:bg-secondary hover:shadow-lg hover:translate-y-[-2px]'} 
                            >
                                <span className={'text-white font-semibold'}>Register</span>
                            </button>
                            <span className={'text-gray-600 text-xs self-center cursor-pointer'} onClick={switchToLoginForm}>
                                {"Already have an account?"}
                            </span>
                        </Form>
                    </Formik>
                </DialogWrapper>
            ) : (
                <DialogWrapper loading={loading} onClose={onClose}>
                    <DialogHeader title={'Sign-In'}/>
                    <Formik
                        initialValues={UserHelper.getLoginFormValues()}
                        validationSchema={validationSchema}
                        onSubmit={onSignIn}
                    >
                        <Form className={'flex flex-col gap-3'}>
                            <Textfield name={'email'} label={'Email'}/>
                            <Textfield name={'password'} label={'Password'}/>
                            <button 
                                className={'transition rounded-3xl py-2 px-10 border-2 border-primary hover:border-secondary bg-primary hover:bg-secondary hover:shadow-lg hover:translate-y-[-2px]'} 
                            >
                                <span className={'text-white font-semibold'}>Sign-In</span>
                            </button>
                            <span className={'text-gray-600 text-xs self-center cursor-pointer'} onClick={switchToRegisterForm}>
                                {"Don't have an account?"}
                            </span>
                        </Form>
                    </Formik>
                </DialogWrapper>
            )
    );
}

export default LoginDialog;