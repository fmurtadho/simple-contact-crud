import { Colors } from '../../Theme';

const Styles = {
  container: {
    padding: 16,
    backgroundColor: Colors.GREY_SOLITUDE,
    flexGrow: 1,
  },
  item: {
    borderWidth: 1,
    borderColor: Colors.GREY_MERCURY,
    flexDirection: 'row',
    elevation: 4,
    borderRadius: 8,
    backgroundColor: Colors.WHITE,
    padding: 16,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 8,
    marginRight: 8,
  },
  avatarPlaceholder: {
    height: 40,
    width: 40,
    borderRadius: 8,
    marginRight: 8,
  },
  name: {
    fontSize: 16,
    alignSelf: 'center',
    color: Colors.BLACKISH,
  },
  separator: {
    height: 16,
  },
};

export { Styles };
