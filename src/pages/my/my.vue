<script setup lang="ts">
import { useMemberStore } from '@/stores'
import '@/utils/https'

const memberStore = useMemberStore()

// 测试请求
const getData = () => {
  uni.request({
    method: 'GET',
    url: '/home/banner',
    success: (res) => {
      console.log('请求成功：', res.data)
      memberStore.setProfile(res.data) // 根据实际情况设置 profile
    },
    fail: (error) => {
      console.error('请求失败：', error)
    },
  })
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile.nickname }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '涂小海',
          token: '12345',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <!-- 新增请求数据的按钮 -->
    <button @tap="getData" size="mini" plain type="default">获取数据</button>
  </view>
</template>

<style lang="scss">
.my {
  padding: 20px;
  // 其他样式
}
</style>
