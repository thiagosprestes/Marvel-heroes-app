import React, {ReactElement, ReactNode} from 'react';
import {Text as RNText, TextProps} from 'react-native';
import styles from './styles';

enum TextSize {
  largeTitle = 'largeTitle',
  mediumTitle = 'mediumTitle',
  smallTitle = 'smallTitle',
  normal = 'normal',
}

interface TextComponentProps extends TextProps {
  children: ReactNode;
  size?: TextSize;
}

const Text = ({children, size, ...otherProps}: TextComponentProps) => {
  return (
    <RNText style={size ? styles[size] : styles.normal} {...otherProps}>
      {children}
    </RNText>
  );
};

export {Text, TextSize};
