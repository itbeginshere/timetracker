import moment from 'moment';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import TaskActionHelper from '../../redux/task/action';
import ToggleButton from '../buttons/ToggleButton';
import DatePicker from '../input/DatePicker';
import DialogHeader from './common/DialogHeader';
import DialogWrapper from './common/DialogWrapper';

interface IFilterDialogProps {
    onClose : () => void;
}

const FilterDialog = (props : IFilterDialogProps) => {
    
    const { onClose } = props;
    
    const startDate = useAppSelector(x => x.taskState.startDate);
    const endDate = useAppSelector(x => x.taskState.endDate);
    const showCompleted = useAppSelector(x => x.taskState.completed);

    const dispatch = useAppDispatch();

    const toggleCompleted = () => {
        dispatch(TaskActionHelper.setCompleted(!showCompleted));
    };

    const onStartDateChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        dispatch(TaskActionHelper.setStartDate(moment.utc(event.target.value, 'YYYY-MM-DD').local()));
    } 

    const onEndDateChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        dispatch(TaskActionHelper.setEndDate(moment.utc(event.target.value, 'YYYY-MM-DD').local()));
    } 

    return (
        <DialogWrapper loading={false} onClose={onClose}>
            <DialogHeader title={'Task Filters'}/>
            <div className={'flex flex-col gap-3 items-start'}>
                <DatePicker label={'Start Date'} name={'startDate'} value={startDate} onChange={onStartDateChange}/>
                <DatePicker label={'End Date'} name={'endDate'} value={endDate} onChange={onEndDateChange}/>
                <ToggleButton 
                    value={showCompleted}
                    label={`${showCompleted ? 'Show' : 'Hide'} Completed`}
                    onChange={toggleCompleted}
                />
            </div>
        </DialogWrapper>
    );
}

export default FilterDialog;