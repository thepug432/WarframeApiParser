import { motion } from "framer-motion"

export default function Holder({children}) {
    return(
        <motion.div
            id="EventsMain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="basis-1/5 text-white rounded-md max-h-screen">
                {children}
        </motion.div>
    )
}