import { motion } from "framer-motion";

export default function Hide({head, li, title}) {

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
            whileHover={{ scale: 1.2 }} 
            title={title} 
            className="p-3" 
            onClick={(e) => hide(e, li)}
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            >
            <h1>{head}</h1>
        </motion.td>
    )
}

