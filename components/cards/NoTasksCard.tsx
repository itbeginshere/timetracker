import { useAppSelector } from '../../redux/hooks';

const NoTasksCard = () => {

    const user = useAppSelector(x => x.userState.user);

    return (
        <div className={'flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl py-3 px-5 border-b-4 border-secondary w-full h-44'}>
            <span className={'text-lg font-semibold'}>{user ? 'You have yet to start a task!' : 'You need to be signed in to create tasks.'}</span>
        </div>
    );
}

export default NoTasksCard;