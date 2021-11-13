import React, { useState } from "react";

export const useNickname = () => {
  const [nickname, setNickname] = useState('');

  return { nickname, setNickname };
}