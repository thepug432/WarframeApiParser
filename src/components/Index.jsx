import { useEffect, useState } from "react";
import {GetPlatform} from '../hooks/PlatformContext';
import News from "./news/News";
import Events from './events/Events';
import Alert from './alert/Alert';
import Fissures from './Fissures/Fissures';
import Sortie from './sortie/Sortie'
import FlashSale from './flashSales/FlashSales'
import Invasions from './invasions/Invasions'

export default function Index() {
    const [data, changeData] = useState([]);
    const platform = GetPlatform();

    useEffect(() => {
        fetch(`https://api.warframestat.us/${platform}`)
        .then(response => response.json())
        .then(response => changeData(response))
    }, []);
    

    return(
        <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-1">
        <div className="flex flex-col">
            <News data={data.news} />
            <Invasions data={data.invasions} />
        </div>
        <div className="flex flex-col">
            <Events data={data.events} />
        </div>
        <div className="flex flex-col">
            <Alert data={data.alerts} />
        </div>
        <div className="flex flex-col">
            <Sortie data={data.sortie} />
        </div>
        <div className="flex flex-col">
            <Fissures data={data.fissures} />
        </div>
            
            
            
            
            {/* <FlashSale data={data.flashSales} /> */}
            
        </div>
    );
};