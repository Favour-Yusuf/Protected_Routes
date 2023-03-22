import React from "react";
import styled from "styled-components";
import DashSiderBar from "./DashSiderBar";
import pics from "../Assets/Medical-logo.png";

const DashHeader = () => {
  return (
    <div>
      <Head>
        <Logo src={pics} />
      </Head>
      <Side>
        <DashSiderBar />
      </Side>
    </div>
  );
};

export default DashHeader;

const Logo = styled.img`
  height: 130%;
`;

const Side = styled.div``;
const Head = styled.div`
  height: 60px;
  width: 100%;
  background-color: white;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  position: fixed;
`;
