import styled from "styled-components";

export const StyledRegister = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 40px;

  .divLogo {
    display: flex;
    justify-content: space-between;
    width: 369px;
    height: auto;
    margin-bottom: 40px;
    margin-top: 50px;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 67.49px;
    height: 40.11px;

    background: #212529;
    border-radius: 4px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;

    text-align: center;

    color: #f8f9fa;
    text-decoration: none;
  }

  @media (max-width: 420px) {
    .divLogo {
      width: 90%;
    }
  }
`;
