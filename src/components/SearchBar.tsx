import React from "react";

import "../css/SearchBar.css";

export default function SearchBar({ setQuery }: {
    setQuery: (q: string) => void
}): JSX.Element {
    return(
        <div>
            <input className="form__field" data-testid="search-bar" placeholder="Enter Course" onChange={event => setQuery(event.target.value)}/>
        </div>
    );
}
