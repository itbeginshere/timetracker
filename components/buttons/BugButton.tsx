import { IBugFormValues } from '../../models/bug/bug';
import BugDialog from '../dialogs/BugDialog';
import BugSVG from '../svgs/BugSVG'
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { useAppSelector } from '../../redux/hooks';
import useToggle from '../../hooks/useToggle';

interface IBugButtonProps {
    className ?: string;
}

const BugButton = (props : IBugButtonProps) => {
    
    const { className } = props;

    const user = useAppSelector(x => x.userState.user);

    const [open, openDialog, closeDialog] = useToggle();
    const [loading, startLoding, endLoading] = useToggle();

    const reportBug = async (values : IBugFormValues) => {
       
        if (!user) {
            toast.error('You must be signed in to log an issue.');
            return;
        }

        try {
            startLoding();
        
            emailjs.init(process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY ?? '');

            const res = await emailjs.send(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? '', process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ?? '', {
                from_name: values.issue,
                to_name: "Matthew",
                message: values.description,
                reply_to: user.email,
            });

            if (res.status === 200) {
                closeDialog();
                toast.success('Your issue has been logged.');
            }
        } catch (ex) {
            toast.error('Error: Could not send the report.');
        } finally {
            endLoading();
        }
        
    };
    
    return (
        <>
            <button 
                className={`group bg-white hover:bg-secondary rounded-full p-1 hover:shadow-lg ${className ?? ''}`}
                onClick={openDialog} 
            >
                <BugSVG width={50} height={50} className={'transition fill-secondary group-hover:fill-white'}/>
            </button>
            {
                open && (
                    <BugDialog 
                        loading={loading}
                        onSave={reportBug}
                        onClose={closeDialog}
                    />
                )
            }
        </>
    )
}

export default BugButton;