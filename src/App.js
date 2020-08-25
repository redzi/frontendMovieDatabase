import React from 'react';

//TODO remove fetching from file
import generalPaginatedResults from "./movie/generalPaginatedResults";
import PaginatedResult from "./movie/PaginatedResult";

function App() {

    function getMockedGeneralPatinatedResults() {
        return generalPaginatedResults
            .infos
            .map(r => <PaginatedResult key={r.imdbID} title={r.title} year={r.year} poster={r.poster} imdbID={r.imdbID}/>)
    }

    return (
        <div className="main-container">
            {getMockedGeneralPatinatedResults()}
        </div>
    );
}

export default App;
