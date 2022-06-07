import { useState } from "react";
import "./App.css";
import Chart from "./components/Chart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.region),
    datasets: [
      {
        label: "Value",
        data: UserData.map((data) => data.valuesTest),
        backgroundColor: [
          "#703593",
          "#703593",
          "#703593",
          "#703593",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });


  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <Chart chartData={userData} />
      </div>
    </div>
  );
}

export default App;