<template>
  <div class='home'>
    <div class=''>
      <el-row :gutter="20">
        <el-col :span='4' v-for="video in videos" :key="video.id">
            <el-card @click.native="goVideo(video)">
              <img src="../assets/logo.png" class="video-avatar">
              <div>
                <div class="video-title">{{video.title}}</div>
                <div class="video-bottom">
                  <span class="video-info">{{video.info}}</span>
                </div>
              </div>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import * as API from '../api/video'
export default {
  name: 'Home',
  data () {
    return {
      videos: []
    }
  },
  components: {
  },
  methods: {
    load () {
      API.getVideos().then(res => {
        this.videos = res.data
      })
    },
    goVideo (video) {
      this.$router.push({ name: 'showVideo', params: { videoId: video.id } })
    }
  },
  beforeMount () {
    this.load()
  }
}
</script>

<style scoped>
  .video-avatar{
    width: 100%;
  }

  .video-info {
    color:#606266;
  }

  .video-bottom{
    margin-bottom: 20px;
  }

  .video-title{
    margin: 4px 0px 4px 0px;
  }
</style>
