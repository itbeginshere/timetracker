const SummaryCard = () => {
    return (
        <div className={'flex flex-col gap-3 bg-white shadow-lg rounded-2xl py-3 px-5 border-b-4 border-secondary w-full'}>
            <div className={'flex flex-row gap-3'}>
                <span className={'text-lg font-semibold w-[200px]'}>Total Time</span>
                <span className={'text-lg font-semibold text-secondary'}>60 minutes</span>
            </div>
            <div className={'flex flex-row gap-3'}>
                <span className={'text-lg font-semibold w-[200px]'}>Completed</span>
                <span className={'text-lg font-semibold text-secondary'}>2</span>
            </div>
            <div className={'flex flex-row gap-3'}>
                <span className={'text-lg font-semibold w-[200px]'}>In-Progress</span>
                <span className={'text-lg font-semibold text-secondary'}>2</span>
            </div>
            <div className={'flex flex-row gap-3'}>
                <span className={'text-lg font-semibold w-[200px]'}>Completion</span>
                <span className={'text-lg font-semibold text-secondary'}>50 %</span>
            </div>
        </div>
    );
}

export default SummaryCard;