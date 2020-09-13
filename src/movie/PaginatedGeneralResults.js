import React, {useEffect, useState} from "react";
import GeneralResult from "./GeneralResult";
import PageChanger from "./PageChanger";
import "./css/PaginatedResults.css";
import connect from "./integration/RSocketClinet"


function PaginatedGeneralResults (props) {

    const [result, setResult] = useState({
        infos: []
    })

    useEffect(() => {
        connect()
            .then(data => setResult(data))
    }, [])

    function prepareGeneralPaginatedResults() {
        return result
            .infos
            .map(r => <GeneralResult key={r.imdbID} title={r.title} year={r.year} poster={r.poster} imdbID={r.imdbID} />)
    }

    return (
        <div className="paginated-results">
            {prepareGeneralPaginatedResults()}
            <PageChanger/>
        </div>
    );
}

export default PaginatedGeneralResults