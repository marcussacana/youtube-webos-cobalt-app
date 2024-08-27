import { configRead } from './config';

export function userScriptStartNonStop() {}

const KEY_CODE = 33;
 
const KEY_PRESS_INTERVAL = 10000;
 
 
function pressKey() {
  if (!configRead('enableNonStop')){
    return;
  }
  document.dispatchEvent(new KeyboardEvent('keydown', {
    keyCode: KEY_CODE,
  }));
}
 
setInterval(pressKey, KEY_PRESS_INTERVAL);
