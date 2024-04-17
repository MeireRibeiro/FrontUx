import Footer from "../components/Footer";
import Header from "../components/Header";

function LayoutDefault({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default LayoutDefault;