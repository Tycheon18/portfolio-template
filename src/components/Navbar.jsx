import React,{useState,useEffect}from'react';
import{Menu,X}from'lucide-react';
const Navbar=({logo='Portfolio',links=[],rightContent=null})=>{
const[isOpen,setIsOpen]=useState(false);
const[isScrolled,setIsScrolled]=useState(false);
useEffect(()=>{const h=()=>setIsScrolled(window.scrollY>20);window.addEventListener('scroll',h);return()=>window.removeEventListener('scroll',h);},[]);
return(
<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy-900/80 backdrop-blur-md border-b border-navy-800 ${isScrolled?'shadow-lg':''}`}>
<div className="max-w-6xl mx-auto px-4 py-4">
<div className="flex justify-between items-center">
<a href="#" className="text-2xl font-bold gradient-text">{logo}</a>
<div className="hidden md:flex items-center gap-8">
{links.map((link,i)=><a key={i} href={link.href} onClick={(e)=>{if(link.href.startsWith('#')){e.preventDefault();document.getElementById(link.href.slice(1))?.scrollIntoView({behavior:'smooth'});}}} className="text-gray-300 hover:text-gold-400 transition-colors capitalize text-sm font-medium">{link.label}</a>)}
{rightContent}
</div>
<button onClick={()=>setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-gold-400 p-1">{isOpen?<X className="w-6 h-6"/>:<Menu className="w-6 h-6"/>}</button>
</div>
<div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen?'max-h-64 opacity-100 mt-4':'max-h-0 opacity-0'}`}>
<div className="flex flex-col gap-3 pb-2">{links.map((link,i)=><a key={i} href={link.href} onClick={(e)=>{if(link.href.startsWith('#')){e.preventDefault();document.getElementById(link.href.slice(1))?.scrollIntoView({behavior:'smooth'});}setIsOpen(false);}} className="text-gray-300 hover:text-gold-400 capitalize text-sm py-1">{link.label}</a>)}</div>
</div>
</div>
</nav>
);};
export default Navbar;
