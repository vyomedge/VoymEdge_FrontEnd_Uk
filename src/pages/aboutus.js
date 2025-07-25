
import AboutUs from "@/component/aboutus/AboutUs";
import dynamic from "next/dynamic";
// const Dashboard = dynamic(() => import('../component/dashboard/index'));




// ✅ Always name the default export function
export default function AboutUsPage() {
  return <AboutUs></AboutUs>
}