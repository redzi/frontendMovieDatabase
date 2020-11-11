import React, {useEffect, useState} from "react";
import GeneralResult from "./GeneralResult";
import PageChanger from "./PageChanger";
import "./css/PaginatedResults.css";
import connect, {Data} from "./integration/RSocketClinet"


function PaginatedGeneralResults (props: any) {

    const [result, setResult] = useState<Data>({
        infos: [],
        totalResultsNumber: 0,
        currentPageResultNumber: 0
    })

    useEffect((): void => {
        connect()
            .then(data => setResult(data))
    }, [])

    function prepareGeneralPaginatedResults(): JSX.Element[] {
        return result
            .infos
            .map(r => <GeneralResult key={r.imdbID} title={r.title} year={r.year} poster={r.poster} imdbID={r.imdbID} />)
    }

    return (
        <div className="paginated-results">
            {prepareGeneralPaginatedResults()}
            <PageChanger allResultCount={result.totalResultsNumber} currentPageResultCount={result.currentPageResultNumber} onChange={() => true}/>
        </div>
    );
}

export default PaginatedGeneralResults