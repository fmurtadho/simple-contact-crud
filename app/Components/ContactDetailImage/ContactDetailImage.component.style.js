import { Colors } from '../../Theme';

const Styles = {
  photoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  photoPlaceholder: {
    backgroundColor: Colors.WHITE,
    height: 200,
    width: 200,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.GREY_MERCURY,
    elevation: 3,
  },
  photo: {
    height: 200,
    width: 200,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.GREY_MERCURY,
    backgroundColor: Colors.WHITE,
  },
};

export { Styles };
