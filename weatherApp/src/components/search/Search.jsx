import { useState } from "react";
import {AsyncPaginate} from "react-select-async-paginate";
import { GEO_API_URL,geoApiOptions } from "../../api";

const Search = ({onSearchChange}) =>{

    const [search, setSearch] = useState(null)
   
    const loadOptions = async(inputValue) =>{
        try{
            console.log(geoApiOptions)
            const response = await fetch(`${GEO_API_URL}/cities?minpopulation=100000&namePrefix=${inputValue}`, geoApiOptions)
            const result = await response.json()

            return {
                            options : result.data.map((city)=>{
                                return{
                                value:`${city.latitude} ${city.longitude}`,
                                label: `${city.name}, ${city.countryCode}`,
                                };
            
                            })
            
                        }
                    
          }catch{console.error();}

    }

    // const loadOptions = (inputValue) =>{
    //     return fetch(`${GEO_API_URL}/cities'?minpopulation=100000&namePrefix=${inputValue}`, geoApiOptions)
    //     .then((response) => response.json())
    //     .then((response) => {
    //         return {
    //             options : response.data.map((city)=>{
    //                 return{
    //                 value:`${city.latitude} ${city.longitude}`,
    //                 label: `${city.name}, ${city.countryCode}`,
    //                 };

    //             })

    //         }
    //     })
    //     .catch(err => console.log(err))

    // }
    const handleOnChange = (searchData) =>{
        setSearch(searchData)
        onSearchChange(searchData)
    }
    
    return (
        <AsyncPaginate
        placeholder = "Search for city"
        debounceTimeout={1000}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        />
    )
}

export default Search;
