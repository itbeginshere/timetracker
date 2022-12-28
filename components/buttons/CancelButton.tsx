interface ICancelButtonProps {
    label : string;
    onClick : () => void;
}

const CancelButton = (props : ICancelButtonProps) => {
    
    const { label } = props;
    const { onClick } = props;
    
    return (
         <button 
            className={'transition rounded-3xl py-2 px-6 border-2 border-gray-500 hover:shadow-lg hover:translate-y-[-2px]'} 
            onClick={onClick}
        >
            <span className={'text-grey-500 font-semibold'}>{label}</span>
        </button>
    )
}

export default CancelButton;