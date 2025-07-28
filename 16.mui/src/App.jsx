import { useState } from "react";
import "./App.css";
import MUIButton from "./components/MUIButton";
import MUITextField from "./components/MUITextField";
import MUISelect from "./components/MUISelect";
import MUICheckbox from "./components/MUICheckbox";
import MUIAutoComplete from "./components/MUIAutoComplete";

function App() {
  return (
    <div>
      {/* <MUIButton /> */}
      {/* <MUITextField /> */}
      {/* <MUISelect /> */}
      {/* <MUICheckbox /> */}
      <MUIAutoComplete />
    </div>
  );
}

export default App;
