import product1 from "../assets/cig.png"
import product2 from "../assets/pm.png"
import product3 from "../assets/poultry-1.png"

export default function Products(){

return(

<section id="products" className="section grid-bg py-24">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center mb-20 font-mono">
Our Products
</h2>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 text-center">


{/* PRODUCT 1 */}
<div className="flex flex-col items-center ">

<div className="w-56 h-56 rounded-full bg-white flex items-center justify-center shadow-md mb-6">

<img
src={product1}
alt="Industrial Monitoring System"
  className="max-h-[140px] object-contain scale-135 origin-center mx-auto"
/>

</div>

<h3 className="text-xl font-semibold mb-2">
Bio-Column Integrity Guard

</h3>

<p className="text-gray-600 text-sm max-w-xs">
Detects column degradation and ensures packed-bed stability to enable proactive maintenance and consistent process performance

</p>

</div>


{/* PRODUCT 2 */}
<div className="flex flex-col items-center">

<div className="w-56 h-56 rounded-full bg-white flex items-center justify-center shadow-md mb-6">

<img
src={product2}
alt="Predictive Maintenance Platform"
className="h-32 w-auto object-contain scale-135"
/>

</div>

<h3 className="text-xl font-semibold mb-2">
Bio-Predictive Maintenance
</h3>

<p className="text-gray-600 text-sm max-w-xs">
Predicts bioreactor failures and audits machine performance in real time to reduce downtime and improve batch reliability

</p>

</div>


{/* PRODUCT 3 */}
<div className="flex flex-col items-center">

<div className="w-56 h-56 rounded-full bg-white flex items-center justify-center shadow-md mb-6">

<img
src={product3}
alt="Bio Process Controller"
className="h-32 w-auto object-contain"
/>

</div>

<h3 className="text-xl font-semibold mb-2">
Feed Mill Intelligence
</h3>

<p className="text-gray-600 text-sm max-w-xs">
Monitor production, track raw materials, manage stock, and control dispatch in one intelligent dashboard.</p>

</div>


</div>

</div>

</section>

)
}