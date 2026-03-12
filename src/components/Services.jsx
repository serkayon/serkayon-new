import img1 from "../assets/system-integration.png"
import img2 from "../assets/data&intelligent.png"
import img3 from "../assets/validation.png"
import img4 from "../assets/remote.png"
import img5 from "../assets/custom-deve.png"
import img6 from "../assets/support.png"

export default function Services(){

const services=[
{
title:"System Integration",
img: img1,
desc:"Seamless integration of operational technology (OT), enterprise IT systems, and cloud platforms for unified data visibility."
},
{
title:"Data & Intelligence",
img: img2,
desc:"Advanced analytics and performance modeling to improve efficiency, optimize processes, and support data-driven decision making."
},
{
title:"Validation & Prototyping",
img: img3,
desc:"Rapid pilot deployments and proof-of-concept prototypes to validate solutions, demonstrate value, and accelerate implementation."
},
{
title:"Remote Asset Monitoring",
img: img4,
desc:"Monitor tanks, pumps, machines, EV chargers, and microgrid systems remotely through real-time dashboards and automated alerts."
},
{
title:"Custom Development",
img: img5,
desc:"Design and development of tailored industrial software and IoT solutions built specifically for your operational requirements."
},
{
title:"Training & Support",
img: img6,
desc:"Complete system documentation, operator training, and continuous technical support to ensure smooth system operation."
}
]

return(

<section id="services" className="section grid-bg">

<div className="max-w-7xl mx-auto">

<h2 className="text-5xl font-bold text-center mb-16 font-mono">
Our Services
</h2>

<div className="grid md:grid-cols-3 gap-10">

{services.map((s,i)=>(
<div key={i} className="glass p-6 rounded-2xl transition hover:-translate-y-2 hover:shadow-lg">

{/* Image */}
<div className="w-full h-32 mb-6 overflow-hidden rounded-lg">
<img 
src={s.img}
alt={s.title}
className="w-full h-full object-cover"
/>
</div>

{/* Title */}
<h3 className="text-xl font-semibold">
{s.title}
</h3>

{/* Description */}
<p className="mt-4 text-gray-600 text-sm">
{s.desc}
</p>

</div>
))}

</div>

</div>

</section>

)
}