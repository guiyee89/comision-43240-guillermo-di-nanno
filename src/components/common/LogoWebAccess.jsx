import styled from "styled-components/macro";

export const LogoWebAccess = () => {
  return (
    <Wrapper>
      <Logo>
        <Rectangle1></Rectangle1>
        <Line></Line>
        <Rectangle></Rectangle>
      </Logo>
      <Title>web access</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  /* Add logo styles here */
`;

const Line = styled.div`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 20px solid red; /* Change the color to your preference */
  transform: skew(0deg);
  opacity: .8;
  /* Add triangle styles here */
`;

const Rectangle = styled.div`
  width: 18px;
  height: 26px;
  background-color: red; /* Change the color to your preference */
  transform: skew(-45deg);
  opacity: .5;
  /* Add rectangle styles here */
`;
const Rectangle1 = styled.div`
  width: 18px;
  height: 26px;
  background-color: red; /* Change the color to your preference */
  transform: skew(45deg);
  opacity: .5;
  /* Add rectangle styles here */
`;
const Title = styled.h2`
  text-decoration: none;
  font-size: .9rem;
`;
