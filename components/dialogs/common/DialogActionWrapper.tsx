interface IDialogActionWrapper {
    children : React.ReactNode;
}

const DialogActionWrapper = (props : IDialogActionWrapper) => {
    
    const { children } = props;
    
    return (
         <div className={'flex flex-row justify-end items-center gap-5'}>
            {children}
        </div>
    )
}

export default DialogActionWrapper;