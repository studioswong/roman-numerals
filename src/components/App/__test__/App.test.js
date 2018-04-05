/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import App from '../';

describe('App UI', () => {
    it('should render', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});
