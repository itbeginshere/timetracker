import useToggle from '../../hooks/useToggle';
import { ITaskFormValues, TaskHelper } from '../../models/task/task';
import TaskDialog from '../dialogs/TaskDialog';
import PlusSVG from '../svgs/PlusSVG';

interface INewTaskButtonProps {
    className ?: string;
}

const NewTaskButton = (props : INewTaskButtonProps) => {
   
    const { className } = props;

    const [open, openDialog, closeDialog] = useToggle();
    const [loading, startLoding, endLoading] = useToggle();

    const saveTask = async (values : ITaskFormValues) => {
        
        startLoding();

        const result = await TaskHelper.create(values);

        endLoading();
        
        if (result) {
            closeDialog();
        }
    };
   
    return (
        <>
            <button 
                onClick={openDialog} 
                className={`group bg-white hover:bg-secondary rounded-full p-1 hover:shadow-lg ${className ?? ''}`}
            >
                <PlusSVG width={50} height={50} className={'transition fill-secondary group-hover:fill-white'}/>
            </button>
            {
                open && (
                    <TaskDialog 
                        loading={loading}
                        onClose={closeDialog}
                        onSave={saveTask}
                    />
                )
            }
        </>
    )
}

export default NewTaskButton;