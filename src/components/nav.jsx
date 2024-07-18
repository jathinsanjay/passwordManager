import React, { useState } from 'react';


const Nav = () => {
  const [curr, setCurr] = useState("");
  const [nav,setnav]=useState(true)
  const handleClick = (e, page) => {
    e.preventDefault();
    setCurr(page);
   
    window.history.pushState({}, '', page); 
  };

  return (
    <div className='m-0 lg:p-4 flex flex-col lg:flex-row w-full justify-between bg-transparent h-15'>
     <div className='lg:hidden p-4'onClick={()=>{setnav(!nav)}}> <lord-icon
    src="https://cdn.lordicon.com/axacjdbs.json"
    trigger="hover"
    colors="primary:white,secondary:white"></lord-icon>
    </div>
      <div className='text-white font-extrabold  mx-auto lg:m-0 text-3xl  lg:text-5xl lg:p-4 font-serif mb-4'>
        Vaulty
      </div>
      <div className={` bg-black ${nav==true?"flex":"hidden"} justify-center lg:justify-normal mx-auto lg:mx-0 lg:bg-transparent w-[70%]   lg:p-4 text-xl`}>
        <ul className='flex flex-col py-2 lg:flex-row lg:mx-0'>
          <li>
            <a
              href='/'
              className={`p-2 m-2 font-bold ${curr === '/' ? 'text-blue-400 font-extrabold' : 'text-white hover:relative hover:bottom-2 hover:text-blue-500'}`}
              onClick={(e) => handleClick(e, '/')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='/about'
              className={`p-2 m-2 font-bold ${curr === '/about' ? 'text-blue-400 font-extrabold' : 'text-white hover:relative hover:bottom-2 hover:text-blue-500'}`}
              onClick={(e) => handleClick(e, '/about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href='/saved'
              className={`p-2 m-2 font-bold ${curr === '/saved' ? 'text-blue-400 font-extrabold' : 'text-white hover:relative hover:bottom-2 hover:text-blue-500'}`}
              onClick={(e) => handleClick(e, '/saved')}
            >
              Saved
            </a>
          </li>
         
        </ul>
      </div>
      <a
              href='/contact'
              className={`mx-auto font-bold w-fit m-3  text-white hover:relative hover:bottom-2 hover:text-black flex my-auto pt-2 m-2 pb-2  bg-blue-600  rounded-lg  '}`}
              onClick={(e) => handleClick(e, '/contact')}
            >
             <lord-icon
    src="https://cdn.lordicon.com/yedgackm.json"
    trigger="hover"
    colors="primary:#ffffff,secondary:#4bb3fd,tertiary:#ffffff"
   >
</lord-icon><div className='px-2 items-center w-[20%] pt-1   lg:text-xl '>Github</div>
            </a>
    </div>
  );
};

export default Nav;
