import ContactUs from "@/component/contact/ContactUs";
import dynamic from "next/dynamic";
// const Dashboard = dynamic(() => import('../component/dashboard/index'));




// ✅ Always name the default export function
export default function ContactUsPage() {
  return <ContactUs></ContactUs>
}
