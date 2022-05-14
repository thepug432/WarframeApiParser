

export default function News(props) {
    if (props.data) {
        const newsData = props.data
        return(
            <div className="basis-1/5 overflow-y-scroll max-h-screen">
                <h1 className="text-2xl text-center">News</h1>
            {newsData.map((data) => {
                    var d = new Date(data.date);
                    return(
                        <div className="bg-slate-400 border-y border-gray-900 border-solid">
                            <a href={data.link} className="text-lg">{data.message}</a>
                            <p>Posted {data.eta}, on the {d.toUTCString()}</p>
                        </div>
                    )
                })
            }
            </div>
        )
    } else{
        return(
            <h1>Loading...</h1>
        )
    }
    
}