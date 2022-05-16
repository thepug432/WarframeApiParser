import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Hide({head, li, title}) {
    const [hover, switchHover] = useState(false)
    const hide = (e, parm) => {
        if (parm[0]){
            e.currentTarget.firstChild.firstChild.setAttribute("fill", "gray")
        } else{
            e.currentTarget.firstChild.firstChild.setAttribute("fill", "currentColor")
        }
        parm[1](!parm[0]);
    };

    return(
        <motion.td 
            onHoverStart={() => switchHover(true)}
            onHoverEnd={() => switchHover(true)}
            whileHover={{ scale: 1.2 }} 
            className="p-3" 
            onClick={(e) => hide(e, li)}
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            >
            <h1>{head}</h1>
            <AnimatePresence>
                {hover &&
                    <>
                        <div className="absolute top-8 right-5 border-solid border-slate-900 border-b-8 border-x-transparent border-x-8 border-t-0"></div>
                        <motion.div 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute top-10 right-4 bg-slate-900 text-white p-2 rounded text-sm">
                            <p>{title}</p>
                        </motion.div>
                    </>
                }
            </AnimatePresence>
            <div className="md:hidden text-sm">
                {title}
            </div>
        </motion.td>
    )
}

