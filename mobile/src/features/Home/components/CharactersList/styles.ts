import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/styleguide/colors';
import {
  verticalScale,
  horizontalScale,
} from '../../../../utils/styleguide/dimensions';

const styles = StyleSheet.create({
  section: {
    flex: 1,
    marginBottom: verticalScale(48),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: horizontalScale(24),
    marginBottom: verticalScale(16),
  },
  sectionTitle: {
    color: colors.primaryRed,
  },
  seeMore: {
    color: colors.primaryGrey,
  },
  characterImage: {
    width: horizontalScale(140),
    height: verticalScale(230),
    marginRight: horizontalScale(16),
  },
  characterImageBackground: {
    borderRadius: 16,
  },
  characterImageGradient: {
    flex: 1,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: 'flex-end',
    padding: horizontalScale(12),
  },
  charactersList: {
    paddingHorizontal: horizontalScale(24),
  },
  characterAlterEgo: {
    color: colors.primaryWhite,
    marginBottom: verticalScale(4),
  },
  characterName: {
    color: colors.primaryWhite,
  },
});

export default styles;
