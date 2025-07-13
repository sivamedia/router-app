import React, {useState} from 'react';
import './Pagination.css';



const Pagination = ({paging, navPagination}) => {

  const [curPage, setCurPage] = useState(1);

  const prevHandler = ()=> {
    navPagination(paging.prev);
    setCurPage(paging.prev);
  }  
  const nextHandler = ()=> {
    navPagination(paging.next);
    setCurPage(paging.next);
  } 
  const firstHandler = ()=> {
    navPagination(paging.first);
    setCurPage(paging.first);
  }
 const lastHandler = ()=> {
    navPagination(paging.last);
    setCurPage(paging.last);
  }
 const pageNumsHandler = (e)=> {
     console.log(e);
     setCurPage(e)
     navPagination(e);
 } 

 const pageNums = [...Array(8).keys()].map((x) =>  paging.first + x + 1);

  return (
    <>
        <div className='pagination-content'>
            <button onClick={prevHandler}  disabled={!paging.prev}> {'<<'}  </button>
            <button>...</button>
            <button className="num-btns" style={{background: curPage==paging.first ? '#D6EEEE' : '' }} onClick={firstHandler}>{paging.first} </button>
             {
                pageNums.map((e)=>{ return (<button className="num-btns"  style={{background: curPage==e ? '#D6EEEE' : '' }} onClick={()=>{pageNumsHandler(e)}} > {e} </button>)})
             }
            <button className="num-btns"  style={{background: curPage==paging.last ? '#D6EEEE' : '' }} onClick={lastHandler}>{paging.last} </button>
            <button>...</button>
            <button onClick={nextHandler}  disabled={!paging.next}> {'>>'}  </button>

        </div>
        <pre>{JSON.stringify(paging)} current : {curPage} </pre> 
   </>
  )
}

export default Pagination
