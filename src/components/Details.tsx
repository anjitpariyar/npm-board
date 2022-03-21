import React from "react";

const Details = ({ pid }: { pid: number | string | string[] }) => {
  return (
    <div>
      <div>
        <h2>{pid}</h2>
        <div>
          <img
            src="https://images.unsplash.com/photo-1548091790-641ab5796e56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a29yZWFuJTIwYnVzeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            width="100%"
            height="100%"
          />
          <img
            src="https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a29yZWFuJTIwYnVzeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            width="100%"
            height="100%"
          />
          <img
            src="https://images.unsplash.com/photo-1597552661064-af143a5f3bee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            width="100%"
            height="100%"
          />
          <img
            src="https://images.unsplash.com/photo-1608588722960-58755367d304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            width="100%"
            height="100%"
          />
          <div>
            <small>- dc official App</small>
            <h2>- 아크로비스타 쥐붕이 윤카 만난거 자랑좀 함.gif</h2>
            <p>
              역전 뜨자마자 윤카 사는 B동으로 감. 입주민들 이미 꽤 와있더라.
              외부인들은 단지에 못 들어오게 했는데 어느 순간 들여보내니까 너무
              많아서 B동 로비로 가서 엘리베이터 앞에서 대기함. 한 세 시간 이상
              기다린 것 같다. 발에 불나고 허리 ㅈㄴ 아프다 ㅋㅋㅋ 그래도 머통령
              당선되고 처음 대중 앞에 나오는거 보고 악수까지 해서 개뿌듯함.
              역사적인 순간 봐서 기분 개좋다. 다들 쥐나잇.{" "}
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1526675094705-751b333fad0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              width="200px"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
