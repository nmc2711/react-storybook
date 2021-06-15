import { useEffect } from "react";
declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  /*global kakao*/
  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById("map"),
        options = {
          center: new window.kakao.maps.LatLng(37.566826, 126.9786567), // 위도, 경도 입력
          level: 3,
          scrollwheel: false,
          draggable: false,
        };
      const map = new window.kakao.maps.Map(container, options); // 지도그리기
      const circle = new window.kakao.maps.Circle({
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567), // 위도, 경도 입력
        radius: 50,
        strokeWeight: 5,
        strokeColor: "#ffa409",
        strokeOpacity: 1,
        strokeStyle: "dashed",
        fillColor: "#ffa409",
        fillOpacity: 0.5,
      });

      circle.setMap(map); // 지도에 원 표시하기
    });
  });

  return (
    <div id="map">
      <button>로드뷰보기</button>
    </div>
  );
};

export default Map;
