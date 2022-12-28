interface IDialogWrapper {
    open : boolean;
    children : React.ReactNode;
}

const DialogWrapper = (props : IDialogWrapper) => {
    
    const { open, children } = props;
    
    return (
        <>
           {
                open && (
                    <div className={'fixed h-full w-full bg-black opacity-20 top-0 left-0'} />
                )
           }
            <dialog 
                open={open}
                className={'backdrop:bg-primary fixed rounded-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-l-4 border-primary w-[80%]'}
            >
                {children}
            </dialog>
        </>
         
    )
}

export default DialogWrapper;