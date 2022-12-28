import CrossSVG from '../../svgs/CrossSVG';

interface IDialogWrapper {
    open : boolean;
    children : React.ReactNode;
    onClose : () => void;
}

const DialogWrapper = (props : IDialogWrapper) => {
    
    const { open, children } = props;
    const { onClose } = props;
    
    return (
        <>
           {
                open && (
                    <div className={'fixed h-full w-full bg-black opacity-20 top-0 left-0'} />
                )
           }
            <dialog 
                open={open}
                className={'backdrop:bg-primary fixed rounded-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-l-4 border-primary w-[80%] max-w-[550px]'}
            >
                <div className={'absolute -right-3 -top-3 p-2 bg-gray-800 rounded-full cursor-pointer'} onClick={onClose}>
                    <CrossSVG className={'fill-white'}/>
                </div>
                {children}
            </dialog>
        </>
         
    )
}

export default DialogWrapper;