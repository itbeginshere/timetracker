import { User } from 'firebase/auth';
import { Form, Formik } from 'formik';
import { useMemo } from 'react';
import { IUserFormValues, UserHelper } from '../../models/user/user';
import CancelButton from '../buttons/CancelButton';
import SubmitButton from '../buttons/SubmitButton';
import Textfield from '../input/Textfield';
import DialogActionWrapper from './common/DialogActionWrapper';
import DialogHeader from './common/DialogHeader';
import DialogWrapper from './common/DialogWrapper';

interface IProfileDialogProps {
    user : User;
    loading : boolean;
    onSave : (values : IUserFormValues) => void;
    onClose : () => void;
}

const ProfileDialog = (props : IProfileDialogProps) => {
    
    const { user, loading } = props;
    const { onSave, onClose } = props;
    
    const validationSchema = useMemo(() => {
        return UserHelper.getFormValidationSchema();
    }, []);

    return (
        <DialogWrapper loading={loading} onClose={onClose}>
            <DialogHeader title={user.displayName ?? 'No-Name'}/>
            <Formik
                initialValues={UserHelper.getFormValuesFromFirebaseUser(user)}
                validationSchema={validationSchema}
                onSubmit={onSave}
            >
                <Form className={'flex flex-col gap-3'}>
                    <Textfield name={'email'} label={'Email'}/>
                    <Textfield name={'displayName'} label={'Username'}/>
                    <DialogActionWrapper>
                        <SubmitButton label={'SAVE'}/>
                        <CancelButton label={'CANCEL'} onClick={onClose}/>
                    </DialogActionWrapper>
                </Form>
            </Formik>
        </DialogWrapper>
    );
}

export default ProfileDialog;