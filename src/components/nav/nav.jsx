import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaPlaystation, FaXbox } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si'
import Platform from './Platform'

export default function Nav(props) {
    return(
        <nav className="flex bg-slate-800 shadow-2xl text-white align-middle mb-3">
            <Platform arg={'pc'} title={'PC'}><HiOutlineDesktopComputer size={20}/></Platform>
            <Platform arg={'ps4'} title={'PlayStation 4'}><FaPlaystation size={20}/></Platform>
            <Platform arg={'xb1'} title={'Xbox 1'}><FaXbox size={20}/></Platform>
            <Platform arg={'swi'} title={'Nintendo Switch'}><SiNintendoswitch size={20}/></Platform>

        </nav>
    );

};
