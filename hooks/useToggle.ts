import { useState } from 'react';

type UseToggleType = [boolean, () => void, () => void, () => void];

const useToggle = () : UseToggleType => {

    const [toggle, setToggle] = useState<boolean>(false);

    const toggleOn = () : void => {
        setToggle(true);
    };

    const toggleOff = () : void => {
        setToggle(false);
    };

    const toggleOnAndOff = () : void => {
        setToggle(!toggle);
    };

    return [toggle, toggleOn, toggleOff, toggleOnAndOff]
}

export default useToggle;