/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-08-06 16:36:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-18 11:04:09
 */
export default {
  /* 公共服务-渠道菜单管理 */
  chnlTypeList: "base/chnlTypeList.do", // 渠道类型
  pubMenuList: "pub/pubMenuList.do", // 列表
  pubMenuAdd: "pub/pubMenuAdd.do", // 新增
  pubMenuUpd: "pub/pubMenuUpd.do", // 修改
  pubMenuDel: "pub/pubMenuDel.do", // 删除
  /* 公共服务-渠道菜单分类管理 */
  pubClassifyMenuList: "pub/pubMenuClassPageQry.do", // 列表
  pubClassifyMenuAdd: "pub/pubMenuClassAdd.do", // 新增
  pubClassifyMenuDel: "pub/pubMenuClassDel.do", // 删除
  pubMenuClassUpd: "pub/pubMenuClassUpd.do", // 修改
  pubClassifyMenDis: "pub/pubMenuClassAlotMenu.do", // 分配菜单提交
  pubMenuClassRelList: "pub/pubMenuClassRelList.do", // 分配渠道菜单
  /* 公共服务-菜单组管理 */
  PubMenuGrpPageQry: "pub/PubMenuGrpPageQry.do", // 查询
  PubMenuGrpAdd: "pub/PubMenuGrpAdd.do", // 新增
  PubMenuGrpUpd: "pub/PubMenuGrpUpd.do", // 修改
  PubMenuGrpDel: "pub/PubMenuGrpDel.do", // 删除
  pubMenuGrpDefinedAlotMenu: "pub/pubMenuGrpDefinedAlotMenu.do", // 分配菜单提交
  pubMenuGrpRelDetail: "pub/pubMenuGrpRelDetail.do", // 渠道菜单授权回显
  /* 公共服务-银行公告 */
  pubNoticePageQry: "pub_chnl/pubNoticePageQry.do", // 列表
  pubNoticeUpd: "pub_chnl/pubNoticeUpd.do", // 修改
  pubNoticeAdd: "pub_chnl/pubNoticeAdd.do", // 新增
  pubNoticeDel: "pub_chnl/pubNoticeDel.do", // 删除
  /* 公共服务-企业查询 */
  qryEmpList: "pub/qryEmpList.do", // 列表
  /* 公共服务-公共日志 */
  publicLogList: "pub_chnl/CommonLogPageQry.do", // 列表
  /* 公共服务-意见反馈 */
  feedbackList: "feedback/info.do", // 列表
  agreeFeedback: "feedback/agree.do", //修改状态 -- 已采纳
  agreeToSolu: "feedback/agreeToSolu.do", // 修改状态 -- 已解决
  /* 公共服务-白名单管理 */
  whiteList: "white/info.do", //列表
  delWhite: "white/delete.do", //删除
  addWhite: "white/add.do", // 新增
  /* 公共服务-帮助管理 */
  helpManagementList: "help/helpManage.do", //列表
  editHelpManagementList: "help/updateHelp.do", //编辑
  addHelpManagementList: "help/addHelp.do", // 新增
  deleteHelp: "help/deleteHelp.do", // 删除
  /* 公共服务-子管理员菜单*/
  subAdminManagementList: "pub/subManageMenuList.do", // 列表
  detailSubAdminManagement: "pub/menuAuthDetail.do", // 详情
  subMenuTreeList: "pub/subMenuTreeList.do", // 上级菜单
  basicSubMenuList: "pub/basicSubMenuList.do", //PC菜单
  subManageMenuDel: "pub/subManageMenuDel.do", // 删除
  subManageMenuAdd: "pub/subManageMenuAdd.do", // 新增
  subManageMenuUpd: "pub/subManageMenuUpd.do", //修改
  roleMenuListRole: "core/roleMenuListRole.do", // 菜单分配-根据ID
  roleMenuListAll: "core/roleMenuListAll.do", // 菜单全量
  roleAlotMenus: "core/roleAlotMenus.do", // 菜单修改
  roleUserList: "core/roleUserList.do", // 用户数据获取
  roleAlotUsers: "core/roleAlotUsers.do", // 用户角色分配
  /* 基础平台-公告管理 */
  noticePageQry: "core/noticePageQry.do", // 列表
  selectFrobidBtn: "core/selectFrobidBtn.do", // 按钮权限
  noticeDel: "core/noticeDel.do", // 删除接口
  noticeUpd: "core/noticeUpd.do", // 修改接口
  noticeAdd: "core/noticeAdd.do", // 新增接口
  /* 基础平台-待办事项 */
  operList: "core/operList.do", //列表
  operAudi: "audi/operAudi.do", //审批同意
  /* 公共服务-渠道控制管理*/
  pubChnlCtrlPageQry: "pub_chnl/pubChnlCtrlPageQry.do", //列表
  pubChnlCtrlAdd: "pub_chnl/pubChnlCtrlAdd.do", //新增
  pubChnlCtrlUpd: "pub_chnl/pubChnlCtrlUpd.do", //修改
  pubChnlCtrlDel: "pub_chnl/pubChnlCtrlDel.do", //删除
  /* 公共服务-公共资源*/
  pubRescFilesPageQry: "pub_chnl/pubRescFilesPageQry.do", //列表
  pubRescFilesUpd: "pub_chnl/pubRescFilesUpd.do", //修改
  pubRescFilesAdd: "pub_chnl/pubRescFilesAdd.do", //新增
  pubRescFilesDel: "pub_chnl/pubRescFilesDel.do",
  // 企业认证
  etpAuthInfoQuery: "auth/etpAuthInfoQuery.do", //列表
  etpAuthInfoAuth: "auth/etpAuthInfoAuth.do",
};
