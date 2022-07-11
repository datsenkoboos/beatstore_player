<template>
  <div class="app flex flex-col min-h-screen items-center justify-center">
    <BeatstoreBeat
      :beat="beat"
    />
    <div class="fixed bottom-0 w-full">
      <BeatstorePlayer />
    </div>
  </div>

</template>

<script setup>
import BeatstoreBeat from '@/components/BeatstoreBeat.vue'
import BeatstorePlayer from '@/components/BeatstorePlayer.vue'

const publicPath = process.env.BASE_URL
const beat = {
    id: 1,
    name: 'Vibes',
    bpm: 210,
    artist: {
      name: 'Drake',
      id: 4,
    },
    wrap: `${publicPath}images/wrap27.jpg`,
    audio: {
      mp3: `${publicPath}audio/Vibes_Drake_210BPM.mp3`,
      wav: `${publicPath}audio/Vibes_Drake_210BPM.mp3`,
    },
}
</script>

<style lang="scss">
.app {
  background: no-repeat url('@/assets/images/bg.png');
  background-size: cover;
}
// fonts
@import url("@/assets/css/fonts.css");

</style>
