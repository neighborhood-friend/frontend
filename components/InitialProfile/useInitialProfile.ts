import { useState } from "react";

export const useInitialProfile = () => {
  const [validated, setValidated] = useState(false);

  const validate = () => {
    // TODO: API 요청 필요
    alert('중복 확인 완료')
    setValidated(true);
  }

  return { validated, validate };
}