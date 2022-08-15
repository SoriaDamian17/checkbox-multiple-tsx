import styled from "styled-components";

export const CheckboxContainer = styled.div<{
  direction: string,
}>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;

export const CheckboxItem = styled.div`
  height: 40px;
  font-size: 25px;
  flex-direction: row;
  position: relative;
  display: flex;
  align-items: left;

  @media (max-width: 560px) {
    width: 100%;
  }

  border-radius: 4px;
`;

export const Checkbox = styled.div<{
  key: any,
  pointEvent: boolean,
}>`
  height: 40px;
  font-family: "Montserrat";
  font-size: 17px;
  padding-left: 60px;

  position: relative;
  display: flex;
  align-items: center;
  ${(props) => (props.key === "Other" ? "width: 100%;" : "")}
  border-radius: 4px;

  background-color: ${({ theme }) => theme.palette.grey};

  pointer-events: ${(props) => (props.pointEvent ? "auto" : "none")};

  &::before {
    content: "";
    position: absolute;
    display: block;

    width: 20px;
    height: 20px;

    border-radius: 4px;
    border: ${({ theme }) => `1px solid ${theme.palette.primary}`};
    left: 20px;
    pointer-events: all;
    cursor: pointer;
  }

  &.selected::after {
    content: "";
    position: absolute;
    display: block;

    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid transparent;

    text-align: center;

    left: 20px;

    background-image: url(/images/checkbox-check.png);
    background-size: 20px 18px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const CheckboxInput = styled.input`
  align-self: center;
  background-color: ${({ theme }) => theme.palette.grey};
  border: none;
  font-size: 1.2rem;
  height: 20px;
  line-height: 1rem;
  margin: 0 0 0 1rem;
  min-height: 2rem;
  padding: 0 1rem;
  width: "90%";
  &:disabled {
    background: #cacaca;
  }
`;
