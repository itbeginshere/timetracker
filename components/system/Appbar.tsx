import LogoSVG from '../svgs/LogoSVG';
import { version } from '../../package.json';

const Appbar = () => {
    return (
        <header className={'flex flex-row items-center justify-center w-full'}>
            <div className={'flex flex-row items-center bg-primary py-4 px-7 gap-2 rounded-b-3xl shadow-md'}>
                <LogoSVG fill={'white'}/>
                <span className={'text-white text-2xl font-semibold'}>TimeTracker v{version}</span>
            </div>
        </header>
    );
}

export default Appbar;