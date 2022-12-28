import BugButton from '../buttons/BugButton'
import ProfileButton from '../buttons/ProfileButton'

const Controls = () => {
    return (
        <div className={'absolute bottom-0 left-[10%] xl:left-[20%] flex flex-col gap-4 pb-4'}>
            <BugButton />
            <ProfileButton />
        </div>
    );
}

export default Controls;