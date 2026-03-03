import React,{useState,useEffect,useRef}from'react';
import{Mail,User,MessageSquare,Send,CheckCircle}from'lucide-react';
const ContactForm=({title='Get In Touch',submitButtonText='메시지 보내기'})=>{
const[isVisible,setIsVisible]=useState(false);
const[isSubmitting,setIsSubmitting]=useState(false);
const[isSuccess,setIsSuccess]=useState(false);
const[errors,setErrors]=useState({});
const[formData,setFormData]=useState({name:'',email:'',message:''});
const formRef=useRef(null);
useEffect(()=>{const obs=new IntersectionObserver((entries)=>{entries.forEach((e)=>{if(e.isIntersecting)setIsVisible(true);});},{threshold:0.1});if(formRef.current)obs.observe(formRef.current);return()=>{if(formRef.current)obs.unobserve(formRef.current);};},[]);
const validate=()=>{const e={};if(!formData.name.trim()||formData.name.length<2)e.name='이름을 2자 이상 입력해주세요';if(!formData.email.trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))e.email='올바른 이메일 형식을 입력해주세요';if(!formData.message.trim()||formData.message.length<10)e.message='메시지를 10자 이상 입력해주세요';return e;};
const handleChange=(field)=>(e)=>{setFormData((prev)=>({...prev,[field]:e.target.value}));if(errors[field])setErrors((prev)=>({...prev,[field]:''}))};
const handleSubmit=async(e)=>{e.preventDefault();const ve=validate();if(Object.keys(ve).length>0){setErrors(ve);return;}setIsSubmitting(true);await new Promise((r)=>setTimeout(r,800));setIsSubmitting(false);setIsSuccess(true);setFormData({name:'',email:'',message:''});setTimeout(()=>setIsSuccess(false),3000);};
const ic=(field)=>`w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all text-white placeholder:text-gray-500 ${errors[field]?'bg-red-900/30 border border-red-500 focus:ring-red-500/40':'bg-navy-800 border border-navy-700 focus:ring-gold-500/40 focus:border-gold-500'}`;
return(
<div ref={formRef} className={`w-full max-w-2xl mx-auto transition-all duration-500 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-5'}`}>
{title&&<h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get In <span className="gradient-text">Touch</span></h2>}
<p className="text-gray-400 text-center mb-10 text-lg">프로젝트 문의나 협업 제안을 환영합니다</p>
{isSuccess&&<div className="mb-6 p-4 bg-green-900/40 border border-green-600 rounded-lg flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-400"/><p className="text-green-300 font-medium">메시지가 전송되었습니다!</p></div>}
<form onSubmit={handleSubmit} className="space-y-5">
<div><label className="block text-sm font-medium text-gray-300 mb-2">이름</label><div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"/><input type="text" value={formData.name} onChange={handleChange('name')} placeholder="홍길동" className={ic('name')}/></div>{errors.name&&<p className="mt-1 text-sm text-red-400">{errors.name}</p>}</div>
<div><label className="block text-sm font-medium text-gray-300 mb-2">이메일</label><div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"/><input type="email" value={formData.email} onChange={handleChange('email')} placeholder="example@email.com" className={ic('email')}/></div>{errors.email&&<p className="mt-1 text-sm text-red-400">{errors.email}</p>}</div>
<div><label className="block text-sm font-medium text-gray-300 mb-2">메시지</label><div className="relative"><MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-500"/><textarea rows={5} value={formData.message} onChange={handleChange('message')} placeholder="프로젝트에 대해 알려주세요..." className={`${ic('message')} resize-none`}/></div>{errors.message&&<p className="mt-1 text-sm text-red-400">{errors.message}</p>}</div>
<button type="submit" disabled={isSubmitting||isSuccess} className={`w-full py-4 px-8 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${isSubmitting||isSuccess?'bg-gold-700 text-navy-950 cursor-not-allowed opacity-70':'bg-gold-500 hover:bg-gold-600 text-navy-950 hover:scale-[1.01]'}`}>
{isSubmitting?<><div className="w-5 h-5 border-2 border-navy-900 border-t-transparent rounded-full animate-spin"/><span>전송 중...</span></>:isSuccess?<><CheckCircle className="w-5 h-5"/><span>전송 완료!</span></>:<><Send className="w-5 h-5"/><span>{submitButtonText}</span></>}
</button>
</form>
</div>
);};
export default ContactForm;
