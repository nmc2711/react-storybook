import React, { useEffect } from "react";
import "./toast.css";

export interface ToastProps {
  id: string; // 고유값
  destroy: () => void; // UI에서 토스트 컴포넌트를 제거하는 함수
  title: string; // 사용자에게 표시 할 토스트 제목
  content: string; // 사용자에게 표시 할 토스트 컨텐츠
  duration?: number; // 토스트 지속 시간
}

const Toast: React.FC<ToastProps> = (props) => {
  const { id, destroy, title, content, duration = 0 } = props;

  useEffect(() => {
    // 기본 duration을 0 으로 잡지만, 클로즈로 컴포넌트를 날려 토스트에 대한 정보가 나라갈경우에
    // 버블링을 통한 아래 로직 실행 방지
    if (!duration) return;

    const timer = setTimeout(() => {
      destroy();
    }, duration);

    return () => clearTimeout(timer);
  }, [destroy, duration]);

  return (
    <div>
      <div className="toast-header">
        <div>
          {title}
          {/* {title} {id} */}
        </div>
        <button onClick={destroy}>닫기</button>
      </div>
      <div className="toast-body">{content}</div>
    </div>
  );
};

export default Toast;
