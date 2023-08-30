import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Section = styled.section`
  width: 300px;
  margin: 0 auto;
  border: 1px solid #000;
  border-radius: 4px;
  margin-bottom: 20px;
`;
export const Title = styled.h2`
  font-size: 28px;
  line-height: 1.07;
  text-align: center;
  letter-spacing: 0.02em;
  padding: 30px;
`;
export const List = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  width: 60px;
  background-color: ${getRandomHexColor};
`;
export const Span = styled.span`
  font-size: 16px;
  line-height: 1.07;
  text-align: center;
  letter-spacing: 0.02em;
  padding: 5px;
`;
