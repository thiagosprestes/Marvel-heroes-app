import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
} from '../../../utils/styleguide/dimensions';
import {colors} from '../../../utils/styleguide/colors';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    // flex: 1,
    paddingHorizontal: horizontalScale(24),
  },
  header: {
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    color: colors.primaryGrey,
    marginBottom: verticalScale(8),
  },
  title: {
    fontWeight: 'bold',
    marginBottom: verticalScale(32),
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(48),
  },
  category: {
    height: verticalScale(56),
    width: horizontalScale(56),
    backgroundColor: colors.gradientBlue.bottom,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
