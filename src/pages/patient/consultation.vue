<template>
  <view class="consultation">
    <text class="title">在线问诊</text>
    <view class="options">
      <button @click="callDoctor">电话咨询</button>
      <button @click="videoConsultation">视频咨询</button>
      <button @click="leaveMessage">留言咨询</button>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Consultation',
  methods: {
    callDoctor() {
      // 电话咨询逻辑
    },
    videoConsultation() {
      // 视频咨询逻辑
    },
    leaveMessage() {
      // 留言咨询逻辑
    },
  },
})
</script>

<style scoped>
.consultation {
  padding: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.options {
  display: flex;
  flex-direction: column;
}

button {
  margin: 10px 0;
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
