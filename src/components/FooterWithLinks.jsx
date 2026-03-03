import React from'react';
import{Github,Linkedin,Mail}from'lucide-react';
const FooterWithLinks=({companyName,description,links=[],socialLinks=[],copyright})=>{
const icons={github:Github,linkedin:Linkedin,mail:Mail};
return(
<footer className="bg-navy-900 border-t border-navy-800 text-gray-300">
<div className="max-w-6xl mx-auto px-4 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="lg:col-span-1"><h3 className="text-xl font-bold gradient-text mb-3">{companyName}</h3>{description&&<p className="text-sm text-gray-400 leading-relaxed whitespace-pre-line">{description}</p>}</div>
{links.map((g,i)=><div key={i}><h4 className="text-white font-semibold mb-4">{g.title}</h4><ul className="space-y-2">{g.items.map((item,j)=><li key={j}><a href={item.href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors">{item.label}</a></li>)}</ul></div>)}
</div></div>
<div className="border-t border-navy-800"><div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-500">{copyright||`© ${new Date().getFullYear()} ${companyName}. All rights reserved.`}</p>
{socialLinks.length>0&&<div className="flex items-center gap-5">{socialLinks.map((s,i)=>{const Icon=icons[s.platform.toLowerCase()];return Icon?<a key={i} href={s.href} target={s.platform!=='mail'?'_blank':undefined} rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors"><Icon className="w-5 h-5"/></a>:null;})}</div>}
</div></div>
</footer>
);};
export default FooterWithLinks;
