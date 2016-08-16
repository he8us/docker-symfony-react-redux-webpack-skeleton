import React from 'react';
import {shallow} from 'enzyme';
import {expect} from "chai";
import Demo from '../../src/components/Demo';

describe('Demo component', () => {
    it('should render "Hello World" if no name is given', () => {
        let wrapper = shallow(<Demo />);
        expect(wrapper.text()).to.equal('Hello World');
    });

    it('should render "Hello {name}" if the name is given', () => {
        let wrapper = shallow(<Demo name="Cedric" />);
        expect(wrapper.text()).to.equal('Hello Cedric');
    });
});
