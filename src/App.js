import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [name, setName] = useState("Sagar");
  useEffect(() => {
    axios
      .get("https://gbfs.citibikenyc.com/gbfs/en/station_information.json")
      .then((res) => {
        console.log(res.data.data);
      });
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>Name: {name}</div>
      <div>
        <button onClick={() => setName("Test")}>Change Name</button>
      </div>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
