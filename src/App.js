import { About, Contact, Home, Portfolio} from "./pages"

function App() {

  const exampleOne = () => {
    return "Answer to example Two"
  }

  return (
    <div>
      <H2>Title</H2>
      <Home />
      <About />
      <Contact />
      <Portfolio />
    </div>
  );
}

export default App;
