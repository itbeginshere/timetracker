import BugButton from '../buttons/BugButton'
import LogoutButton from '../buttons/LogoutButton';
import NewTaskButton from '../buttons/NewTaskButton';
import ProfileButton from '../buttons/ProfileButton'

const Controls = () => {
    return (
        <div className={'flex flex-row gap-4 pb-4 justify-between'} style={{ flex: '0 0 auto' }}>
            <div className={'flex flex-row gap-4'}>
                <BugButton />
                <ProfileButton />
                <LogoutButton />
            </div>
            <div className={'flex flex-row pl-4'}>
                   <NewTaskButton />
            </div>
        </div>
    );
}

export default Controls;