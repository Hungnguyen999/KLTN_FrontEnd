<template>
  <div>
    <button @click="empty = !empty">Change</button>
    <div v-if="empty" class="text-center my-empty-container">
      <img src="https://tiki.vn/desktop/img/account/tiki-not-found-pgae.png" />
      <h3>Hiện không có thông báo nào!</h3>
    </div>
    <div v-if="!empty" class="announce-container">
      Hello students!
      I hope this message doesn't bother you, I wanted to give a brief update on what's going on.
      1. WE ARE REACHING 100.000! Currently our little PowerPoint / After Effects / Video & Animation community consists of 99,363 students. I wish to shake hands with each one of you :) I'm glad we can discuss, exchange knowledge and learn from each other
      2. I took part in a Microsoft Scheduled Call and was informed about a few relatively new features - Inking and 3D usage within PowerPoint. A lot of those things do not work consistently across all versions or aren't available to versions other than Office 365, but when the time comes I will introduce you all closer to those features to the best of my knowledge.
      3. My studio for 2019. After a dozen hours of adjusting, cable management and setting up I have my studio set & ready for the entire year (or more?) Here is a little showcase. I personally am a very pedantic person thus the clean and minimalistic approach. Take a look:
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      empty: false
    };
  }
};
</script>
<style lang="scss" scoped>
.my-empty-container {
  padding: 1rem 0 1rem 1rem;
}
.announce-container {
  padding: 1rem 0 1rem 1rem;
}
</style>