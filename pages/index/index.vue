<template>
  <view class="container">
    <!-- 轮播 -->
    <swiper
      class="swiper_img"
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <swiper-item class="swiper_img">
        <img
          class="swiper_img"
          src="//img.alicdn.com/imgextra/i2/64/O1CN01KkPSL11CLM1Myhja5_!!64-0-luban.jpg"
          alt
        />
      </swiper-item>
      <swiper-item>
        <img
          class="swiper_img"
          src="//img.alicdn.com/imgextra/i4/12/O1CN01T7xx4L1BxXQNGFVhL_!!12-0-luban.jpg"
          alt
        />
      </swiper-item>
    </swiper>
    <!-- 顶部导航 -->
    <view class="topbar">
      <view class="topbar_div" @tap="jump(index.name)" v-for="(index,value) in topimg" :key="value">
        <img class="topbar_div_img" :src="index.img" alt />
        <text style="font-size:24rpx">{{index.name}}</text>
      </view>
    </view>
    <!-- 推荐商品 -->
    <view class="recommended_products">
      <view class="recommended_products_top">推荐商品</view>
      <view class="recommended_products_main1">
        <view class="recommended_products_main" v-for="(index,value) in productsImg" :key="value">
          <img class="recommended_products_main_img" :src="index.img" alt />
          <text style="font-size:24rpx;color:#333">收纳箱有盖藤编整理箱抽屉衣服玩具储物盒编织衣物收纳筐家用大号</text>
          <view style="display:flex;justify-content: space-between;">
            <text style="font-size:28rpx;color:#ff5500">￥44.8</text>
            <text style="font-size:24rpx;color:#999;">991人已购买</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value: [0, 0, 0],
      multiArray: [],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      topimg: [
        {
          img:
            "https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1",
          name: "华谊超市"
        },
        {
          img:
            "https://gw.alicdn.com/tfs/TB1DaMyVpzqK1RjSZFoXXbfcXXa-185-144.png?getAvatar=1",
          name: "联系我们"
        },
        {
          img:
            "https://gw.alicdn.com/tfs/TB19yZJVBLoK1RjSZFuXXXn0XXa-183-144.png?getAvatar=1",
          name: "社区图片"
        },
        {
          img:
            "https://gw.alicdn.com/tfs/TB19dcwVyrpK1RjSZFhXXXSdXXa-183-144.png?getAvatar=1",
          name: "学习视频"
        }
      ],
      productsImg: [
        {
          img:
            "//gw.alicdn.com/bao/uploaded/i4/753242618/O1CN01GUIgzI1VD5ZZ37vwl_!!0-item_pic.jpg_500x500q90.jpg_.webp",
          name: "华谊超市"
        },
        {
          img:
            "//gw.alicdn.com/bao/uploaded/i1/664682641/TB1hzrHcwDD8KJjy0FdXXcjvXXa_!!0-item_pic.jpg_500x500q90.jpg_.webp",
          name: "联系我们"
        },
        {
          img:
            "//gw.alicdn.com/bao/uploaded/i4/40624691/TB2.LZeFKOSBuNjy0FdXXbDnVXa_!!40624691.jpg_500x500q90.jpg_.webp",
          name: "社区图片"
        },
        {
          img:
            "//gw.alicdn.com/bao/uploaded/i1/TB17R74FVXXXXcBaXXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",
          name: "学习视频"
        }
      ]
    };
  },
  onLoad() {
    // this.addresss();
  },
  onReachBottom() {
    console.log("到底了");
  },
  methods: {
    jump(name) {
      if (name == "联系我们") {
        uni.navigateTo({
          url: "/pages/phoneme/phoneme"
        });
      } else if (name == "社区图片") {
        uni.navigateTo({
          url: "/pages/community/community"
        });
      }
    },
    async addresss() {
      try {
        let _this = this;
        try {
          let { data } = await _this.$http.get(
            `api/common/region/treeData?depth=4`
          );
          if (data.success == true) {
            _this.tableData = data.data;
          }
        } catch (error) {}
      } catch (error) {}
    }
  }
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  /* padding: 20px; */
  /* font-size: 14px; */
  /* line-height: 24px; */
}
.vi01 {
  display: flex;
  width: 100%;
  height: 196rpx;
}
.vi01-font {
  font-size: 36rpx;
  height: 100rpx;
  display: flex;
  flex-direction: column;
  padding-left: 30rpx;
}
.vi01-font > view:nth-child(2) {
  font-size: 32rpx;
  color: #999;
}
.reside {
  display: flex;
}
.input_place {
  width: 100%;
  height: 46rpx;
  overflow: hidden;
  font-size: 18rpx;
}
.swiper_img {
  height: 240rpx;
  width: 100%;
}
.topbar {
  width: 100%;
  height: 200rpx;
  display: flex;
  justify-content: space-around;
}
.topbar_div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140rpx;
  height: 156rpx;
}
.topbar_div_img {
  width: 120rpx;
  height: 96rpx;
}
.recommended_products {
  width: 100%;
  .recommended_products_top {
    width: 100%;
    height: 100rpx;
    font-size: 40rpx;
    color: #0ebcc7;
    text-align: center;
    line-height: 100rpx;
    background-color: #f4f4f4;
  }
  .recommended_products_main1 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .recommended_products_main {
      width: 340rpx;
      height: 520rpx;
      padding: 16rpx;
      .recommended_products_main_img {
        width: 100%;
        height: 340rpx;
      }
    }
  }
}
</style>
