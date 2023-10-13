import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/styleguide/colors';
import {
  horizontalScale,
  verticalScale,
} from '../../../utils/styleguide/dimensions';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: verticalScale(500),
    paddingTop: verticalScale(40),
    backgroundColor: colors.primaryBlack,
  },
  header: {
    paddingHorizontal: horizontalScale(28),
  },
  gradient: {
    flex: 1,
  },
});

export default styles;
