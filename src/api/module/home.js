/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-08-04 15:58:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-05 09:45:15
 */
export default {
  // 登录
  login: 'base/login.do',
  imageCode: 'common/imageCode.do',
  /* 首页模块 注：访问足迹应该是本地自动计算*/
  openList: 'core/operList.do', // 待办事项
  menuQuickList: 'core/menuQuickList.do', //快捷入口库
  quickMenuSave:'core/quickMenuSave.do', //设置快捷菜单
  topNoticeList: 'base/topNoticeList.do', //首页公告
  // 公告接口
  sysParamList: 'system/sys_paramList.do', // 公告管理 - 法人编号，状态 。路由规则定义 - 规则状态
  organTreeList: 'core/organTreeList.do', // 机构编号
  // 用户信息
  userInfo: 'core/userSessLoad.do',
  // 菜单权限
  roleMenuList: 'core/roleMenuList.do',
  /* 登录退出 */
  loginStatusCheck: 'base/loginStatusCheck.do',
  /* 修改密码 */
  userPwdModi:'core/userPwdModi.do'
};
