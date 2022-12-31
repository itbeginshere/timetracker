import BugButton from '../buttons/BugButton'
import LogoutButton from '../buttons/LogoutButton';
import NewTaskButton from '../buttons/NewTaskButton';
import ProfileButton from '../buttons/ProfileButton'
import StatsButton from '../buttons/StatsButton';

const Controls = () => {
    return (
        <div className={'flex flex-row gap-4 pb-4 justify-between flex-wrap	'}>
            <div className={'flex flex-row gap-4'}>
                <BugButton />
                <ProfileButton />
                <LogoutButton />
                <StatsButton />
            </div>
            <div className={'flex flex-row'}>
                <NewTaskButton />
            </div>
        </div>
    );
}

export default Controls;