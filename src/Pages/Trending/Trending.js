import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleContent from '../../components/SingleContent/SingleContent';
import "../../App.css";
import "./Trending.css";
import Mypagination from '../../components/Pagination/Mypagination';
const Trending = () => {
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([]);
    const fetchTrending=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
      
         setContent(data.results);
    };
    useEffect(()=>{
        fetchTrending();
    },[page])
    return (
        <div>
            <span className="pageTitle">Trending</span>
            <div className="trending">
                {
                    content && content.map((x)=>(
                       <SingleContent key={x.id} 
                       id={x.id} 
                       poster={x.poster_path} 
                       title={x.title || x.name} 
                       date={x.first_air_date || x.release_date }  
                       media_type={x.media_type}
                       vote_average={x.vote_average}
                       />
                    ))
                }
            </div>
           <Mypagination setPage={setPage}/>
        </div>
    )
}

export default Trending
