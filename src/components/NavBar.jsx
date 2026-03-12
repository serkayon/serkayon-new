import { useState } from "react"
import logo from "../assets/NEW logo.jpeg"

export default function Navbar(){

const [open,setOpen]=useState(false)

return(

<nav className="sticky top-0 bg-white shadow-sm z-50">

<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<img src={logo} className="h-8 md:h-10 object-contain"/>

<ul className="hidden md:flex gap-10 text-sm font-medium font-family-new">

<li><a href="#home" className="nav-link">Home</a></li>
<li><a href="#industries" className="nav-link">Industries</a></li>
<li><a href="#services" className="nav-link">Services</a></li>
<li><a href="#clients" className="nav-link">Clients</a></li>
<li><a href="#contact" className="nav-link">Contact Us</a></li>

</ul>

<button 
className="md:hidden text-2xl"
onClick={()=>setOpen(!open)}
>
☰
</button>

</div>


{/* Mobile overlay menu */}

<div
className={`md:hidden absolute left-0 top-full w-full bg-white shadow-lg transition-all duration-300 ease-in-out
${open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible"}
`}
>

<div className="flex flex-col px-6 py-6 gap-5 text-sm font-medium">

<a href="#home" className="nav-link-mobile">Home</a>
<a href="#industries" className="nav-link-mobile">Industries</a>
<a href="#services" className="nav-link-mobile">Services</a>
<a href="#clients" className="nav-link-mobile">Clients</a>
<a href="#contact" className="nav-link-mobile">Contact</a>

</div>

</div>

</nav>

)
}