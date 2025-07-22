

import Layout from "@/layout/layout";
import "@/styles/globals.css"; // if you have global CSS

export default function App({ Component, pageProps }) {
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