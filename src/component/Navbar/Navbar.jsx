import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css"
import { NavLink } from "react-router-dom";
import { changeLang } from "../../redux/slicers/langSlicer";
import { useEffect } from "react";
export default function Navbar() {
 const myLang =useSelector((state)=>state.langSlicer.lang)
 const translation =useSelector((state)=>state.langSlicer.translation)
 const dispatch =useDispatch()

  return (
    <>
      <nav className="navbar navbar-expand-lg navColor">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">{translation.logo}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <NavLink to="" className="nav-link text-white" href="#">{translation.home}</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink to="favourite" className="nav-link text-white" href="#">{translation.favourites} <span className="text-danger fs-6"></span></NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {translation.languages}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
            <li><a className={`dropdown-item ${myLang=='en'?"bg-danger":''}`} onClick={()=>(dispatch(changeLang('en')))}>EN</a></li>
            <li><a className={`dropdown-item ${myLang=='ar'?"bg-danger":''}`}onClick={()=>(dispatch(changeLang('ar')))} >AR</a></li> 
          </ul>
        </li>
        <li className="nav-item">
          <NavLink to="login" className="nav-link text-white">{translation.login}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="register" className="nav-link text-white">{translation.register}</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}
