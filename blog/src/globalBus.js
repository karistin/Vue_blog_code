import Vue from "vue";

const globalBus = new Vue({
  data: {
    posts: [
      {
        index: 1,
        header: "<strong>Vue.js로 만들어 보는 정적 블로그 호스팅</strong>",
        subtitle: "2020-04-03",
        text:
          "<strong>대한민국(大韓民國)</strong>, 약칭 한국(韓國)은 동북아시아의 한반도에 위치한 민주공화국이다.대한민국 헌법상 영토는 한반도와 부속 도서이지만 실효 지배하는 지역은 휴전선 이남이며 면적은 10만378㎢로 한반도의 44.9%(약 45%)에 해당한다. 인구는 약 5200만명으로[30] 한반도 전체 인구의 66.8%(3분의 2) 가량을 차지한다. 대한민국은 한반도 이북 지역의 북한보다 면적은 약간 작지만 인구는 두 배 이상 많다. 1919년 3·1 운동을 통해 독립선언을 하여 같은 해 중화민국 상하이에서 대한민국 임시정부를 수립하였으며, 광복 이후 1948년 8월 15일 이념 대립을 통해 둘로 나뉘어진 한반도의 남부에서 임시정부의 법통을 계승한 자유민주주의 대한민국 정부가 수립되었다.정부 수립 초기에 북한의 기습남침으로 한국전쟁을 치렀으며, 전후 세계 최빈국으로 전락하는 국난을 겪었으나 냉전체제의 최전방이라는 지정학적 특성으로 미국을 비롯한 자본주의 진영의 지원을 받을 수 있었고, 제3공화국 이후 수출과 제조업 집중 육성 및 새마을운동을 통한 고도성장을 거듭하여 경제 성장을 이루었다.대한민국은 OECD 출범 이후 원조를 받던 수혜국에서 원조를 주는 공여국으로 바뀐 최초의 나라이며[31] 민주화와 산업화를 동시에 이룩하고 경제 대국 반열에 선 몇 안 되는 나라이기도 하다."
      },
      {
        index: 2,
        header: "군인",
        subtitle: "2020-04-03",
        text:
          "군대에 소속되어 있는 사람. 국민과 국가에 헌신하고 고도의 숙련을 요하는 전문직종이며육체노동의 최고위 직종이다. 기본적으로 정식 국가의 정규군에 소속되어 있는 사람들을 칭하며,보통 돈만 받고 싸우는 용병은 이렇게 칭하지는 않는다. 대부분 남성 군인이지만, 여성 군인도 있다.군인 대신에 장교와 준사관, 부사관, 병을 통틀어 일컫는 장병이라는 말도 있다. 여기서 장은 장교의 장이지,건장하다는 뜻의 장이 아니다. 그러므로 군인 혹은 장병이라는 단어로 징병검사에서 현역 판정을 받고 징집된 현역병들만을지칭하는 것은 적절하지 않지만, 대한민국에서는 현역병들만을 한정하여 일컫는 경우가 상당히 많다. 단, 대한민국 군무원의 경우군인 혹은 장병이라고 지칭하지 않는다. 군무원은 군대에서 일을 하는 민간인이기 때문이다. 물론 군무원은 일반 공무원이 민사법에의해 통제받는 것과 다르게 장교, 준사관, 부사관, 병과 동일하게 군형법에 의해 통제를 받는다"
      }
    ]
  }
});

export default globalBus;
