import axios from "axios";
import MovieCart from "../MovieCart/MovieCart";
import "./Home.css"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function Home() {
   const [filteredMovies, setFilteredMovies] = useState([]);
   const [movies, setMovies] = useState([]);
   const lang =useSelector((state)=>state.langSlicer.language)
 const translation =useSelector((state)=>state.langSlicer.translation)

   const getMovies=(lang)=>{
      console.log(lang);
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=592d5558fe91383c9979c4a7c357bfee&language=${lang}`)
      .then((res)=>{
         console.log(res);
         setMovies(res.data.results)
         setFilteredMovies(res.data.results)
      })
   }
   useEffect(()=>{
      getMovies(lang)
   },[lang])
   const filterbyName =(e)=>{
      console.log(e.target.value);
      const filtered=movies.filter((movie)=>movie.original_title.includes(e.target.value))
      setFilteredMovies(filtered)
   }
  return (
    <div className=" container" dir={lang==="ar"?"rtl":"ltr"}>
       <h1 className="movie-heading mb-2" >{translation.logo}</h1>
       <div className="mb-5">
    <input  type="search" onChange={(e)=>filterbyName(e)} className="form-control" id="search" placeholder={translation.placeholder}/>
       </div>
    <div className="row">

      {filteredMovies?.map((movie,index)=>{
         return <MovieCart movie={movie} key={index}/>
      })}
      
      </div>
    </div>
  )
}
