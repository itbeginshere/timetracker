import { auth } from '../../firebase';
import LogoutSVG from '../svgs/LogoutSVG';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import TaskActionHelper from '../../redux/task/action';

interface ILoginButtonProps {
    className ?: string;
}

const LogoutButton = (props : ILoginButtonProps) => {

    const { className } = props;

    const user = useAppSelector(x => x.userState.user);
    const dispatch = useAppDispatch();

    const logout = async () => {
    
        if (!user) {
            toast.warning('You are already signed out.');
            return;
        }
    
        try {
            await auth.signOut();
            dispatch(TaskActionHelper.setList([]));
            toast.success('Successfully singed out!');
        } catch (ex) {
            toast.error('Error: Something went wrong when signing out.');
        }
    };
    
    return (
        <button 
            className={`group bg-white hover:bg-secondary rounded-full p-1 hover:shadow-lg ${className ?? ''}`}
            onClick={logout} 
        >
            <LogoutSVG width={50} height={50} className={'transition fill-secondary group-hover:fill-white pl-1'}/>
        </button>
    )
}

export default LogoutButton;