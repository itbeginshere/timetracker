import { Form, Formik } from 'formik';
import { useMemo, useState } from 'react';
import { ILoginFormValues, UserHelper } from '../../models/user/user';
import Textfield from '../input/Textfield';
import DialogHeader from './common/DialogHeader';
import DialogWrapper from './common/DialogWrapper';

interface ILoginDialogProps {
    open : boolean;
    onSignIn : (values : ILoginFormValues) => void;
    onRegister : (values : ILoginFormValues) => void;
    onClose : () => void;
}

const LoginDialog = (props : ILoginDialogProps) => {
    
    const { open } = props;
    const { onSignIn, onRegister, onClose } = props;
    
    const [isRegister, setIsRegister] = useState<boolean>(false);

    const validationSchema = useMemo(() => {
        return UserHelper.getLoginFormValidationSchema();
    }, []);

    return (
        <DialogWrapper open={open}>
            <DialogHeader title={'Sign-In or Register'}/>
            <Formik
                initialValues={UserHelper.getLoginFormValues()}
                validationSchema={validationSchema}
                onSubmit={() => {}}
            >
                <Form className={'flex flex-col gap-3'}>
                    <Textfield name={'email'} label={'Email'}/>
                    <Textfield name={'password'} label={'Password'}/>
                    <div className={'flex flex-row items-center justify-evenly'}>
                    <button 
                        className={'transition rounded-3xl py-2 px-10 border-2 border-primary hover:border-secondary bg-primary hover:bg-secondary hover:shadow-lg hover:translate-y-[-2px]'} 
                    >
                        <span className={'text-white font-semibold'}>Sing-In</span>
                    </button>
                    <button 
                        className={'transition rounded-3xl py-2 px-10 border-2 border-secondary hover:border-primary bg-secondary hover:bg-primary hover:shadow-lg hover:translate-y-[-2px]'} 
                    >
                        <span className={'text-white font-semibold'}>Register</span>
                    </button>
                    </div>
                </Form>
            </Formik>
        </DialogWrapper>
    );
}

export default LoginDialog;