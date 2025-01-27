import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ThemeProvider from "./context/ThemeProvider.jsx";


const App = () => {

  return (
    <ThemeProvider>
      <div className="container">

        <Header />
        <Main />
        <Footer />

      </div>
    </ThemeProvider>
  )
}

export default App

