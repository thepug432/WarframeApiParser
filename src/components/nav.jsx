import {UpdateGetPlatform} from '../hooks/PlatformContext'
import { motion } from 'framer-motion';

export default function Nav() {
    const update = UpdateGetPlatform()
    return(
        <nav className="flex bg-slate-900 text-white align-middle">
            <motion.h1 whileHover={{ scale:1.1, cursor: 'pointer' }} onClick={() => update('pc')} className="p-2">PC</motion.h1>
            <motion.h1 whileHover={{ scale:1.1, cursor: 'pointer' }} onClick={() => update('ps4')} className="p-2">PS4</motion.h1>
            <motion.h1 whileHover={{ scale:1.1, cursor: 'pointer' }} onClick={() => update('xb1')} className="p-2">XBOX</motion.h1>
            <motion.h1 whileHover={{ scale:1.1, cursor: 'pointer' }} onClick={() => update('swi')} className="p-2">SWITCH</motion.h1>
        </nav>
    );

};