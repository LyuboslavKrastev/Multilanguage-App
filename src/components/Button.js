import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Изпрати";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(languageValue) => this.renderSubmit(languageValue)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    return (
      <ColorContext.Consumer>
        {(colorValue) => this.renderButton(colorValue)}
      </ColorContext.Consumer>
    );
  }
}

Button.contextType = LanguageContext;

export default Button;
