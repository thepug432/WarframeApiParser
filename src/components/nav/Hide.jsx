
export default function Hide({title, li}) {
    return(
        <h1 onClick={() => hide(li)}>{title}</h1>
    )
}

function hide(parm) {
    parm[1](!parm[0]);
};