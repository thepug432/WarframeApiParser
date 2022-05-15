import { motion } from "framer-motion";

export default function Hide({title, li}) {

    const hide = (e, parm) => {
        if (parm[0]){
            e.currentTarget.firstChild.setAttribute("fill", "gray")
        } else{
            e.currentTarget.firstChild.setAttribute("fill", "currentColor")
        }
        parm[1](!parm[0]);
    };

    return(
        <motion.td whileHover={{ scale: 1.1 }} className="mx-2 p-3"><h1 onClick={(e) => hide(e, li)}>{title}</h1></motion.td>
    )
}

