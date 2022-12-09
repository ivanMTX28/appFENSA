/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';
import HomeScreen from '../src/screens/Home/homeScreen';

let component: any;

describe('<HomeScreen />', () => {
  beforeEach(() => {
    component = render(<HomeScreen />);
  });

  it('renders correctly', () => {
    // render.create(<HomeScreen />);
    expect(component).toBeDefined();
  });
});
