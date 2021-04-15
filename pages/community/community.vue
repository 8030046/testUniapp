<!--  -->
<template>
  <view class="main">
    <view class="left">
      <scroll-view
        :scroll-top="scrollTop"
        scroll-y="true"
        class="scroll_Y"
        :style="{height:windowHeight}"
        @scrolltoupper="upper"
        @scrolltolower="lower"
        @scroll="scroll"
      >
        <view
          v-for="(i,v) in leftdata"
          :key="v"
          :id="`leftid${v}`"
          class="left_scroll_box"
          @tap="xz(v)"
        >{{i.name}}</view>
      </scroll-view>
    </view>
    <view class="right">123</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
      old: {
        scrollTop: 0
      },
      leftdata: [
        {
          name: "集合01"
        },
        {
          name: "集合02"
        },
        {
          name: "集合03"
        },
        {
          name: "集合04"
        },
        {
          name: "集合05"
        },
        {
          name: "集合06"
        },
        {
          name: "集合07"
        },
        {
          name: "集合08"
        },
        {
          name: "集合09"
        },
        {
          name: "集合10"
        },
        {
          name: "集合11"
        },
        {
          name: "集合12"
        },
        {
          name: "集合13"
        },
        {
          name: "集合14"
        }
      ],
      windowHeight: "",
      flagid: 99
    };
  },
  onShow() {
    this.windowHeight = document.body.clientHeight * 2 + "rpx";
  },
  methods: {
    upper: function(e) {
      console.log(e);
    },
    lower: function(e) {
      console.log(e);
    },
    scroll(e) {
      console.log(e);
    },
    xz(v) {
      console.log("选中", v);
      let id = document.getElementById(`leftid${v}`);

      console.log(id);
      console.log(" this.flagid ", this.flagid);

      id.classList.add("activate");
      if (this.flagid != 99 && this.flagid != v) {
        document
          .getElementById(`leftid${this.flagid}`)
          .classList.remove("activate");
      }
      this.flagid = v;
    }
  }
};
</script>
<style lang='scss' scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
}
.left {
  width: 200rpx;
  height: 100%;
  .scroll_Y {
    width: 100%;
    .left_scroll_box {
      width: 100%;
      height: 140rpx;
      background-color: #f4f4f4;
    }
  }
}
.activate {
  background-color: red !important;
}
</style>