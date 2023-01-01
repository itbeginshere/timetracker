import { Formik, Form } from 'formik';
import { useMemo } from 'react';
import { ITask, ITaskFormValues, TaskHelper } from '../../models/task/task';
import CancelButton from '../buttons/CancelButton';
import SubmitButton from '../buttons/SubmitButton';
import Checkbox from '../input/Checkbox';
import Spinner from '../input/Spinner';
import Textfield from '../input/Textfield';
import DialogHeader from './common/DialogHeader';
import DialogWrapper from './common/DialogWrapper';

interface ITaskDialogProps {
    task ?: ITask;
    loading : boolean;
    onSave : (values : ITaskFormValues) => void;
    onClose : () => void;
}

const TaskDialog = (props : ITaskDialogProps) => {
    
    const { task, loading } = props;
    const { onSave, onClose } = props;

    const validationSchema = useMemo(() => {
        return TaskHelper.getFormValidationSchema();
    }, []);

    return (
        <DialogWrapper loading={loading} onClose={onClose}>
            <DialogHeader title={task ? 'Update Task' : 'Create Task'}/>
            <Formik
                initialValues={TaskHelper.getFormValues(task)}
                validationSchema={validationSchema}
                onSubmit={onSave}
            >
                <Form className={"flex flex-col gap-3"}>
                    <Textfield name={'name'} label={'Name'}/>
                    <Textfield name={'description'} label={'Description'}/>
                    <Checkbox name={'completed'} label={'Completed'}/>
                    <div className={'flex flex-col gap-3'}>
                        <Spinner name={'days'} label={'Days'} />
                        <Spinner name={'hours'} label={'Hours'} />
                        <Spinner name={'minutes'} label={'Minutes'} />
                        <Spinner name={'seconds'} label={'Seconds'} />
                    </div>
                    <div className={'flex flex-row justify-end items-center gap-5'}>
                        <SubmitButton label={task ? 'SAVE' : 'ADD'} />
                        <CancelButton label={'CANCEL'} onClick={onClose} />
                    </div>
                </Form>
            </Formik>
        </DialogWrapper>
    );

}

export default TaskDialog;