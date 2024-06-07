import { helper } from '@ember/component/helper';   
import {ROUTE_CONSTANTS} from "./constants/baseConstants";

const getRoute = key => ROUTE_CONSTANTS[key] || '';

export default helper(getRoute)