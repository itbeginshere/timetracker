import LoadingIndicator from '../../common/LoadingIndicator';
import CrossSVG from '../../svgs/CrossSVG';

interface IDialogWrapper {
    open : boolean;
    loading : boolean;
    children : React.ReactNode;
    onClose : () => void;
}

const DialogWrapper = (props : IDialogWrapper) => {
    
    const { open, loading, children } = props;
    const { onClose } = props;
    
    return (
        <>
           {
                open && (
                    <div className={'fixed h-full w-full bg-black opacity-20 top-0 left-0 z-10'} />
                )
           }
            <dialog 
                open={open}
                className={'fixed rounded-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-l-4 border-primary w-[80%] max-w-[550px] z-20 m-0'}
            >
                {children}
                {
                    loading && (
                      <LoadingIndicator />
                    )
                }
                <div className={`absolute -right-3 -top-3 p-2 bg-gray-800 rounded-full ${loading ? '' : 'cursor-pointer'}`} onClick={loading ? undefined : onClose}>
                    <CrossSVG className={'fill-white'}/>
                </div>
                 {
                    loading && (
                        <div className={`absolute -right-3 -top-3 p-2 bg-white opacity-60 rounded-full w-[30px] h-[30px]`} />
                    )
                }
            </dialog>
        </>
         
    )
}

export default DialogWrapper;