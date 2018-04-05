/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import Form from '../';

describe('Form UI', () => {
    it('should render', () => {
        const wrapper = shallow(<Form />);
        expect(wrapper).toMatchSnapshot();
    });

});