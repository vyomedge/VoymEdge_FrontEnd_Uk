import Services from "@/component/services/Services";
import dynamic from "next/dynamic";
// const Dashboard = dynamic(() => import('../component/dashboard/index'));




// ✅ Always name the default export function
export default function ServicesPage() {
  return <Services/>
}