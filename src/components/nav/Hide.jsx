
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
        <h1 className="mr-2" onClick={(e) => hide(e, li)}>{title}</h1>
    )
}

