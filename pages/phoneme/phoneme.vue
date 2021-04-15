<!--  -->
<template>
  <view class="main">
    <view class="top"></view>
    <view class="content">
      <view class="content_phone">
        <text>联系电话：</text>
        <text @click="playphone">400-6362-333(点击拨打电话)</text>
      </view>
    </view>
    <view class="map">
      <map
        style="width: 100%; height: 300px;"
        :latitude="latitude"
        :longitude="longitude"
        :markers="covers"
      ></map>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      latitude: 29.536407,
      longitude: 106.506119,
      covers: [
        {
          latitude: 29.536407,
          longitude: 106.506119
        }
      ]
    };
  },

  methods: {
    playphone() {
      uni.makePhoneCall({
        phoneNumber: "4006362333"
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.main {
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  height: 300rpx;
  background-image: url(https://www.medrd.com/webfile/upload/2020/12-24/11-22-210808241617509.jpg);
  background-size: cover;
  background-position: center;
}
.content {
  width: 100%;
  .content_phone {
    height: 50rpx;
    display: flex;
  }
}
.map {
  width: 100%;
  height: 100rpx;
}
</style>