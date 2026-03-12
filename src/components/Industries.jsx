import { motion } from "framer-motion"

import manu from "../assets/Hyundai.jpeg"
import energy from "../assets/sp sys.jpeg"
import pharma from "../assets/poultry.jpeg"
import logistics from "../assets/polygreen.jpeg"

export default function Industries(){

const industries=[
{
title:"Hyundai",
desc:"Implemented a real-time machine monitoring dashboard to enhance operational visibility and equipment performance tracking. The system enables continuous monitoring of machine conditions during production. It improves the accuracy of shaft inspection by providing timely data and insights. As a result, the solution helps increase production efficiency and supports proactive maintenance.",
img:manu
},

{
title:"Feed Mill Intelligence",
desc:"An intelligent dashboard is designed to monitor production activities and operational performance in real time. It enables efficient tracking of raw materials throughout the manufacturing process. The system also supports effective inventory management by maintaining accurate stock levels. Additionally, it helps streamline dispatch operations, ensuring smooth coordination and improved overall production management.",
img:pharma
},
{
title:"SP system",
desc:"Predictive maintenance monitors the health and performance of machine tools using continuous data analysis. It helps identify potential issues and early signs of faults before they become critical failures. By detecting problems in advance, the system enables timely maintenance and corrective actions. This approach helps prevent unexpected downtime, improve machine reliability, and enhance overall operational efficiency.",
img:energy
},
{
title:"Polygreen",
desc:"An AI-powered CNN-based computer vision system is designed to automatically identify and classify plastic bottles for efficient recycling. The system analyzes visual data to accurately detect and sort different types of plastic materials. By integrating with the Polygreen ecosystem, it supports intelligent waste management and sustainable recycling practices. This approach enhances sorting accuracy, reduces manual effort, and improves the overall efficiency of the recycling process.",
img:logistics
}
]

return(

<section id="industries" className="section grid-bg">

<div className="max-w-7xl mx-auto px-6  space-y-24">

<h2 className="text-center text-5xl md:text-5xl font-semibold font-mono">
Industries We Served
</h2>

{industries.map((item,i)=>{

const reverse = i % 2 !== 0

return(

<motion.div
key={i}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className={`industry-row ${reverse ? "reverse":""}`}
>

<div className={`industry-img-box ${reverse ? "img-right":"img-left"}`}>
<img src={item.img} />
</div>

<div className="industry-text">

<h3>{item.title}</h3>

<p>{item.desc}</p>

</div>

</motion.div>

)

})}

</div>

</section>

)
}