// import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled from "styled-components";
import { flexMix } from "./components/styled";
import "./App.css";

function App() {
  const StyledSection = styled.section`
    section {
      padding: 20px 40px;
      ${flexMix({
        justify: "center",
        align: "center",
        wrap: "wrap",
        gap: "20px",
      })}
    }
  `;
  return (
    <main>
      <Header />
      <StyledSection>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </StyledSection>
    </main>
  );
}

export default App;
