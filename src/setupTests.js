import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() }); //configuration so that can use on react v16 and above

//this file is enzyme configuration file
//enzyme is used to test react component while jest provide test setup
