import React from 'react'

function RecipeSearchBar ({query, setQuery, handleSearch, loading}) {
  return (

     <div> 
       
<form onSubmit={handleSearch}>
     <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}  placeholder="Search"className="search-bar" />
     <button type="submit" disabled={loading}>
      {loading ? 'Searching...' : 'Search'}
    </button>
  </form>
  </div>
  )
}

export default RecipeSearchBar