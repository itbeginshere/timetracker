import { useState } from 'react';
import { IBugFormValues } from '../../models/bug/bug';
import BugDialog from '../dialogs/BugDialog';
import BugSVG from '../svgs/BugSVG'
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { useAppSelector } from '../../redux/hooks';

const BugButton = () => {
    
    const user = useAppSelector(x => x.userState.user);

    const [open, setOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    const reportBug = async (values : IBugFormValues) => {
       
        if (!user) {
            toast.error('You must be signed in to log an issue.');
            return;
        }

        try {
            setIsLoading(true);
        
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
            setIsLoading(false);
        }
        
    };
    
    return (
        <>
            <div 
                className={'transition group bg-white hover:bg-secondary rounded-full p-1 hover:shadow-lg hover:translate-y-[-4px] cursor-pointer'}
                onClick={openDialog} 
            >
                <BugSVG width={50} height={50} className={'transition fill-secondary group-hover:fill-white'}/>
            </div>
            {
                open && (
                    <BugDialog 
                        loading={isLoading}
                        onSave={reportBug}
                        onClose={closeDialog}
                    />
                )
            }
        </>
    )
}

export default BugButton;