import {useEffect, useState} from "react";

const Hook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  console.log('before useEffect');

  // 컴포넌트의 element가 dom에 다 렌더링 된 후 콜백함수가 실행된다.
  useEffect(() => {
    console.log('called1');
  }, [isLoading]);

  // 훅 간의 실행 순서는 보장된다.
  useEffect(() => {
    console.log('called2');
  }, []);
  // dependency, 콜백함수가 가진 디펜던시, []이면 첫 렌더링 이후에만 실행

  console.log('after useEffect');

  return <div>
    <div> {isLoading ? '로딩중...' : '로딩 완료'}</div>
    <div> {isLoading2 ? '로딩중...' : '로딩 완료'}</div>
    <button onClick={() => setIsLoading(!isLoading)}>로딩 버튼 </button>
    <button onClick={() => setIsLoading2(!isLoading2)}>로딩 버튼 </button>
  </div>;
};

export default Hook;