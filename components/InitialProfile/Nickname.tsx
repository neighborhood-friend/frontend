import styled from "@emotion/native";
import React from "react";
import { TextInput, View } from "react-native";
import { BasicButton } from "../../common-ui/BasicButton";
import { Kind } from "../../common-ui/Kind";
import { UiColors } from "../../common-ui/UiColors";
import { useNickname } from "./useNickname";

type NicknameProps = {
  validate: () => void;
  validated: boolean;
}

export const Nickname = ({ validate, validated }: NicknameProps) => {
  const { nickname, setNickname } = useNickname();
  return (
    <Section>
      <TextInput maxLength={20} placeholder='닉네임을 입력해주세요.' autoFocus={true} value={nickname} onChange={e => setNickname(e.nativeEvent.text)} />
      <BasicButton kind={Kind.Outline} text='중복확인' round onPress={validate} />
    </Section>
  )
};

const Section = styled(View)`
  width: 100%;
  margin-top: 48px;
  padding-bottom: 8px;
  borderBottomWidth: 1px;
  borderColor: ${UiColors.gray[300]};
  flex-direction: row;
  justifyContent: space-between;
`;
