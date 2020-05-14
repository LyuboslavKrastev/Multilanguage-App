import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
          console.log(this.context);
    return (

      <div>
        Select a language:
        <i
          className="flag gb"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag bg"
          onClick={() => this.context.onLanguageChange("bulgarian")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
