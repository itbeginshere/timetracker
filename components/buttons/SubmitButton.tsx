interface ISubmitButtonProps {
    label : string;
}

const SubmitButton = (props : ISubmitButtonProps) => {
    
    const { label } = props;
    
    return (
         <button 
            type={'submit'}
            className={'transition rounded-3xl py-2 px-6 border-2 border-primary hover:border-secondary bg-primary hover:bg-secondary hover:shadow-lg hover:translate-y-[-2px]'} 
        >
            <span className={'text-white font-semibold'}>{label}</span>
        </button>
    )
}

export default SubmitButton;