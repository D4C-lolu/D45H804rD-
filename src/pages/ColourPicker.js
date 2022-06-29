import React from "react";
import { ColorPickerComponent as ColourPickerComponent } from "@syncfusion/ej2-react-inputs";
import { Header } from "../components";

const change = (args) =>
  (document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex);

const ColourPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Colour Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center space-x-4 gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <ColourPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              change={change}
              showButtons={false}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColourPickerComponent
              id="inline-palette"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColourPicker;
