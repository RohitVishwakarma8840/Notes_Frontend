import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import {useNavigate} from "react-router-dom"
import SearchBar from '../SearchBar/SearchBar';

function Navbar({userInfo,onSearchNote,handleClearSearch}) {

  const [searchQuery,SetSearchQuery] = useState("");

  const navigate = useNavigate();
 
  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  }

  const handleSearch = () =>{
    if(searchQuery){
      onSearchNote(searchQuery)
    }

  }

  const onClearSearch = () => {
    SetSearchQuery("");
    handleClearSearch()
  };


  return (
    <div className="bg-white flex items-center justify-between drop-shadow px-6 py-2">
        <h3 className="text-xl font-medium text-black py-2 ">Notes</h3>

        <SearchBar value = {searchQuery}
          onChange={({target}) => {
          SetSearchQuery(target.value)}}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />

       <ProfileInfo userInfo ={userInfo} onLogout={onLogout}/>

       

    </div>
  )
}

export default Navbar