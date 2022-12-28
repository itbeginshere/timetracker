const NoTasksCard = () => {
    return (
        <div className={'flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl py-3 px-5 border-b-4 border-secondary w-full h-44'}>
            <span className={'text-lg font-semibold'}>You have yet to start a task!</span>
        </div>
    );
}

export default NoTasksCard;