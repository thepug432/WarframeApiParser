import { AnimatePresence, motion } from "framer-motion";

export default function CetusCycleData(props) {
    return(
        <AnimatePresence>
            {props.see &&
                <motion.div
                className="overflow-auto max-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                {props.time
                    ?
                        <p className="mx-3">It is {props.time.state}{props.time.active}, with {props.time.timeLeft} left</p>
                    :
                    <h1>No Cetus Time avalible</h1>
                }
                    </motion.div>
                }
                
            </AnimatePresence>
        );
};