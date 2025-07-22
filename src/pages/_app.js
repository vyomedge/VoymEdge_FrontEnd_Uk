
import Layout from "../layout/layout";
import Layout1 from "../layout/layout1";
import "@/styles/globals.css"; 
const layouts = {
default: Layout,
layout1: Layout1,
};
export default function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || layouts.default;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}







{/*import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
*/}