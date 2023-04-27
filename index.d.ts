import React from 'react';
import {TextInputProps} from 'react-native';

declare module 'react-native-autogrow-textinput-ts' {
  export interface AutoGrowTextInputProps extends TextInputProps {
    enableScrollToCaret?: boolean;
    minHeight?: number;
    maxHeight?: number;
  }

  export default class AutoGrowingTextInput extends React.Component<AutoGrowTextInputProps> {}
}
