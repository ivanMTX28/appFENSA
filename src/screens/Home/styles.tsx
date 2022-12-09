import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  card: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  data: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#BDBDBD',
    borderRadius: 15,
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'left',
  },
  money: {
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'left',
  },
  photo: {
    borderRadius: 15,
  },
});

export default styles;
