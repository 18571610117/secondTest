/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-08-04 15:58:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-04 16:01:55
 */

import common from './module/common.js';
import gateway from './module/gateway.js';
import home from './module/home.js';
import sys from './module/sys.js';

let API = {
  ...home,
  ...common,
  ...sys,
  ...gateway,
};
export default API;
