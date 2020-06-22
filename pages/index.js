/* global Audio */

import React from 'react';
import styled from 'styled-components';

import { Col, Button } from 'components';

const MyPage = styled(Col)`
  width: 100%;
  height: 100%;
  background: #e8ded9;
  justify-content: space-around;
  align-items: center;
  color: white;
`;
const TextContainer = styled(Col)`
  width: 550px;
  height: 80px;
  font-size: 24px;
  text-align: right;

  color: black;
`;

const PicContainer = styled(Col)`
  width: 200px;
  height: 200px;

  margin-bottom: 20px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 1px 8px 8px rgba(0, 0, 0, 0.1);
`;

const MyButton = styled(Button)`
  border-bottom: none;

  img {
    max-width: 60px;
  }

  &:hover {
    background: none;
    img {
      max-width: 80px;
    }
  }
`;

const Audios = [
  //
  '/Aspirin.mp3',
  '/Adventures.mp3',
  '/Breakfast.mp3',
  '/Eagle.mp3',
  '/ShitHappens.mp3',
  '/HeyGirl.mp3',
  '/Hug.mp3',
  '/ILoveYou.mp3',
  '/Kamazhay.mp3',
  '/Kolbaski.mp3',
  '/Music.mp3',
  '/NaebniVodki.mp3',
  '/RedDress.mp3',
  '/SherlockKeks.mp3',
  '/Sing.mp3',
  '/TheDarkestHour.mp3',
  '/Traktuy.mp3',
];

function RandomAudio() {
  const myAudio = Audios[Math.floor(Math.random() * Audios.length)];
  // myAudio.play();
  console.log(myAudio);
  const myAudioFile = new Audio(myAudio);
  myAudioFile.play();
}
function Index() {
  return (
    <MyPage>
      <TextContainer>
        <span>Симулятор Саши.</span>
        <span>Открой бутылку и жми накнопку.</span>
      </TextContainer>
      <PicContainer>
        <img
          src="/SashaPic.JPG"
          alt="Тут должна быть моя рожа"
          width="200px"
          height="200px"
        />
      </PicContainer>

      <MyButton onClick={RandomAudio}>
        <img src="/speaker.png" />
      </MyButton>
    </MyPage>
  );
}

export default Index;
