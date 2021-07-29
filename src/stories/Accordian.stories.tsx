import Accordian from "./ui/accordian";


export default {
  title: "Custom-UI/Accordian",
};

  const testItems = [
    {
      title: '아코디언 테스트',
      content: '아코디언입니다.',
      id: 'normal',
      expanded: true,
    },
    {
      title: (
        <div>
          <span>아이콘</span>
          <em>아코디언 테스트</em>
        </div>
      ),
      content: (
        <>
          <p>
            아코디언 dom ptag.
          </p>{' '}
          <ul>
            <li>li tag</li>
            <li>contents</li>
          </ul>
        </>
      ),
      id: 'tags',
    },
  ];
export const Default = () => {
  
  return (
   <Accordian items={testItems} bordered={true} />
  );
};


