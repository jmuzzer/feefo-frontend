import styled from 'styled-components';

interface ButtonProps {
  useStateFn: () => void;
  name: string;
}

const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: #0077ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #005fcc;
  }
`;

export function Button({ useStateFn, name }: ButtonProps) {
  return <StyledButton onClick={useStateFn}>{name}</StyledButton>;
}
