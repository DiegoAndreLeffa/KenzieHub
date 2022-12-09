import styled from "styled-components";

export const StyledFormAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  position: fixed;
  inset: 0;
  z-index: 99;

  background-color: rgba(0, 0, 0, 0.25);

  .modalBoxAdd {
    display: flex;
    flex-direction: column;

    width: 369px;
    height: 342px;

    background: #212529;
    border-radius: 4px;
  }

  .modalBoxTitle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    gap: 10px;

    width: 100%;
    height: 50px;

    background: #343b41;
    border-radius: 4px 4px 0px 0px;
  }
  .modalBoxTitle h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #f8f9fa;
  }
  .closeModal {
    background: transparent;
    padding: 0;
    width: auto;
  }

  .modalBoxBody {
    padding: 12px 20px;
  }

  .modalBoxBody form {
    display: flex;
    flex-direction: column;
    gap: 22px;
    margin-top: 18px;
  }
  .modalBoxBody form label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;

    color: #f8f9fa;
  }
  .modalBoxBody form input,
  select {
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
  .modalBoxBody form input::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;

    color: #c1c2c2;
  }
  .modalBoxBody form select {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;

    color: #f8f9fa;
  }

  .modalBoxBody button {
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

  @media (max-width: 420px) {
    .modalBoxAdd {
      width: 90%;
    }
  }
`;
