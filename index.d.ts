import React from "react";
import { TextInputProps } from "react-native";

export interface AutoGrowTextInputProps extends TextInputProps {
  enableScrollToCaret?: boolean
  minHeight?: number
  maxHeight?: number
}

declare const AutoGrowTextInput: React.SFC<AutoGrowTextInputProps>

export default AutoGrowTextInput
