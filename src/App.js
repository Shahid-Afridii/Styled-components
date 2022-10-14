import StyledButton ,{FancyButton,SubmitButton} from "./Components/Button/Button"
import { AnimatedLogo } from "./Components/Button/Button.styles";
import {logo} from "./images/logo.svg "

function App() {
  return (
    <div className="App">
      {/* <button>Button</button> */}
        <AnimatedLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
    
      <StyledButton>Styled Button</StyledButton>
      <div>
        <br/>
      </div>
      <StyledButton variant="outline">Styled Button</StyledButton>
      <div>
        <br/>
      </div>
      <FancyButton>Fancy Button</FancyButton>
      <div>
        <br/>
      </div>
      <SubmitButton>Submit Button</SubmitButton>
    </div>
  );
}

export default App;
