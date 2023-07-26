import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux/actions";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    console.log(products);
    const formChange= (e) =>{
        setSearch(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if (search.length === 0) return alert("Debes ingresar un producto");
        dispatch(searchProducts(search.toLowerCase()));
        setSearch("");
    }

    return (
        <div className="xl:flex xl:justify-start hidden  xl:items-center gap-1.5 ml-40 ">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    
                    placeholder="Buscar..."
                    className="rounded-md p-3 outline-red-900 w-80"  
                    onChange={formChange}    
                    value={search} 
                ></input>
                <button
                    className="text-white bg-gray-500 rounded-md p-3 ml-2 hover:bg-gray-300 hover:text-gray-800 "
                    type="submit"
                    >
                <i className="fa-solid fa-magnifying-glass p-0.5"></i>
                </button>
            </form>
        </div>
    )
}

export default SearchBar