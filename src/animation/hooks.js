import {useState} from "react";

export function HandleChange(initVal) {
  const [result, setResult] = useState(initVal || "");

  function handler(e) {
    setResult(e.target.value);
  }

  return [result, handler];
}
