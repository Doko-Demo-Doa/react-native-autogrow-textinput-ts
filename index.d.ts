import React from "react";
import { TextInputProps } from "react-native";

export interface AutoGrowTextInputProps extends TextInputProps {
  enableScrollToCaret?: boolean
  minHeight?: number
  maxHeight?: number
}

declare const AutoGrowTextInput: React.FC<AutoGrowTextInputProps>

export default AutoGrowTextInput
