import { motion } from 'framer-motion';
import {UpdateGetPlatform} from '../../hooks/PlatformContext'

export default function Platform({ children, arg, title}){
    const update = UpdateGetPlatform();
    return(
        <motion.h1 title={title} whileHover={{ scale:1.1, cursor: 'pointer' }} onClick={() => update(arg)} className="m-2">
            {children}
        </motion.h1>
    );
};