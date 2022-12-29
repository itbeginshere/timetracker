import { useAppSelector } from '../../redux/hooks';
import LoadingSVG from '../svgs/LoadingSVG';

const NoTasksCard = () => {

    const user = useAppSelector(x => x.userState.user);
    const isUserLoading = useAppSelector(x => x.userState.isLoading);

    return (
        <div className={'flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl py-3 px-5 border-b-4 border-secondary w-full h-44'}>
            {
                isUserLoading ? 
                    <LoadingSVG className={'animate-spin fill-white'} stroke={'#01B7F0'}/> :
                    <span className={'text-lg font-semibold'}>{user ? 'You have yet to start a task!' : 'You need to be signed in to create tasks.'}</span>
            }

        </div>
    );
}

export default NoTasksCard;