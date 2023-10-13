import React, {ReactNode} from 'react';
import {Text as RNText, TextProps} from 'react-native';
import styles from './styles';

enum TextSize {
  largeTitle = 'largeTitle',
  mediumTitle = 'mediumTitle',
  smallTitle = 'smallTitle',
  large = 'large',
  normal = 'normal',
  small = 'small',
}

interface TextComponentProps extends TextProps {
  children: ReactNode;
  size?: TextSize;
}

const Text = ({children, style, size, ...otherProps}: TextComponentProps) => {
  return (
    <RNText
      style={[size ? styles[size] : styles.normal, style]}
      {...otherProps}>
      {children}
    </RNText>
  );
};

export {Text, TextSize};
