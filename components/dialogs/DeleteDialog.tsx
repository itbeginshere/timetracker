import { ITask } from '../../models/task/task';
import CancelButton from '../buttons/CancelButton';
import DialogHeader from './common/DialogHeader';
import DialogWrapper from './common/DialogWrapper';

interface IDeleteDialogProps {
    task : ITask;
    open : boolean;
    loading : boolean;
    onConfirm : () => void;
    onDecline : () => void;
}

const DeleteDialog = (props : IDeleteDialogProps) => {
    
    const { open, task, loading } = props;
    const { onConfirm, onDecline } = props;
    
    return (
        <DialogWrapper open={open} loading={loading} onClose={onDecline}>
            <DialogHeader title={'Remove Task'}/>
            <p className={'text-base md:text-lg'}>Are you sure that you want to delete the following task:</p>
            <p className={'text-base md:text-lg font-semibold'}>{task.name}</p>
            <div className={'flex flex-row justify-end items-center gap-5'}>
                <button className={'transition rounded-3xl py-2 px-6 border-2 border-primary hover:border-secondary bg-primary hover:bg-secondary hover:shadow-lg hover:translate-y-[-2px]'} onClick={onConfirm}>
                    <span className={'text-white font-semibold'}>YES</span>
                </button>
                <CancelButton label={'NO'} onClick={onDecline}/>
            </div>
         </DialogWrapper>
    );
}

export default DeleteDialog;