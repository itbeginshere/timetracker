import { ITask } from '../../models/task/task';

interface IDeleteDialogProps {
    task ?: ITask;
    open : boolean;
    onConfirm : () => void;
    onDecline : () => void;
}

const DeleteDialog = (props : IDeleteDialogProps) => {
    
    const { open, task } = props;
    const { onConfirm, onDecline } = props;
    
    return (
        <dialog open={open} className={'backdrop:bg-primary fixed rounded-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-l-4 border-primary w-[80%]'}>
            <p className={'text-md md:text-lg'}>Are you sure that you want to delete the following task:</p>
            <p className={'text-md md:text-lg font-semibold'}>{'Task Name'}</p>
            <div className={'flex flex-row justify-end items-center gap-5'}>
                <button className={'transition rounded-3xl py-2 px-6 border-2 border-primary hover:border-secondary bg-primary hover:bg-secondary hover:shadow-lg hover:translate-y-[-2px]'} onClick={onConfirm}>
                    <span className={'text-white font-semibold'}>YES</span>
                </button>
                <button className={'transition rounded-3xl py-2 px-6 border-2 border-gray-500 hover:shadow-lg hover:translate-y-[-2px]'} onClick={onDecline}>
                     <span className={'text-grey-500 font-semibold'}>NO</span>
                </button>
            </div>
        </dialog>
    );
}

export default DeleteDialog;