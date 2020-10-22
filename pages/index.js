/* global Audio */

import React from 'react';
import styled from 'styled-components';

import { Col, Button, Row } from 'components';

const MyPage = styled(Col)`
  width: 100%;
  height: 100%;
  background: #e8ded9;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ElementsLayer = styled(Col)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const PurpleCircleContainer = styled(Col)`
  transition: all 0.4s ease;

  min-width: 607px;
  min-height: 607px;
  border-radius: 50%;
  background: #5a1f6f;
  box-shadow: 0px 7px 30px rgba(90, 31, 111, 0.5);
  position: absolute;
  top: -35%;
  left: -25%;

  &:hover {
    background: #07bad2;
    box-shadow: 0px 7px 30px rgba(7, 186, 210, 0.3);
  }
`;

const WhiteCircleContainer = styled(Col)`
  transition: all 0.4s cubic-bezier(0.91, 0.37, 0.17, 0.67);
  min-width: 350px;
  min-height: 350px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: -16%;
  right: -8%;
  box-shadow: 0px 7px 30px rgba(63, 163, 163, 0.1);

  &:hover {
    top: -10%;
    right: -2%;
  }
`;

const GreyCircleContainer = styled(Col)`
  position: absolute;
  bottom: 15%;
  right: 20%;

  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  background: grey;

  @keyframes myAnimation {
    0% {
      background: red;
    }
    100% {
      background: blue;
    }
  }

  &:hover {
    animation: 3s linear infinite myAnimation;
  }
`;

const GreenCircleContainer = styled(Col)`
  position: absolute;
  bottom: 5%;
  right: 15%;
  min-width: 70px;
  min-height: 66px;
  border-radius: 50%;
  background: #129436;
  box-shadow: 0px 7px 30px rgba(27, 163, 15, 0.3);

  &:hover {
    transform: scale(1.2, 1.2);
  }
`;

const TextContainer = styled(Col)`
  width: 550px;
  pointer-events: none;

  @media (max-width: 900px) {
    width: 256px;
  }

  @media (max-width: 256px) {
    width: 50px;
  }

  height: 80px;
  position: absolute;
  top: 8%;
  right: 5%;
  font-size: 24px;
  text-align: right;

  color: black;
`;

const CenterContainer = styled(Col)`
  width: 300px;
  align-items: center;
  justify-content: space-between;
  min-height: 310px;
  z-index: 10;
`;

const PicContainer = styled(Col)`
  width: 220px;
  height: 220px;

  border-radius: 50%;
  background: #e07373;
  overflow: hidden;
  border: 2px solid grey;
  box-shadow: 1px 8px 30px rgba(0, 0, 0, 0.2);

  img {
    width: 210px;
  }
`;

const MyButton = styled(Button)`
  border-bottom: none;
  padding: 0;
  justify-content: center;
  margin-left: 5px;

  img {
    max-width: 60px;
  }

  &:hover {
    background: none;
    img {
      max-width: 70px;
    }
  }
`;

const Audios = [
  //
  '/Aspirin.mp3',
];

let currentAudio = null;

function RandomAudio() {
  const myAudio = Audios[Math.floor(Math.random() * Audios.length)];
  const myAudioFile = new Audio(myAudio);

  if (currentAudio !== null) {
    currentAudio.pause();
  }

  myAudioFile.play();
  currentAudio = myAudioFile;
}
function Index() {
  return (
    <MyPage>
      <CenterContainer>
        <PicContainer>
          <img src="/SashaPic.png" alt="Тут должна быть моя рожа" />
        </PicContainer>
        <MyButton onClick={RandomAudio}>
          <img src="/sound-on.png" />
        </MyButton>
      </CenterContainer>

      <ElementsLayer>
        <PurpleCircleContainer />
        <WhiteCircleContainer />

        <TextContainer>
          <span>Симулятор Саши.</span>
          <span>Открой бутылку и жми на кнопку.</span>
        </TextContainer>

        <GreyCircleContainer />
        <GreenCircleContainer />
      </ElementsLayer>
    </MyPage>
  );
}

export default Index;
