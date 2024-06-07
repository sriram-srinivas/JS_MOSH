import { helper } from '@ember/component/helper';   
import {LANG_CONSTANTS} from "./constants/baseConstants";

const getLang = key => LANG_CONSTANTS[key] || 'empty'

export default helper(getLang)