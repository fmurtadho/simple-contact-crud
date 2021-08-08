import { Colors } from '../../Theme';

const Styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.GREY_SOLITUDE,
  },
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
    elevation: 3,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.GREY_MERCURY,
    borderRadius: 4,
    elevation: 3,
    marginBottom: 8,
    paddingHorizontal: 8,
    backgroundColor: Colors.WHITE,
  },
  textInputLabel: {
    marginBottom: 2,
    marginLeft: 8,
  },
  deleteButtonContainer: {
    marginTop: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREY_SOLITUDE,
  },
};

export { Styles };
