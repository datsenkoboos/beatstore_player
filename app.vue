<template>
  <div class="app flex flex-col min-h-screen items-center justify-center">
    <BeatstoreBeat
      :beat="beat"
    />
    <client-only>
      <div class="fixed bottom-0 w-full">
        <BeatstorePlayer />
      </div>
    </client-only>
  </div>

</template>

<script setup>
useHead({
  title: 'Beatstore Player',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'Arthur Dacenko-Boos' },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }]
})

const beat = {
    id: 1,
    name: 'Vibes',
    bpm: 210,
    artist: {
      name: 'Drake',
      id: 4,
    },
    wrap: `/images/wrap27.jpg`,
    audio: {
      mp3: `/audio/Vibes_Drake_210BPM.mp3`,
      wav: `/audio/Vibes_Drake_210BPM.mp3`,
    },
}
</script>

<style lang="scss">
.app {
  background: no-repeat url('~/assets/images/bg.png');
  background-size: cover;
}
// fonts
@import url("~/assets/css/fonts.css");

</style>