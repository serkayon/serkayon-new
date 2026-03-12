import { motion } from "framer-motion"

import indiaFlag from "../assets/india.png"
import koreaFlag from "../assets/south-korea.png"

import indiaClient1 from "../assets/hwia.png"
import indiaClient2 from "../assets/poultry-1.png"

import koreaClient1 from "../assets/sp.png"
import koreaClient2 from "../assets/polygreen-logo.png"
import koreaClient3 from "../assets/unomic.png"

export default function Clients(){

return(

<motion.section
id="clients"
className="section grid-bg"
initial={{ opacity:0, y:60 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.8 }}
viewport={{ once:true }}
>

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-5xl font-heading font-bold text-center mb-16 font-mono">
Our Clients
</h2>

<div className="grid md:grid-cols-2 gap-16">

{/* INDIA */}
<div>

<h3 className="text-xl mb-6 flex items-center gap-3">
<img src={indiaFlag} alt="India flag" className="w-6 h-4 object-cover"/>
India
</h3>

<div className="grid grid-cols-2 sm:grid-cols-2 gap-6">

<div className="h-20 bg-transparent rounded-lg flex items-center justify-center p-3">
<img src={indiaClient1} alt="client" className="max-h-full object-contain"/>
</div>

<div className="h-20 bg-transparent rounded-lg flex items-center justify-center p-3">
<img src={indiaClient2} alt="client" className="max-h-full object-contain scale-139"/>
</div>

</div>

</div>


{/* SOUTH KOREA */}
<div>

<h3 className="text-xl mb-6 flex items-center gap-3">
<img src={koreaFlag} alt="Korea flag" className="w-6 h-4 object-cover"/>
South Korea
</h3>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

<div className="h-20 bg-transparentrounded-lg flex items-center justify-center p-3">
<img src={koreaClient1} alt="client" className="max-h-full object-contain scale-200"/>
</div>

<div className="h-20 bg-transparent rounded-lg flex items-center justify-center p-3">
<img src={koreaClient2} alt="client" className="max-h-full object-contain"/>
</div>

<div className="h-20 bg-transparent rounded-lg flex items-center justify-center p-3">
<img src={koreaClient3} alt="client" className="max-h-full object-contain scale-135"/>
</div>

</div>

</div>

</div>

</div>

</motion.section>

)
}