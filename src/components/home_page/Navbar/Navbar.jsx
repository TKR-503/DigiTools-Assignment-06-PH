import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full container mx-auto gap-4"> 
      <div className=" navbar">
      <div className="flex-1 gap-2">
        <div >
           <span className="text-5xl font-extrabold bg-gradient-to-r from-[#4F39F6] to-[#8A5CF2] bg-clip-text text-transparent">DigiTools</span>
        </div>
    </div>
      
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex mr-44">  
             <ul className="flex items-center gap-8 ">
                <li><a className="text-lg font-bold">Home</a></li>
                <li><a className="text-lg font-bold">Tools</a></li>
                <li><a className="text-lg font-bold">Blog</a></li>
                <li><a className="text-lg font-bold">Contact</a></li>
                <li><a className="text-lg font-bold">Pricing</a></li>
              </ul>
          </div>
          <div className="flex items-center gap-4">
            
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                <span className="badge badge-sm indicator-item">0</span>
        
              </div>
            </div>
            
          <div className="flex items-center gap-4">
               <p className="text-lg font-bold">Login</p>
               <div>
                 <button className="btn btn-primary rounded-full bg-gradient-to-r from-[#4F39F6] to-[#8A5CF2]">Get Started</button>
               </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;