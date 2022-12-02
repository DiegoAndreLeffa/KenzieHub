import styled from "styled-components";

export const StyledFormLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px 22px;
  gap: 22px;

  width: 369px;
  height: auto;

  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  h1 {
    width: 49px;
    height: 28px;

    margin-bottom: 22px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: auto;

    gap: 22px;
  }

  form label {
    width: 31px;
    height: 0px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;

    color: #f8f9fa;
  }
  form input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    background: #343b41;

    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
  }

  form input :: placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;

    color: #868e96;
  }

  form button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    background: #ff577f;

    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #ffffff;
  }

  small {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;

    color: #868e96;

    margin-top: 12px;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    background: #868e96;

    border: 1.2182px solid #868e96;
    border-radius: 4px;

    text-decoration: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #f8f9fa;
  }

  @media (max-width: 420px) {
    width: 90%;
  }
`;
