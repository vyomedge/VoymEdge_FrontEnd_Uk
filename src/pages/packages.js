
import Packages from "@/component/packages/Packages";
import dynamic from "next/dynamic";
// const Dashboard = dynamic(() => import('../component/dashboard/index'));




// ✅ Always name the default export function
export default function PackagesPage() {
  return <Packages/>
}