import { Form, Formik } from 'formik';
import { useMemo } from 'react';
import { ILoginFormValues, UserHelper } from '../../models/user/user';
import CancelButton from '../buttons/CancelButton';
import SubmitButton from '../buttons/SubmitButton';
import Textfield from '../input/Textfield';
import DialogHeader from './common/DialogHeader';
import DialogWrapper from './common/DialogWrapper';

interface ILoginDialogProps {
    open : boolean;
    onSubmit : (values : ILoginFormValues) => void;
    onClose : () => void;
}

const LoginDialog = (props : ILoginDialogProps) => {
    
    const { open } = props;
    const { onSubmit, onClose } = props;
    
    const validationSchema = useMemo(() => {
        return UserHelper.getLoginFormValidationSchema();
    }, []);

    return (
        <DialogWrapper open={open}>
            <DialogHeader title={'Sign-In or Register'}/>
            <Formik
                initialValues={UserHelper.getLoginFormValues()}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className={'flex flex-col gap-3'}>
                    <Textfield name={'email'} label={'Email'}/>
                    <Textfield name={'password'} label={'Password'}/>
                    <div className={'flex flex-row justify-end items-center gap-5'}>
                        <SubmitButton label={'SAVE'}/>
                        <CancelButton label={'CANCEL'} onClick={onClose}/>
                    </div>
                </Form>
            </Formik>
        </DialogWrapper>
    );
}

export default LoginDialog;