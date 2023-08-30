import styled from 'styled-components';

export const DivCard = styled.div`
  width: 300px;
  margin: 0 auto;
  border: 1px solid #000;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
export const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px 0;
`;
export const Photo = styled.img`
  width: 100px;
  border-radius: 50%;
`;
export const Text = styled.p`
  font-size: 16px;
  line-height: 1.07;
  text-align: center;
  letter-spacing: 0.02em;
`;
export const List = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  width: 100px;
  height: 50px;
  display: flex;
  background-color: gray;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #000;
`;
export const Span = styled.span`
  font-size: 14px;
  line-height: 1.07;
  text-align: center;
  letter-spacing: 0.02em;
`;
