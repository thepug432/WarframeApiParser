import { useEffect, useState } from "react";
import News from "./News";
import {GetPlatform} from '../hooks/PlatformContext'

export default function Index() {
    const [data, changeData] = useState([]);
    const platform = GetPlatform()

    useEffect(() => {
        fetch(`https://api.warframestat.us/${platform}`)
        .then(response => response.json())
        .then(response => changeData(response))
    }, [])
    

    return(
        <div className="flex">
            <News data={data.news} />
        </div>
    );
};