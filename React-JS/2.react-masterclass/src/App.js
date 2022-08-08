import styled from "styled-components";

//style부분
const Father = styled.div`
  display: flex;
`;

// const Btn = styled.button`
//   color: white;
//   background-color: black;
//   border: 0px;
//   border-radius: 15px;
// `;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: blue;
`;

//구현부분
function App() {
  return (
    <Father>
      <Input />
      <Input />
      <Input />
      <Input />
      {/* <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn> */}
    </Father>
  );
}

export default App;
