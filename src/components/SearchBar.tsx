import React from "react";

export default function SearchBar({ setQuery }: {
    setQuery: (q: string) => void
}): JSX.Element {
    return(
        <div>
            <input placeholder="Search For Course" onChange={event => setQuery(event.target.value)}/>
        </div>
    );
}
