import React from "react";

type SortPageProp = {
    name: string;
}

const SortPage = ({name}: SortPageProp) => {
    return (
        <div>
            <h1>Hello, this is the page for {name}</h1>
        </div>
    );
};

export default SortPage;