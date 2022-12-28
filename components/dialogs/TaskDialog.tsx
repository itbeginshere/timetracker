import { Formik, Form, Field } from 'formik';
import { useMemo } from 'react';
import { ITask, ITaskFormValues, TaskHelper } from '../../models/task/task';

interface ITaskDialogProps {
    task ?: ITask;
    open : boolean;
    onSave : (values : ITaskFormValues) => void;
    onClose : () => void;
}

const TaskDialog = (props : ITaskDialogProps) => {
    
    const { open, task } = props;
    const { onSave, onClose } = props;

    const validationSchema = useMemo(() => {
        return TaskHelper.getFormValidationSchema();
    }, []);

    const formValues = useMemo(() => {
        return TaskHelper.getFormValues(task);
    }, [task]);

    return (
        <dialog 
            open={open}
            className={'backdrop:bg-primary fixed rounded-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-l-4 border-primary w-[80%]'}
        >
            <div className={'pb-8'}>
                <span className={'font-bold pb-1 pr-4 border-b-2 border-primary text-2xl'}>Task Name</span>
            </div>
            <Formik
                initialValues={formValues}
                validationSchema={validationSchema}
                onSubmit={onSave}
            >
                <Form className={"flex flex-col gap-3"}>
                    <div className={'flex flex-row gap-3'}>
                        <label htmlFor={'name'} className={'w-[120px] font-medium'}>Name</label>
                        <Field id={'name'} name={'name'} placeholder={'Name'} className={'flex-1'}/>
                    </div>
                    <div className={'flex flex-row gap-3'}>
                        <label htmlFor={'description'} className={'w-[120px] font-medium'}>Description</label>
                        <Field id={'description'} name={'description'} placeholder={'Description'} className={'flex-1'}/>
                    </div>
                    <div className={'flex flex-row gap-3'}>
                        <label htmlFor={'completed'} className={'w-[120px] font-medium'}>Completed</label>
                        <Field id={'completed'} name={'completed'} placeholder={'Completed'} type={'checkbox'} className={'w-[18px]'}/>
                    </div>
                    <div className={'flex flex-col gap-3'}>
                        <div className={'flex flex-row gap-3'}>
                            <label htmlFor={'days'} className={'w-[120px] font-medium'}>Days</label>
                            <Field id={'days'} name={'days'} placeholder={'Days'} type={'number'} className={'flex-1'}/>
                        </div>
                        <div className={'flex flex-row gap-3'}>
                            <label htmlFor={'hours'} className={'w-[120px] font-medium'}>Hours</label>
                            <Field id={'hours'} name={'hours'} placeholder={'Hours'} type={'number'} className={'flex-1'}/>
                        </div>
                        <div className={'flex flex-row gap-3'}>
                            <label htmlFor={'minutes'} className={'w-[120px] font-medium'}>Minutes</label>
                            <Field id={'minutes'} name={'minutes'} placeholder={'Minutes'} type={'number'} className={'flex-1'}/>
                        </div>
                        <div className={'flex flex-row gap-3'}>
                            <label htmlFor={'seconds'} className={'w-[120px] font-medium'}>Seconds</label>
                            <Field id={'seconds'} name={'seconds'} placeholder={'Seconds'} type={'number'} className={'flex-1'}/>
                        </div>
                    </div>
                    <div className={'flex flex-row justify-end items-center gap-5'}>
                        <button 
                            type={'submit'}
                            className={'transition rounded-3xl py-2 px-6 border-2 border-primary hover:border-secondary bg-primary hover:bg-secondary hover:shadow-lg hover:translate-y-[-2px]'} 
                        >
                            <span className={'text-white font-semibold'}>{task ? 'SAVE' : 'ADD'}</span>
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

export default TaskDialog;