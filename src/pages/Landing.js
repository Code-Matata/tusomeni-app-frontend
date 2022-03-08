import React from "react";
import styled from "styled-components";

export default function Landing() {
  return (
    <MainDiv>
      <RightDiv right>
        <div right>
          <h2>View Papers</h2>
          <p>Revise for your CATs and Exams</p>
          <a href="/papers">
            <button>Go &#8594;</button>
          </a>
        </div>
      </RightDiv>
      <LeftDiv left>
        <div left>
          <h2>Submit your papers</h2>
          <p>Do you have papers you can submit to us in exchange for &#x1F911; &#x1F911;??</p>
          <a href="/submit-paper">
            <button>Yes, show me the money &#8594;</button>
          </a>
        </div>
      </LeftDiv>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    flex-flow: column wrap;
  }
`;

const RightDiv = styled.div`
  background-color: #53354a;
  height: 100vh;
  width: 50%;
  margin: 0;
  color: white;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-end;
  justify-content: center;

  > div {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-end;
    justify-content: center;
    padding: 2em;

    > p {
      color: white;
      margin-top: -0.5em;
    }

    > a {
      text-decoration: none;
      > button {
        height: 2.6em;
        width: 8em;
        border: none;
        border-radius: 5px;
        font-size: 0.8em;
        cursor: pointer;

        :hover {
          background-color: #2b2e4a;
          color: white;
        }
      }
    }
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 50%;
  }
`;

const LeftDiv = styled.div`
  background-color: #464491;
  height: 100vh;
  width: 50%;
  margin: 0;
  color: white;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: center;

  > div {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: center;
    padding: 2em;

    > p {
      color: white;
      margin-top: -0.5em;
    }

    > a {
      text-decoration: none;
      > button {
        height: 2.6em;
        width: auto;
        border: none;
        border-radius: 5px;
        font-size: 0.8em;
        cursor: pointer;
        padding:.5em;

        :hover {
          background-color: #53354a;
          color: white;
        }
      }
    }
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 50%;
  }
`;
