import styled, { keyframes } from "styled-components";

//style부분
const Wrapper = styled.div`
  display: flex;
`;

//그냥 CSS임. styled component와 관련 없다.
//애니메이션이 위에 와야 하는 것을 잊지 말기!
const rotationAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: chocolate;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  span {
    font-size: 40px;
    &:hover {
      //&는 span을 호명하는 단축키
      font-size: 60px;
    }
    &:active {
      opacity: 0.1;
    }
  }
`;

//구현부분
function App() {
  return (
    <Wrapper>
      <Box>
        <span>😊</span> {/* 이모티콘이 styled component 안에 있지 않다 */}
      </Box>
    </Wrapper>
  );
}

export default App;
