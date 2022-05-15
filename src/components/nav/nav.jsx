import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaPlaystation, FaXbox } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si'
import Platform from './Platform'
import Hide from './Hide'
import {UseGetCycle , UseNews, UseGetEvents, UseGetArb, UseAlerts, UseWave, UseSortie, UseInvasions, UseFissures, UseSales} from '../../hooks/HideProvider'
import { GiCycle, GiStoneBust } from 'react-icons/gi'
import { BsNewspaper } from 'react-icons/bs'
import { MdEmojiEvents } from 'react-icons/md'
import { GoAlert } from 'react-icons/go'
import { IoRadio } from 'react-icons/io5'
import { GiShardSword, GiStakesFence } from 'react-icons/gi'
import { SiCodemagic } from 'react-icons/si'
import { FaStore } from 'react-icons/fa'

export default function Nav() {
    return(
        <nav className="flex bg-slate-800 shadow-2xl text-white align-middle mb-3">
            <Platform arg={'pc'} title={'PC'}><HiOutlineDesktopComputer size={20}/></Platform>
            <Platform arg={'ps4'} title={'PlayStation 4'}><FaPlaystation size={20}/></Platform>
            <Platform arg={'xb1'} title={'Xbox 1'}><FaXbox size={20}/></Platform>
            <Platform arg={'swi'} title={'Nintendo Switch'}><SiNintendoswitch size={20}/></Platform>

            <Hide title={<GiCycle size={20}/>} li={UseGetCycle()}/>
            <Hide title={<BsNewspaper size={20}/>} li={UseNews()}/>
            <Hide title={<MdEmojiEvents size={20}/>} li={UseGetEvents()}/>
            <Hide title={<GiStoneBust size={20}/>} li={UseGetArb()}/>
            <Hide title={<GoAlert size={20}/>} li={UseAlerts()}/>
            <Hide title={<IoRadio size={20}/>} li={UseWave()}/>
            <Hide title={<GiShardSword size={20}/>} li={UseSortie()}/>
            <Hide title={<GiStakesFence size={20}/>} li={UseInvasions()}/>
            <Hide title={<SiCodemagic size={20}/>} li={UseFissures()} />
            <Hide title={<FaStore size={20}/>} li={UseSales()} />
        </nav>
    );

};
