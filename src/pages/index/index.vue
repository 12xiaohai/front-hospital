<template>
  <view class="container">
    <!-- 头部 -->
    <view class="header">
      <text class="greeting">{{ greetingMessage }}</text>
      <button class="add-doctor-button">+ 添加/完善就诊人</button>
    </view>

    <!-- 轮播图 -->
    <swiper class="swiper" indicator-dots autoplay>
      <swiper-item>
        <image src="../../static/images/image1.jpg" class="slide-image" />
      </swiper-item>
      <swiper-item>
        <image src="../../static/images/image2.jpg" class="slide-image" />
      </swiper-item>
      <swiper-item>
        <image src="../../static/images/image3.jpg" class="slide-image" />
      </swiper-item>
    </swiper>

    <!-- 功能区 -->
    <view class="function-area">
      <view class="function-button" @click="navigateToAppointment">
        <text>预约挂号</text>
      </view>
      <view class="function-button" @click="navigateToConsultation">
        <text>健康商城</text>
      </view>
      <view class="function-button" @click="navigateToHealthMonitoring">
        <text>药品查询</text>
      </view>
      <view class="function-button" @click="navigateToMall">
        <text>在线问诊</text>
      </view>
    </view>

    <!-- 积分系统 -->
    <view class="points-system">
      <text class="points-title">我的积分: <span class="points-value">100</span></text>
      <text>积分来源: 打卡、就诊次数、消费金额、学习课程、上传病例</text>
    </view>

    <!-- 内容板块 -->
    <view class="content-section">
      <text class="section-title">门诊服务</text>
      <view class="content-options">
        <button @click="navigateToHealthKnowledge" class="content-button">中医养生知识</button>
        <button @click="navigateToCourse" class="content-button">线下课程报名</button>
        <button @click="navigateToHerbIntro" class="content-button">药材介绍</button>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Index',
  data() {
    return {
      greetingMessage: this.getGreetingMessage(),
    }
  },
  methods: {
    getGreetingMessage() {
      const hours = new Date().getHours() // 获取当前小时
      if (hours < 12) {
        return 'Hi ~ 上午好' // 上午
      } else if (hours < 18) {
        return 'Hi ~ 下午好' // 下午
      } else {
        return 'Hi ~ 晚上好' // 晚上
      }
    },
    navigateToAppointment() {
      uni.navigateTo({ url: '/pages/patient/appointment' })
    },
    navigateToConsultation() {
      uni.navigateTo({ url: '/pages/patient/consultation' })
    },
    navigateToHealthMonitoring() {
      uni.navigateTo({ url: '/pages/patient/healthMonitoring' })
    },
    navigateToMall() {
      uni.navigateTo({ url: '/pages/patient/mall' })
    },
    navigateToHealthKnowledge() {
      uni.navigateTo({ url: '/pages/healthKnowledge/healthKnowledge' })
    },
    navigateToCourse() {
      uni.navigateTo({ url: '/pages/course/course' })
    },
    navigateToHerbIntro() {
      uni.navigateTo({ url: '/pages/herbIntro/herbIntro' })
    },
    navigateToHome() {
      // 回到首页
    },
    navigateToInfo() {
      // 导航到医院信息页面
    },
    navigateToAnnouncement() {
      // 导航到公告资讯页面
    },
    navigateToProfile() {
      // 导航到个人中心页面
    },
  },
})
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: #f9f9f9; /* 背景颜色 */
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.greeting {
  font-size: 20px;
  color: #333; /* 问候语颜色 */
}

.hospital-name {
  font-size: 24px; /* 增大字体 */
  font-weight: bold;
  color: #2dcec6; /* 设置医院名称颜色 */
}

.add-doctor-button {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #007bff; /* 按钮背景颜色 */
  color: white;
  border-radius: 5px;
}

.swiper {
  height: 200px; /* 轮播图高度 */
}

.slide-image {
  width: 100%;
  height: 100%; /* 图片填充 */
}

.function-area {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 20px;
}

.function-button {
  width: 45%;
  padding: 10px;
  background-color: #28a745; /* 功能按钮颜色 */
  color: white;
  border-radius: 5px;
  text-align: center;
  margin: 5px 0;
}

.points-system {
  margin-bottom: 20px;
  padding: 10px; /* 内边距 */
  background-color: #ffffff; /* 背景色 */
  border: 1px solid #ddd; /* 边框 */
  border-radius: 5px; /* 圆角 */
}

.points-title {
  font-size: 18px;
  font-weight: bold;
}

.content-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.content-options {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.content-button {
  width: 30%;
  padding: 10px;
  background-color: #007bff; /* 内容按钮颜色 */
  color: white;
  border-radius: 5px;
  margin: 5px 0;
  text-align: center;
}

.footer {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
</style>
