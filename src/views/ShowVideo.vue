<template>
  <div class="post-video">
    <el-row :gutter="20">
      <el-col :span="15">
        <video-player
         class="video-player-box"
         ref="videoPlayer"
         :options ="playerOptions">
        </video-player>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// require styles
import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'

export default {
  components: {
    videoPlayer
  },
  data () {
    return {
      playerOptions: {
        // videojs options
        muted: true,
        fluid: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'http://qllfr8wi4.hn-bkt.clouddn.com/6905989337240975180.MP4'
        }]
      }
    }
  }
}
</script>

<style scoped>

</style>
