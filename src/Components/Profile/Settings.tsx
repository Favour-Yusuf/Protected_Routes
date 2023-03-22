import React from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";

const Settings: React.FC = () => {
  return (
    <Container>
      <Left></Left>
      <Right>
        <Head></Head>
        <Identity>
          <Image>
            <FaUserAlt />
          </Image>
          <Hold>
            <Name>Favour Yusuf</Name>
            <Email>favouryusf45@gmail.com</Email>
          </Hold>
        </Identity>
        <Content>
          <Profile>
            <p>Profile</p>
            <Input>
              <input type="text" placeholder="FullName" />
              <input type="text" placeholder="Eamil" />
              <input type="text" placeholder="Password" />
            </Input>
          </Profile>
          <Profile>
            <p>Health</p>
            <Input>
              <select>
                {/* <option>Blood-group</option> */}
                <option disabled>select blood group</option>
                <option value="">AA</option>
                <option value="">B</option>
                <option value="">AB</option>
                <option value="">O</option>
              </select>
              <select>
                <option disabled>select Rhesus Factor</option>
                <option value="">Positive</option>
                <option value="">Negative</option>
              </select>
              <select>
                <option disabled>Select blood genotype</option>
                <option value="">AA</option>
                <option value="">AS</option>
                <option value="">AC</option>
                <option value="">SC</option>
                <option value="">SS</option>
              </select>
            </Input>
          </Profile>
          <Profile>
            <p>Change Password</p>
            <Input>
              <input type="text" placeholder="Old-Password" />
              <input type="text" placeholder="New-Password" />
              <input type="text" placeholder="Confirm-password" />
            </Input>
          </Profile>
        </Content>
      </Right>
    </Container>
  );
};

export default Settings;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  border-radius: 5px;

  input {
    border: none;
    height: 40px;
    width: 300px;
    margin-bottom: 15px;
    background-color: #dbdbdb;
    outline: none;
    border-radius: 5px;
    font-size: 15px;
    padding-left: 5px;
  }

  select {
    border: none;
    height: 40px;
    width: 300px;
    margin-bottom: 15px;
    background-color: #dbdbdb;
    outline: none;
    border-radius: 5px;
    font-size: 15px;
  }
`;
const Hold = styled.div`
  margin-left: 10px;
`;
const Img = styled.div``;

const Name = styled.div`
  font-size: 30px;
  margin-bottom: 15px;
`;
const Email = styled.div`
  color: grey;
  //   margin-right: 10px;
`;
const Image = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -30px;
  border-radius: 360px;
  background-color: #c2bdbd;
  margin-left: 5px;
  color: #868686;
  font-size: 60px;
`;

const Identity = styled.div`
  min-height: 100px;
  width: 100%;
  display: flex;
`;

const Profile = styled.div`
  height: 400px;
  margin-left: 5px;

  p {
    font-size: 30px;
    color: #00000032;
    font-weight: bold;
  }
`;

const Right = styled.div`
  width: calc(100% - 250px);
  min-height: 100vh;
`;
const Left = styled.div`
  width: 250px;
  min-height: 100vh;
  background-color: #c987f0;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Head = styled.div`
  height: 170px;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-image: linear-gradient(120deg, #fce579, #9a1ce4);
`;

const Container = styled.div`
  display: flex;
`;
