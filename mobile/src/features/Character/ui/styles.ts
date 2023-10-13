import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/styleguide/colors';
import {
  horizontalScale,
  verticalScale,
} from '../../../utils/styleguide/dimensions';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: verticalScale(50),
    backgroundColor: colors.primaryBlack,
  },
  header: {
    paddingHorizontal: horizontalScale(28),
    marginTop: verticalScale(50),
    marginBottom: verticalScale(250),
  },
  scroll: {
    backgroundColor: colors.primaryBlack,
  },
  flexOne: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  imageBackground: {
    width: '100%',
    height: verticalScale(500),
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    maxWidth: horizontalScale(200),
    marginBottom: verticalScale(48),
  },
  textWhite: {
    color: colors.primaryWhite,
  },
  name: {
    color: colors.primaryWhite,
    marginTop: verticalScale(8),
  },
  content: {
    flex: 1,
    paddingHorizontal: horizontalScale(24),
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(24),
  },
  info: {
    alignItems: 'center',
  },
  infoLabel: {
    marginTop: verticalScale(12),
  },
  biography: {
    color: colors.primaryWhite,
    marginBottom: verticalScale(32),
  },
  subtitle: {
    marginBottom: verticalScale(24),
  },
  ability: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(24),
  },
  abilityLabel: {
    marginRight: horizontalScale(30),
  },
  abilityBarContainer: {
    flexDirection: 'row',
  },
  abilityBar: {
    height: verticalScale(8),
    width: horizontalScale(1),
    marginRight: horizontalScale(4),
  },
  abilityBarWhite: {
    backgroundColor: colors.primaryWhite,
  },
  abilityBarDark: {
    backgroundColor: colors.primaryDark,
  },
  otherInfoContainer: {
    marginBottom: verticalScale(32),
  },
  movies: {
    paddingHorizontal: horizontalScale(24),
    paddingBottom: verticalScale(50),
  },
  movie: {
    height: verticalScale(230),
    width: horizontalScale(153),
    marginRight: horizontalScale(14),
    borderRadius: 16,
  },
  moviesLabel: {
    paddingHorizontal: horizontalScale(24),
  },
});

export default styles;
