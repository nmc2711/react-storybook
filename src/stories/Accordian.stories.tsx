import Accordian from "./ui/accordian";
import QnaImg from './assets/qna.png';
import RainImg from './assets/rain.jpeg'

export default {
  title: "Custom-UI/Accordian",
};

const dataItems = [
  {
    title: '질문1 : Yes, React님의 개발 경력은 어떻게되시나요?',
    content: '2019년 11월 부터 시작하여 현재 2년의 프론트엔드 개발 경력을 가지고있습니다.',
    expanded: true,
    id: '2',
  },
  {
    title: '질문2 : Yes, React님은 현재 어디서 근무하고 계신가요?',
    content: '혜리로 유명한 다방! 부동산중개 웹/앱 서비스 Station3의 프론트엔드 개발자로 근무하고 있습니다.',
    expanded: true,
    id: '1',
  },
  {
    title: '질문3 : Yes, React님은 얼굴은 어떻게 생기셨죠?',
    content: '허허허... 뚱냥이를 닮아서 지인의 귀여운 고양이 사진으로 대체하면 안되겠습니까...',
    contentImg: 'https://ca.slack-edge.com/T02T2D5E4-U020P58RK8S-a4b36ee53a9a-512',
    expanded: true,
    id: 'img3',
  },
];

  const testItems = [
    {
      title: '질문 1: 빗소리도 음성 자극으로 심적 안정을 유도하는 `ASMR`의 일종이라 볼 수 있을까요?',
      content: `네, 빗소리에 기대 잠드는 것도 결국엔 소리로 자율신경을 자극해
       정신건강에 도움을 받는 기법이니,ASMR의 정의와 들어맞는다 볼 수 있겠죠.
       비바람 소리뿐 아니라 긴장완화·숙면유도 효능이 있는 ASMR 대부분은 저주파 백색소음을 담아 뇌파를
       세타파나 델타파 쪽으로 끌어당기는 기능을 합니다.`,
      id: 'faq2',
      expanded: true,
    },
    {
      title: '질문 2: 하지만 빗소리가 도리어 잠에 방해된다는 사람도 있는 건 왜일까요?',
      content: `같은 약이라도 환자 몸 상태에 따라 반응이 다르게 나타날 수 있듯,
       빗소리에 뇌파가 움직이는 정도 역시 사람에 따라 개인차가 존재합니다.
       또한 개인의 취향에 따라 선호하는 소리도 제각각이기 때문에, 빗소리 자체에 매력을 느끼지 못하거나
       거슬려하는 사람 역시 얼마든지 있을 수 있죠. 노래 같은 경우에도,
       암만 명곡이라 한들 모든 사람이 좋아하는 건 아니니까요.`,
      id: 'faq1',
      expanded: false,
    },
    {
      title: (
        <div>
          <img src={QnaImg} style={{ width: '20px', verticalAlign: 'top', marginRight: '6px' }} alt="아이콘이미지"/>
          <span>요청: Yes, React님 빗소리에 관련된 사진하나만 추천해주실수 있을까요?</span>
        </div>
      ),
      content: (
        <>
          <p>
            도심속에 바쁜삶에 지친 질문자님을 위해서 사찰에서의 비 사진을 추천드립니다. <br />
            즐거운 시간보내세요 :)
          </p>
          <img src={RainImg} alt="비이미지"/>
        </>
      ),
      id: 'tags',
    },
  ];
export const HardCodingType = () => {
  return (
   <Accordian items={testItems} bordered={true} />
  );
};

export const ResponseDatasType = () => {
  return (
    <Accordian items={dataItems} multiselectable={true} />
  );
};


