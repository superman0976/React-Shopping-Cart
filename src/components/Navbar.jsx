import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { BsFillCartCheckFill } from 'react-icons/bs';



const Navbar = ({setData, cart}) => {
     
    const location = useLocation();

    const navigate = useNavigate();

     const [searchTerm, setsearchTerm] = useState("")

    const filterByCategory = (category)=>{
        const element = items.filter((product)=>product.category === category)
        setData(element);
    }

    const filterByPrice = (price)=>{
        const element = items.filter((product)=>product.price >= price);
        setData(element);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
        setsearchTerm("");
    }


  return (
    <>
     <header className='sticky-top'>
    
      <div className='nav-bar'>
         <Link to={'/'} className='brand'>E-Cart</Link>
               <form 
            //    onClick={handleSubmit}
               onSubmit={handleSubmit}
               className='search-bar'>
                   <input
                   value={searchTerm}
                   onChange={(e)=>setsearchTerm(e.target.value)} 
                   type="text" 
                   placeholder='Search products' />
               </form>
          <Link to={'/cart'}className='cart'>
          <button type="button" className="btn btn-primary position-relative">
  <BsFillCartCheckFill style={{fontSize:'1.5rem'}}/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
          </Link>
      </div> 
           {/* navbar end here */}
         
         {
            location.pathname == '/' && (
                <div className="nav-bar-wrapper">
                <div className="item">Filter by {"->"}</div>
                <div onClick={()=>setData(items)} className="item">No Filter</div>
                <div onClick={()=>filterByCategory('mobiles')} className="item">Mobiles</div>
                <div onClick={()=>filterByCategory('laptops')} className="item">Laptops</div>
                
                <div onClick={()=>filterByCategory('tablets')} className="item">Tablets</div>
                <div onClick={()=>filterByPrice(29999)} className="item">{">"}=29999</div>
                <div onClick={()=>filterByPrice(49999)} className="item">{">"}=49999</div>
                <div onClick={()=>filterByPrice(69999)} className="item">{">"}=69999</div>
                <div onClick={()=>filterByPrice(89999)} className="item">{">"}=89999</div>   
             </div>
            )
         }


      
    </header> 
   </> 
  )
}

export default Navbar
