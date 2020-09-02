import  React, { useState }  from "react"; 
import Pagination from "react-js-pagination";

const Pagina = (props) => {
    const [currentPage, setCurrentPage]=useState(1)
    const [next, setNext]=useState(1)
    const [previuos, setPreviuos]=useState(0)
    
    const handlePageChange=(pageNumber)=>{
      setCurrentPage( pageNumber);
      setNext(next+1);
      setPreviuos(previuos-1)
      console.log(currentPage);
    }
return(

    
    <Pagination
    hideNavigation
    pageRangeDisplayed={4}
    itemsCountPerPage={5}
    totalItemsCount={20}
    activePage={currentPage}
    onChange={handlePageChange(3)}
/>
    );
}
    export default Pagina;