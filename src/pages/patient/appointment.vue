<template>
  <view class="appointment">
    <text class="title">预约医生</text>
    <view class="options">
      <button @click="fetchDoctors">选择中医馆</button>
    </view>
    <view v-if="doctors.length > 0">
      <text class="doctor-list-title">可预约医生：</text>
      <view v-for="doctor in doctors" :key="doctor.id" @click="bookAppointment(doctor.id)">
        <text>{{ doctor.name }}</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Appointment',
  data() {
    return {
      doctors: [], // 用于存储医生列表
    }
  },
  methods: {
    async fetchDoctors() {
      try {
        const token = uni.getStorageSync(
          'fdscs0NgMQgXv2e7MCw0Iec7tpH6ayIiz08icyIvr3DgBz2zZ0smbVD0AhDNySoi',
        ) // 从本地存储获取 token
        const response = await uni.request({
          url: 'http://127.0.0.1:8000/api/doctors/profile/', // 替换为实际的API地址
          method: 'GET',
          header: {
            Authorization: `Bearer ${token}`, // 在请求头中添加 token
          },
        })

        if (response.statusCode === 200) {
          this.doctors = response.data // 假设返回的医生数据在data字段中
        } else {
          console.error('获取医生列表失败', response.data)
        }
      } catch (error) {
        console.error('获取医生列表失败', error)
      }
    },
    async bookAppointment(doctorId: any) {
      try {
        const token = uni.getStorageSync('authToken') // 从本地存储获取 token
        const response = await uni.request({
          url: 'http://127.0.0.1:8000/api/doctors/appointments/', // 替换为实际的API地址
          method: 'POST',
          header: {
            Authorization: `Bearer ${token}`, // 在请求头中添加 token
          },
          data: {
            doctorId: doctorId,
            userId: 123, // 假设用户ID是已知的
          },
        })

        if (response.statusCode === 200) {
          uni.showToast({
            title: '预约成功',
            icon: 'success',
          })
        } else {
          console.error('预约失败', response.data)
          uni.showToast({
            title: '预约失败，请重试',
            icon: 'none',
          })
        }
      } catch (error) {
        console.error('预约失败', error)
        uni.showToast({
          title: '预约失败，请重试',
          icon: 'none',
        })
      }
    },
  },
})
</script>

<style scoped>
.appointment {
  padding: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.options {
  margin-bottom: 20px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
