import styled from 'styled-components';

function addHoverEffect({ disabled }) {
  if (disabled) return '';

  return `
  &:hover {
      color: black;
      background: white;
  }
  `;
}

function addDisabledEffect({ disabled }) {
  if (!disabled) return '';

  return `
      color: #d2d2d2;
      background: #f3f3f3;
    `;
}

export default styled.button`
  border: none;
  display: inline-block;

  padding: 40px;

  cursor: pointer;
  user-select: none;

  color: white;
  background: none;
  text-transform: uppercase;
  font-size: 14px;
  transition: all 0.4s ease 0s;
  border-bottom: 1px solid #cbffe1;
  font-family: Montserrat, sans serif;

  &:focus {
    outline: none;
  }

  > * {
    margin-right: 10px;
  }

  ${addHoverEffect}
  ${addDisabledEffect}
`;
