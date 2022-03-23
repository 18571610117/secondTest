/*
 * @Description: 处理树结构
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-08-04 15:55:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-06 22:01:31
 */
function getTrees(list, parent_id = 0) {
  let parentObj = {};
  list.forEach((o) => {
    parentObj[o.ID] = o;
  });
  if (!parent_id) {
    return list
      .filter((o) => !parentObj[o.PARENT_ID])
      .map((o) => ((o.children = getTrees(list, o.ID)), o));
  } else {
    return list
      .filter((o) => o.PARENT_ID == parent_id)
      .map((o) => ((o.children = getTrees(list, o.ID)), o));
  }
}

export default getTrees;
