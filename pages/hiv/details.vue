<!-- hiv详情页 -->
<template>
  <div>
    <view>
      <text :selectable="true" :user-select="true">hiv详情页</text>
      <view v-for="(i,v) in list" :key="v">{{i}}</view>
      <button @click="getapi()">发送请求</button>
      <button @click="upprint()">上传图片</button>
      <button @click="viewPrint()">预览图片</button>
      <!-- #ifdef H5 -->
      <button @click="viewPrint()">只有H5</button>
      <!-- #endif -->
    </view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["你", "好", "世", "界"],
      imglist: []
    };
  },
  onPullDownRefresh() {
    setTimeout(() => {
      this.list = ["我", "很", "好", "啊"];
      uni.stopPullDownRefresh();
    }, 1000);
  },

  methods: {
    getapi() {
      uni.request({
        url: "https://run.mocky.io/v3/b9f6ee5e-7107-4c01-8ebb-e3679a07d31a", //仅为示例，并非真实接口地址。
        data: {
          text: "uni.request"
        },
        header: {
          "custom-header": "hello" //自定义请求头信息
        },
        success: res => {
          console.log(res.data);
          this.text = "request success";
        }
      });
    },
    upprint() {
      let _this = this;
      uni.chooseImage({
        count: 6, //默认9
        sizeType: ["compressed"], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], //从相册选择
        success: function(res) {
          uni.setStorage({
            key: "img",
            data: res.tempFilePaths,
            success: function() {
              _this.imglist = res.tempFilePaths;
            }
          });
        }
      });
    },
    viewPrint() {
      // 预览图片
      console.log("this.imglist", this.imglist);

      uni.previewImage({
        urls: this.imglist,
        longPressActions: {
          itemList: ["发送给朋友", "保存图片", "收藏"],
          success: function(data) {
            console.log(
              "选中了第" +
                (data.tapIndex + 1) +
                "个按钮,第" +
                (data.index + 1) +
                "张图片"
            );
          },
          fail: function(err) {
            console.log(err.errMsg);
          }
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
</style>