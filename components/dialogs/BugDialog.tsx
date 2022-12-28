import { Formik, Form, Field } from 'formik';
import { useMemo } from 'react';
import { BugHelper, IBugFormValues } from '../../models/bug/bug';
import CancelButton from '../buttons/CancelButton';
import SubmitButton from '../buttons/SubmitButton';
import Textfield from '../input/Textfield';
import DialogHeader from './common/DialogHeader';
import DialogWrapper from './common/DialogWrapper';

interface IBugDialogProps {
    open : boolean;
    onSave : (values : IBugFormValues) => void;
    onClose : () => void;
}

const BugDialog = (props : IBugDialogProps) => {
    
    const { open } = props;
    const { onSave, onClose } = props;

    const validationSchema = useMemo(() => {
        return BugHelper.getFormValidationSchema();
    }, []);

    const formValues = useMemo(() => {
        return BugHelper.getFormValues();
    }, []);

    return (
       <DialogWrapper open={open}>
            <DialogHeader title={'Report an Issue'}/>
            <Formik
                initialValues={formValues}
                validationSchema={validationSchema}
                onSubmit={onSave}
            >
                <Form className={"flex flex-col gap-3"}>
                    <Textfield name={'subject'} label={'Subject'}/>
                    <Textfield name={'message'} label={'Message'}/>
                    <div className={'flex flex-row justify-end items-center gap-5'}>
                        <SubmitButton label={'SEND'} />
                        <CancelButton label={'CANCEL'} onClick={onClose} />
                    </div>
                </Form>
            </Formik>
       </DialogWrapper>
    );

}

export default BugDialog;