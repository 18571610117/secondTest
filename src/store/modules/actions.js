/*
 * @Description: actions 异步提交
 * @Version: 2.0
 * @Autor: wuwei
 * @Date: 2021-07-29 16:59:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-06 21:59:12
 */
import http from "../../utils/request";
export default {
  /**
   * @description: 菜单列表
   * @param {*}
   * @return {*}
   */
  menusList({ commit }) {
    http.post().then((result) => {
      commit("menusList", result.LIST);
    });
  },
}
