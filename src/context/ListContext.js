import React from "react";


const ListContext = React.createContext({
    mpList: [],
    onAddCandidate : () => {},
})
export default ListContext