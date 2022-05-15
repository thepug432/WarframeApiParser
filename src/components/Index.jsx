import { useEffect, useState } from "react";
import {GetPlatform} from '../hooks/PlatformContext';
import News from "./news/News";
import Events from './events/Events';
import Alert from './alert/Alert';
import Fissures from './Fissures/Fissures';
import Sortie from './sortie/Sortie'
import FlashSale from './flashSales/FlashSales'
import Invasions from './invasions/Invasions'
import Cycle from './cycle/Cycle'
import NightWave from './NightWave/NightWave'
import Arb from './arb'
import Nav from './nav'

export default function Index() {
    const [data, changeData] = useState([]);
    const platform = GetPlatform();
    console.log(platform);
    useEffect(() => {
        fetch(`https://api.warframestat.us/${platform}`)
        .then(response => response.json())
        .then(response => changeData(response))
    }, [platform]);
    

    return(
        <>
            <Nav />
            <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-1 text-white">
                <div className="flex flex-col">
                    <News data={data.news} />
                </div>

                <div className="flex flex-col">
                    <Events data={data.events} />

                    <Cycle data={data.earthCycle} title={'Earth Cycle'}/>
                    <Cycle data={data.cetusCycle} title={'Cetus Cycle'}/>
                    <Cycle data={data.vallisCycle} title={'Vallis Cycle'}/>
                    <Cycle data={data.cambionCycle} title={'Cambion Cycle'}/>

                    <Arb data={data.arbitration} />
                </div>

                <div className="flex flex-col">
                    <Alert data={data.alerts} />
                    <NightWave data={data.nightwave} />
                </div>
                <div className="flex flex-col">
                    <Sortie data={data.sortie} />
                    <Invasions data={data.invasions} />
                </div>
                <div className="flex flex-col">
                    <Fissures data={data.fissures} />
                    <FlashSale data={data.flashSales} />
                </div>
            </div>
        </>
    );
};