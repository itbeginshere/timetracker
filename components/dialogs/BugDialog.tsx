import { Formik, Form, Field } from 'formik';
import { useMemo } from 'react';
import { BugHelper, IBugFormValues } from '../../models/bug/bug';

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
        <dialog 
            open={open}
            className={'backdrop:bg-primary fixed rounded-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-l-4 border-primary w-[80%]'}
        >
            <div className={'pb-8'}>
                <span className={'font-bold pb-1 pr-4 border-b-2 border-primary text-2xl'}>Report a Bug</span>
            </div>
            <Formik
                initialValues={formValues}
                validationSchema={validationSchema}
                onSubmit={onSave}
            >
                <Form className={"flex flex-col gap-3"}>
                    <div className={'flex flex-row gap-3'}>
                        <label htmlFor={'subject'} className={'w-[120px] font-medium'}>Subject</label>
                        <Field id={'subject'} name={'subject'} placeholder={'Subject'} className={'flex-1'}/>
                    </div>
                    <div className={'flex flex-row gap-3'}>
                        <label htmlFor={'message'} className={'w-[120px] font-medium'}>Message</label>
                        <Field id={'message'} name={'message'} placeholder={'Message'} className={'flex-1'}/>
                    </div>
                    <div className={'flex flex-row justify-end items-center gap-5'}>
                        <button 
                            type={'submit'}
                            className={'transition rounded-3xl py-2 px-6 border-2 border-primary hover:border-secondary bg-primary hover:bg-secondary hover:shadow-lg hover:translate-y-[-2px]'} 
                        >
                            <span className={'text-white font-semibold'}>SAVE</span>
                        </button>
                        <button 
                            className={'transition rounded-3xl py-2 px-6 border-2 border-gray-500 hover:shadow-lg hover:translate-y-[-2px]'} 
                            onClick={onClose}
                        >
                            <span className={'text-grey-500 font-semibold'}>CANCEL</span>
                        </button>
                    </div>
                </Form>
            </Formik>
        </dialog>
    );

}

export default BugDialog;