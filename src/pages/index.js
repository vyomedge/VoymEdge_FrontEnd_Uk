import dynamic from "next/dynamic";
// const Dashboard = dynamic(() => import('../component/dashboard/index'));

import Home from "@/component/Home";


// ✅ Always name the default export function
export default function HomePage() {
  return <Home />
}
