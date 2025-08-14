import React from "react";
import styled from "styled-components";

const LoadingScreen = () => {
  return (
    <StyledWrapper>
      <div className="progress-loader">
        <div className="progress" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .progress-loader {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    width: 150px;
    background: rgba(236, 236, 238, 0.253);
    height: 10px;
    border-radius: 7px;
    overflow: hidden;
  }

  .progress {
    width: 1px;
    height: 10px;
    border-radius: 7px;
    background: #000000;
    transition: 0.5s;
    animation: loading_44 5s cubic-bezier(0.4, 1.01, 1, 1) infinite;
  }

  @keyframes loading_44 {
    0% {
      width: 0%;
    }

    50% {
      width: 100%;
    }

    100% {
      width: 0%;
    }
  }
`;

export default LoadingScreen;
