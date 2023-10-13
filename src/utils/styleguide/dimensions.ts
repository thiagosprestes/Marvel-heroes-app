import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineWidth = 375;
const guidelineHeight = 812;

const horizontalScale = (size: number) => (width / guidelineWidth) * size;
const verticalScale = (size: number) => (height / guidelineHeight) * size;

export {horizontalScale, verticalScale};
