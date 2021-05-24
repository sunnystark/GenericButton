import React, { useState } from "react";
import Button from "./components/Button";
import { AiOutlineSave } from "react-icons/ai";
import styled from "styled-components";
import SampleForm from './components/SampleForm';

function App() {
  const [isLoading, setLoading] = useState(false);

  const handleClick = (text: any) => {
    alert(text);
  };

  const handleLoadingButtonClick = (text: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(text);
    }, 2000);
  };

  const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 150px 30px;
  `;

  return (
    <div className="App">
      <h1>Buttons Mela </h1>
      {/*types of button*/}
      <ButtonsWrapper>
        <Button
       
          variant="primary"
          onClick={() => handleClick(" You clicked on Primary button !")}
          text={"First Button"}
        />
        <Button
       
          variant="secondary"
          onClick={() => handleClick("Secondary button clicked!")}
          text={"Second Button"}
        />
        <Button
         style={{
          backgroundColor: "orange",
          borderRadius: "8px",
        }}
          icon={<AiOutlineSave />}
          onClick={() => handleClick("Button with icon clicked!")}
          text={"Button with icon"}
        />

        {/* Button Design from outside | Can be styled from outside*/}

        <Button
          style={{
            backgroundColor: "pink",
            width: "100px",
            borderRadius: "12px",
          }}
          onClick={() => handleClick(" You clicked on Custom styled button!")}
          text={"Custom styled button"}
        />
        <Button
          className={"custom-button"}
          onClick={() => handleClick(" You clicked on Custom class button clicked!")}
          text={"Custom class button"}
        />
        <Button
          loading={isLoading}
          onClick={() => handleLoadingButtonClick(" You clicked on Loading button clicked!")}
          text={"Loading button"}
        />
        <Button disabled={true} text={"Disabled button"} />
      </ButtonsWrapper>
      {/*Form*/}
      <SampleForm />
    </div>
  );
}

export default App;
