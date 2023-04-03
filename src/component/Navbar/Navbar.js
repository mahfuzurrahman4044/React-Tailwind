import { list } from 'postcss';
import React, { useEffect, useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen]=useState(false);
    useEffect(()=>{

    },[])



    const files = [
        { id: 1, name: "Home", path: "/root/folder1/file1.txt" },
        { id: 2, name: "About.jpg", path: "/root/folder2/file2.jpg" },
        { id: 3, name: "Contact", path: "/root/folder3/file3.doc" },
        { id: 3, name: "Productst", path: "/root/folder3/file3.doc" },
        { id: 3, name: "Services", path: "/root/folder3/file3.doc" },
      ];
      
    return (
        <div className=''>
            <div onClick={()=>setOpen(!open)} className='md:hidden'>
                <span className=''>
                    {open===true? <XMarkIcon className="h-6 w-6 text-purple-500" />:<Bars3Icon className="h-6 w-6 text-purple-500" />}
                </span>
                
            </div>

            <div className={`md:flex justify-around items-center md:static absolute ${open ? 'top-6' : '-top-36'}`}>
            {
                files.map((file, idx)=> <Link key={idx} file={file}></Link>)
            }
            </div>
        </div>
    );
};

export default Navbar;