import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息
    const profile = ref<any>({}) // 初始化为一个空对象

    // 保存会员信息，登录时使用
    const setProfile = (val: any) => {
      profile.value = val
    }

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = {}
    }

    // 记得 return
    return {
      profile,
      setProfile,
      clearProfile,
    }
  },
  // TODO: 持久化
  {
    persist: {
      storage: {
        getItem(key) {
          return JSON.parse(uni.getStorageSync(key) || '{}') // 返回解析后的数据
        },
        setItem(key, value) {
          uni.setStorageSync(key, JSON.stringify(value)) // 存储时序列化数据
        },
      },
    },
  },
)
