import { useState } from 'react';
import BugButton from '../buttons/BugButton';
import LogoutButton from '../buttons/LogoutButton';
import NewTaskButton from '../buttons/NewTaskButton';
import ProfileButton from '../buttons/ProfileButton';
import StatsButton from '../buttons/StatsButton';
import MinusSVG from '../svgs/MinusSVG';
import PlusSVG from '../svgs/PlusSVG';

const SpeedDial = () => {
    
    const [open, setOpen] = useState<boolean>(false);
    
    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
      <div className={'absolute bottom-4 right-[10%] xl:right-[20%]'}>
        <StatsButton className={`absolute transition hover:translate-y-[-354px] ${open ? 'translate-y-[-350px] opacity-100' : 'translate-y-[1000px] opacity-0'} right-0`} />
        <BugButton className={`absolute transition hover:translate-y-[-284px] ${open ? 'translate-y-[-280px] opacity-100' : 'translate-y-[1000px] opacity-0'} right-0`} />
        <NewTaskButton className={`absolute transition hover:translate-y-[-214px] ${open ? 'translate-y-[-210px] opacity-100' : 'translate-y-[1000px] opacity-0'} right-0`} />
        <ProfileButton className={`absolute transition hover:translate-y-[-144px] ${open ? 'translate-y-[-140px] opacity-100' : 'translate-y-[1000px] opacity-0'} right-0`} />
        <LogoutButton className={`absolute transition hover:translate-y-[-74px] ${open ? 'translate-y-[-70px] opacity-100' : 'translate-y-[1000px] opacity-0'} right-0`} />
        <button 
            className={'rounded-full p-2 bg-secondary hover:shadow-lg'}
            onClick={toggleOpen}
        >
            {
                open ? 
                    <MinusSVG className={'fill-white'} /> :
                    <PlusSVG className={'fill-white'} />
            }
        </button>
      </div>
    );
}

export default SpeedDial;