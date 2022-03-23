<template>
  <div class="menu" :class="{ collaps: !collapsed }">
    <div class="u-menus">
      <a-menu
        :selected-keys="selectKey"
        mode="inline"
        theme="light"
        :inline-collapsed="collapsed"
        :openKeys="openKeys"
        @openChange="openChange"
      >
        <template v-for="item in navList">
          <a-menu-item
            v-if="item.children && item.children.length == 0"
            :key="item.key"
            @click="toPage(item.hashUrl, item.key, '')"
          >
            <span class="icon iconfont mr5 " :class="item.icon"></span>

            <span>
              {{ item.name }}
            </span>
          </a-menu-item>
          <a-sub-menu v-else :key="item.key">
            <span slot="title" class="s-span">
              <span class="icon iconfont mr5" :class="item.icon"></span>
              <span>{{ item.name }}</span>
            </span>
            <template v-for="cItem in item.children">
              <a-menu-item
                v-if="cItem.children && cItem.children.length == 0"
                :key="cItem.key"
                @click="toPage(cItem.hashUrl, cItem.key, cItem)"
              >
                <span>{{ cItem.name }}</span>
              </a-menu-item>
              <a-sub-menu v-else :key="cItem.key" :title="cItem.name">
                <a-menu-item
                  v-for="sItem in cItem.children"
                  :key="sItem.key"
                  @click="toPage(sItem.hashUrl, sItem.key, sItem)"
                  ><span>{{ sItem.name }}</span></a-menu-item
                >
              </a-sub-menu>
            </template>
          </a-sub-menu>
        </template>
      </a-menu>
    </div>
  </div>
</template>

<script>
// import list from '../constants/menuList';
import { debounce } from '@/utils/debounce.js';
import utils from '@/utils/tree.js';
export default {
  data() {
    return {
      navList: [], // 菜单数据
      defaultKey: [], // 默认展 开，父节点
      collapsed: false, // 是否展开
      selectKey: [], // 默认展开，子节点
      navIds: [],
      openKeys: [],
      rootSubmenuKeys: [],
      newsubmenukeys: [],
      newkeys: undefined,
    };
  },
  watch: {
    $route: {
      handler(val) {
        this.getformHeight();
        if (val.name == 'edit') {
          return;
        }
        this.navIds.filter((item, i) => {
          if (item == val.path) {
            this.selectKey = [i + 1];
            this.$session.set('selectKey', i + 1);
          }
        });
      },
    },
  },
  created() {
    // 在这里才可以
    // this.openKeys = [this.$session.get('defaultKey') || 1];
  },
  mounted() {
    this.getformHeight();
    window.addEventListener('resize', debounce(this.getformHeight));
    this.roleMenuList(); // 菜单权限
    this.selectKey = [this.$session.get('selectKey') || 8];
  },
  methods: {
    /**
     * @description: 页面刷新或者点击菜单改变form高度
     * @param {*}
     * @return {*}
     */
    getformHeight() {
      this.$nextTick(() => {
        if (document.getElementById('forms')) {
          this.$store.commit(
            'setFormHeight',
            document.getElementById('forms').clientHeight
          );
        }
      });
      // setTimeout(() => {

      // }, 500);
    },
    /**
     * @description: 父菜单默认选中，只展开一个
     * @param {*}
     * @return {*}
     */

    openChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );

      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        if (this.newsubmenukeys.indexOf(latestOpenKey) !== -1) {
          this.openKeys = latestOpenKey ? [this.newkeys, latestOpenKey] : [];
        } else {
          this.openKeys = openKeys;
        }
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
      this.$session.set('defaultKey', openKeys);
    },
    /**
     * @description: 菜单角色
     * @param {*}
     * @return {*}
     */

    roleMenuList() {
      this.$http
        .post(this.$urls.roleMenuList, {})
        .then((result) => {
          let list = [];
          result.LIST.forEach((item, i) => {
            let url = item.TRANS_URL;
            let path = null;
            let icon = null;
            if (url) {
              let i = url.indexOf('&');
              path = url.substring(
                url.indexOf('/'),
                i != -1 ? url.indexOf('&') : url.length
              );
              icon = url.substring(url.indexOf('&') + 1, url.length);
            }
            list.push({
              ID: item.MENU_ID,
              name: item.NAME,
              key: i + 1,
              icon: icon,
              PARENT_ID: item.PARENT_ID,
              hashUrl: path,
            });
          });
          this.navIds = list.map((item) => {
            return item.hashUrl;
          });
          this.$store.commit('tabMenus', list);
          let arr = utils(list);
          this.navList = arr;
          this.rootSubmenuKeys = this.navList.map((item) => item.key);
          this.navList.forEach((item) => {
            if (item.children && item.children.length) {
              this.newsubmenukeys = item.children.map((i) => i.key);
              this.newkeys = item.key;
            }
          });
        })
        .catch((err) => {});
    },
    /**
     * @description: 页面跳转
     * @param {*} url
     * @param {*} key
     * @return {*}
     */
    toPage(url, key, item) {
      if (url) {
        return this.$router.push(url);
      }
    },
    /**
     * @description: 是否展开收起
     * @param {*}
     * @return {*}
     */

    toggleCollapsed() {
      this.$store.commit('toggleCollapsed');
    },
  },
};
</script>

<style lang="less">
.menu {
  z-index: 99;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  padding-top: 20px;
  &.collaps {
    width: 100%;
    height: 100%;
  }
  .u-menus {
    height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
    .iconfont {
      font-size: 20px;
      &.icon-wodefeiyong {
        font-size: 22px;
      }
    }
  }
  .head {
    color: #333333;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin: 0 16px;
    height: 60px;
    border-bottom: 1px solid #cccccc54;
    cursor: pointer;
    i {
      color: #1890ff;
      font-size: 24px;
      margin-right: 10px;
    }
    img {
      cursor: pointer;
      width: 32px;
      border-radius: 16px;
    }
  }
  .m-svg {
    width: 17px;
    margin-right: 6px;
  }
  a {
    color: #333;
  }
  .ant-menu {
    background: #f5f7fb;
  }
  .ant-menu-item,
  .s-span {
    display: flex;
  }
  .ant-menu.ant-menu-inline.ant-menu-root {
    border-right-color: transparent;
  }
  .ant-menu-item-selected {
    background-color: #458af8 !important;
    color: white;
  }
  .ant-menu-inline-collapsed {
    .ant-menu-submenu-title {
      & > span {
        & > span {
          visibility: hidden;
        }
      }
    }
    .ant-menu-item {
      & > span {
        visibility: hidden;
      }
    }
  }
}
</style>
