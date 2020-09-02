import  React, { useState }  from "react"; 
import Pagination from "react-js-pagination";

const Pagina = () => {
    const [pagination, setPagination]=useState(5)
    
    function handlePageChange(pageNumber){
    
      setPagination( pageNumber);
      console.log(pagination);
    }
return(

    
    <Pagination
    hideNavigation
    pageRangeDisplayed={10}
    // activePage={props.pagination}
    itemsCountPerPage={6}
    totalItemsCount={20}
    onChange={handlePageChange}
/>
    );
}
    export default Pagina;