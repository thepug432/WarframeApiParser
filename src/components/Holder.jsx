import { motion } from "framer-motion"

export default function Holder({children}) {
    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="basis-1/4 text-white rounded-md max-h-screen mb-9">
                {children}
        </motion.div>
    )
}