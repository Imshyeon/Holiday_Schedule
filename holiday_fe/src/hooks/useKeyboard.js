import { useEffect, useState } from "react";

export default function useKeyboard(inputCategory) {
  const [category, setCategory] = useState(inputCategory); // 카테고리 저장
  // space, comma 키 입력 -> 카테고리 컴포넌트
  useEffect(
    (key) => {
      if (key === "Comma" || key === "Space") {
        console.log(key);
        setCategory((prevCategory) => {
          return [...prevCategory, inputCategory];
        });
      }
    },
    [inputCategory]
  );

  // backspace(혹은 클릭) 입력된 카테고리 컴포넌트 삭제
  return {
    category,
    setCategory,
  };
}
