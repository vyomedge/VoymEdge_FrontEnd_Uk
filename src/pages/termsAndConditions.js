
import TermsAndConditions from "@/component/footerBottom/Terms&conditions";
import dynamic from "next/dynamic";
// const Dashboard = dynamic(() => import('../component/dashboard/index'));




// ✅ Always name the default export function
export default function TermsAndConditionsPage() {
  return <TermsAndConditions></TermsAndConditions>
}
