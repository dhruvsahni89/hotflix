import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Mypagination from '../../components/Pagination/Mypagination';
import SingleContent from '../../components/SingleContent/SingleContent';

const Series = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const fetchMovies=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`)
    setContent(data.results);
  setNumOfPages(data.total_pages);
    }
    useEffect(() => {
       fetchMovies();
    }, [page]);
    return (
        <div>
             <span classname='pageTitle'>Series</span>
             <div className="trending">
                {
                    content && content.map((x)=>(
                       <SingleContent key={x.id} 
                       id={x.id} 
                       poster={x.poster_path} 
                       title={x.title || x.name} 
                       date={x.first_air_date || x.release_date }  
                       media_type="tv"
                       vote_average={x.vote_average}
                       />
                    ))
                }
            </div>
            {numOfPages>1 && <Mypagination setPage={setPage} numOfPages={numOfPages} /> }
        </div>
    )
}

export default Series
