// pages/_app.js
import '../styles/global.css';
import Layout from '../components/Layout';
import { SearchProvider } from '../context/SearchContext'; // Optional if you're using search

export default function App({ Component, pageProps }) {
  return (
    <SearchProvider> {/* If you're using search */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchProvider>
  );
}
