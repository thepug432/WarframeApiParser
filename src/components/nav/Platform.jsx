import { motion } from 'framer-motion';
import {UpdateGetPlatform, savePlatform} from '../../hooks/PlatformContext';

export default function Platform({ children, arg, title}){
    const updateState = UpdateGetPlatform();
    const update = (arg) => {
        savePlatform(arg);
        updateState(arg);
    };
    return(
        <motion.h1 title={title} whileHover={{ scale:1.1, cursor: 'pointer' }} onClick={() => update(arg)} className="m-2 my-auto">
            {children}
        </motion.h1>
    );
};