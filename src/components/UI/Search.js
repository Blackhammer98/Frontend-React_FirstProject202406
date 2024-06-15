
import { useSearchParams } from "react-router-dom";

const SearchBox = () => {
    const [searchParams , setSearchParams] = useSearchParams()
   ;
    const query = searchParams.get("query")||""

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchParams({query :e.target.value})
           
        }
        


        
    

    // const handleKeyPress = (e) => {
        
    //     if (e.key === 'Enter') {
    //         handleSearch();
    //     }
        
    // };

    return (
        <>
            <input
                type="text"
                name="search"
                id="search" x3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                placeholder="Search"
                value={query}
                onChange={handleSearch}
                
            />
            <button className="btn btn-sm" onClick={handleSearch}>
                🔍
            </button>
        </>
    );
};

export default SearchBox;
