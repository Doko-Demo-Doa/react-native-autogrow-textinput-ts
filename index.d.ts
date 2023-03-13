import { TextInputProps } from "react-native";

interface Props extends TextInputProps {
  enableScrollToCaret?: boolean
  minHeight?: number
  maxHeight?: number
}

export default Props;