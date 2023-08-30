import styled from 'styled-components';

const getIsOnline = props => {
  switch (props.isOnline) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return null;
  }
};
export const Section = styled.section`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Item = styled.li`
  display: flex;
  border: 1px solid #000;
  border-radius: 4px;
  align-items: center;
`;
export const Photo = styled.img`
  width: 50px;
  border: 1px solid #000;
  border-radius: 4px;
  margin: 5px 10px;
`;
export const Text = styled.p`
  font-size: 16px;
  line-height: 1.07;
  text-align: center;
  letter-spacing: 0.02em;
`;
export const Status = styled.span`
  background-color: ${getIsOnline};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 10px;
`;
