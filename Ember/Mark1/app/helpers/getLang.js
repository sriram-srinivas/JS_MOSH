import { helper } from '@ember/component/helper';   
import LANG_CONSTANTS from "./constants";


export function getLang(key){
    console.log('>>key',key);
    return LANG_CONSTANTS[key] || '';
}

export default helper(getLang)