import "./App.css";
import FlexGrid from "./FlexGrid";
import layoutConfiguration from "./layoutConfiguration.json";

function App() {
  const getComponent = () => (
    <div
      style={{
        backgroundColor: "#9575cd",
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Box
    </div>
  );

  return (
    <div className="App">
      <FlexGrid
        layoutConfiguration={layoutConfiguration["lg"]}
        getComponent={getComponent}
      />
    </div>
  );
}

export default App;
