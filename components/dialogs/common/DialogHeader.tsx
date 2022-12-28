interface IDialogHeaderProps {
    title : string;
}

const DialogHeader = (props : IDialogHeaderProps) => {
    
    const { title } = props;
    
    return (
        <div className={'pb-8'}>
            <span className={'font-bold pb-1 pr-4 border-b-2 border-primary text-2xl'}>{title}</span>
        </div>
   );
}

export default DialogHeader;

