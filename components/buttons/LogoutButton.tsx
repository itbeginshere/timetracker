import { auth } from '../../firebase';
import LogoutSVG from '../svgs/LogoutSVG';
import { toast } from 'react-toastify';

const LogoutButton = () => {

    const logout = async () => {
        try {
            await auth.signOut();
            toast.success('Successfully singed out!');
        } catch (ex) {
            toast.error('Error: Something went wrong when signing out.');
        }
    };
    
    return (
        <div onClick={logout} className={'transition group bg-white hover:bg-secondary rounded-full p-1 hover:shadow-lg hover:translate-y-[-4px] cursor-pointer'}>
            <LogoutSVG width={50} height={50} className={'transition fill-secondary group-hover:fill-white pl-1'}/>
        </div>
    )
}

export default LogoutButton;