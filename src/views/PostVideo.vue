<template>
  <div class="post-video">
    <h3>欢迎投稿:</h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
       <el-form-item label="描述">
        <el-input type="textarea" v-model="form.info"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import * as API from '@/api/video/'

export default {
  name: 'PostVideo',
  data () {
    return {
      form: {
        title: '',
        info: ''
      }
    }
  },
  methods: {
    onSubmit () {
      API.postVideo(this.form).then(
        res => {
          if (res.code > 0) {
            this.$notify.error({
              title: '投稿失败',
              message: res.msg
            })
          } else {
            this.$notify({
              title: '投稿成功',
              message: `投稿 ID为 ${res.data.id}`,
              type: 'success'
            })
          }
        }
      ).catch(err => {
        this.$notify.error({
          title: '投稿失败',
          message: err
        })
      })
    }
  }
}
</script>

<style>

</style>
