const NewTaskButton = () => {
    return (
        <button className={'transition rounded-full bg-primary hover:bg-secondary hover:shadow-lg py-3 px-7'}>
            <span className={'text-white font-semibold uppercase'}>
                New Task
            </span>
        </button>
    )
}

export default NewTaskButton;