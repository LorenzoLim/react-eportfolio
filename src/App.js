import { About, Contact, Home, Portfolio} from "./pages"

function App() {

  const exampleOne = () => {
    return "Answer to example Two"
  }

  return (
    <div>
      <Home />
      <About />
      <Contact />
      <Portfolio />
    </div>
  );
}

export default App;
