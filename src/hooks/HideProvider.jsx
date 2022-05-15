import { createContext, useContext, useState } from "react";

const GetCycle = createContext();
const GetEvents = createContext();
const GetNews = createContext();
const GetArb = createContext();
const GetAlerts = createContext();
const GetWave = createContext();
const GetSortie = createContext();
const GetInvasions = createContext();
const GetFissures = createContext();
const GetSales = createContext();

export const UseSortie = () => {
    return useContext(GetSortie);
};

export const UseInvasions = () => {
    return useContext(GetInvasions);
};

export const UseFissures = () => {
    return useContext(GetFissures);
};

export const UseSales = () => {
    return useContext(GetSales);
};

export const UseGetCycle = () => {
    return useContext(GetCycle);
};

export const UseWave = () => {
    return useContext(GetWave)
};

export const UseGetEvents = () => {
    return useContext(GetEvents);
};

export const UseNews = () => {
    return useContext(GetNews);
};

export const UseGetArb = () => {
    return useContext(GetArb);
};

export const UseAlerts = () => {
    return useContext(GetAlerts);
};

export default function HideProvider({children}){
    const [seeCycle, changeSeeCycle] = useState(true);
    const [seeEvents, changeSeeEvents] = useState(true);
    const [seeNews, changeSeeNews] = useState(true);
    const [seeArb, changeSeeArb] = useState(true);
    const [seeAlerts, changeSeeAlerts] = useState(true);
    const [getWave, changeGetWave] = useState(true);
    const [getSortie, changeGetSortie] = useState(true);
    const [getInvasions, changeGetInvasions] = useState(true);
    const [getFissures, changeGetFissures] = useState(true);
    const [getSales, changeGetSales] = useState(true);

    return(
        <GetCycle.Provider value={[seeCycle, changeSeeCycle]}>
        <GetEvents.Provider value={[seeEvents, changeSeeEvents]}>
        <GetNews.Provider value={[seeNews, changeSeeNews]}>
        <GetArb.Provider value={[seeArb, changeSeeArb]}>
        <GetAlerts.Provider value={[seeAlerts, changeSeeAlerts]}>
        <GetWave.Provider value={[getWave, changeGetWave]}>
            <GetSortie.Provider value={[getSortie, changeGetSortie]}>               
                <GetInvasions.Provider value={[getInvasions, changeGetInvasions]}>             
                    <GetFissures.Provider value={[getFissures, changeGetFissures]}>       
                        <GetSales.Provider value={[getSales, changeGetSales]}>
                            {children}
                        </GetSales.Provider>
                    </GetFissures.Provider>   
                </GetInvasions.Provider>   
            </GetSortie.Provider> 
        </GetWave.Provider>
        </GetAlerts.Provider>
        </GetArb.Provider>  
        </GetNews.Provider>
        </GetEvents.Provider>
        </GetCycle.Provider>
    );
};