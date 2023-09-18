import Header from "./header"
import TopMovies from "./TopMovies";
import "./App.css"
import Footer from "./Footer";
function App() {
  const apiKey = 'a1712b9bb2897ee457edcb3493489bef';

  return (
    <div>
      <h1></h1>
      <Header />
      <TopMovies apiKey={apiKey} />
      <Footer />
    </div>
  )
}

export default App
