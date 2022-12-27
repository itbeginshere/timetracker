import DeleteButton from '../buttons/DeleteButton';
import EditSVG from '../svgs/EditSVG';
import PauseSVG from '../svgs/PauseSVG';
import UnCheckedSVG from '../svgs/UnCheckedSVG';

interface ITaskCardProps {
    
}

const TaskCard = (props : ITaskCardProps) => {
    return (
        <div className={`bg-white shadow-lg rounded-2xl py-3 px-5 border-l-4 w-full box-border ${true ? 'border-primary' : 'border-neutral-900'} width`}>
            <div className={'flex flex-row justify-between pb-6'}>
                <div className={'flex flex-col'}>
                    <span className={'text-base md:text-xl font-semibold'}>{'Task name'}</span>
                    <span className={'text-sm md:text-base font-medium '}>{'Description'}</span>
                </div>
                <DeleteButton />
            </div>
            <div className={'flex flex-row justify-between items-center'}>
                <div className={'flex flex-row gap-2 items-center'}>
                    <PauseSVG />
                    <span>20:00</span>
                </div>
                <div className={'flex flex-row gap-2 items-center'}>
                    <UnCheckedSVG />
                    <EditSVG />
                </div>
            </div>
        </div>
    );
}

export default TaskCard;