import { useState } from 'react';
import { IBugFormValues } from '../../models/bug/bug';
import BugDialog from '../dialogs/BugDialog';
import BugSVG from '../svgs/BugSVG'
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const BugButton = () => {
    
    const [open, setOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    const reportBug = async (values : IBugFormValues) => {
       
        try {
            setIsLoading(true);
        
            emailjs.init(process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY ?? '');

            const res = await emailjs.send(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? '', process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ?? '', {
                from_name: values.subject,
                to_name: "Matthew",
                message: values.message,
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
            <div onClick={openDialog} className={'transition group bg-white hover:bg-secondary rounded-full p-1 hover:shadow-lg hover:translate-y-[-4px] cursor-pointer'}>
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