import React from "react";
import generalPaginatedResults from "./generalPaginatedResults";
import GeneralResult from "./GeneralResult";
import PageChanger from "./PageChanger";
import "./css/PaginatedResults.css";


function PaginatedGeneralResults (props) {

    function getMockedGeneralPatinatedResults() {
        return generalPaginatedResults
            .infos
            .map(r => <GeneralResult key={r.imdbID} title={r.title} year={r.year} poster={r.poster} imdbID={r.imdbID} />)
    }

    return (
        <div className="paginated-results">
            {getMockedGeneralPatinatedResults()}
            <PageChanger/>
        </div>
    );
}

export default PaginatedGeneralResults