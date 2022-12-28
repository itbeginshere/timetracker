import BugButton from '../buttons/BugButton'
import LogoutButton from '../buttons/LogoutButton';
import ProfileButton from '../buttons/ProfileButton'

const Controls = () => {
    return (
        <div className={'absolute bottom-0 left-[10%] xl:left-[20%] flex flex-row gap-4 pb-4'}>
            <BugButton />
            <ProfileButton />
            <LogoutButton />
        </div>
    );
}

export default Controls;