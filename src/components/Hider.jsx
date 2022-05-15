import { AnimatePresence, motion } from "framer-motion";

export default function Hider({view, children}) {
    return(
        <AnimatePresence>
            {view &&
                <motion.div
                initial={{ opacity: 0, scale:0.4 }}
                animate={{ opacity: 1, scale:1 }}
                exit={{ opacity: 0, scale:0.4  }}
                >   
                    {children}
                </motion.div>
            }
        </AnimatePresence>
    )
}