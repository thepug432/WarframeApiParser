import Platform from './Platform'
import Hide from './Hide'
import { motion, AnimatePresence } from 'framer-motion'
import {UseGetCycle , UseNews, UseGetEvents, UseGetArb, UseAlerts, UseWave, UseSortie, UseInvasions, UseFissures, UseSales} from '../../hooks/HideProvider'
import { GiCycle, GiStoneBust } from 'react-icons/gi'
import { BsNewspaper } from 'react-icons/bs'
import { MdEmojiEvents } from 'react-icons/md'
import { GoAlert } from 'react-icons/go'
import { IoRadio } from 'react-icons/io5'
import { GiShardSword, GiStakesFence } from 'react-icons/gi'
import { SiCodemagic } from 'react-icons/si'
import { FaStore, FaPlaystation, FaXbox } from 'react-icons/fa'
import { FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { SiNintendoswitch } from 'react-icons/si'
import { useState } from 'react'

export default function Nav() {
    const [seeTable, changeSeeTable] = useState(false);
    return(
        <nav className="flex bg-slate-800 shadow-2xl text-white align-middle mb-3">
            <Platform arg={'pc'} title={'PC'}><HiOutlineDesktopComputer size={20}/></Platform>
            <Platform arg={'ps4'} title={'PlayStation 4'}><FaPlaystation size={20}/></Platform>
            <Platform arg={'xb1'} title={'Xbox 1'}><FaXbox size={20}/></Platform>
            <Platform arg={'swi'} title={'Nintendo Switch'}><SiNintendoswitch size={20}/></Platform>

            
            
            
            

            <div className="ml-auto mr-4 p-2 relative">
                <motion.div className="ml-auto mr-4 p-2 relative" whileHover={{ scale:1.2 }} transition={{ duration:.5 }} onClick={() => {changeSeeTable(!seeTable)}}>
                    <FiMoreHorizontal size={30}/>
                </motion.div>
                
                <AnimatePresence>
                    {seeTable &&
                        <motion.table className='absolute right-4 top-15 bg-slate-800' 
                        initial={{ opacity: 0, y:-15 }} 
                        animate={{ opacity: 1, y:0 }}
                        exit={{ opacity: 0, y:-15  }}>
                        <tbody>
                            <tr>
                                <Hide head={<GiCycle size={20}/>} li={UseGetCycle()} title={'Hide Cycles'}/>
                                <Hide head={<BsNewspaper size={20}/>} li={UseNews()} title={'Hide News'}/>
                                <Hide head={<MdEmojiEvents size={20}/>} li={UseGetEvents()} title={'Hide Events'}/>
                            </tr>
                            <tr>
                                <Hide head={<GiStoneBust size={20}/>} li={UseGetArb()} title={'Hide Arbitration'}/>
                                <Hide head={<GoAlert size={20}/>} li={UseAlerts()} title={'Hide Alerts'}/>
                                <Hide head={<IoRadio size={20}/>} li={UseWave()} title={'Hide Nightwave'}/>
                            </tr>
                            <tr>
                                <Hide head={<GiShardSword size={20}/>} li={UseSortie()} title={'Hide Sorties'}/>
                                <Hide head={<GiStakesFence size={20}/>} li={UseInvasions()} title={'Hide Invasions'}/>
                                <Hide head={<SiCodemagic size={20}/>} li={UseFissures()} title={'Hide Fissures'}/>
                            </tr>
                            <tr>
                                <Hide head={<FaStore size={20}/>} li={UseSales()} title={'Hide Sales'}/>
                            </tr>
                        </tbody>
                        </motion.table>
                    }
                </AnimatePresence>
                
            </div>
        </nav>
    );

};
