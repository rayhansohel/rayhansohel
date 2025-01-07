import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;

