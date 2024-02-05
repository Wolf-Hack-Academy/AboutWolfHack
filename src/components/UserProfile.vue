<template>
  <div class="profile-container">
    <div class="profile-title">{{ title }}</div>
    <div class="profile-picture" :style="{ 'background-image': `url(${profilePicture})` }"></div>
    <div class="profile-description">{{ description }}</div>
  </div>
</template>
  
<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      profilePicture: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  };
</script>
  
<style scoped>
  .profile-container {
    max-width: 300px;
    min-width: 300px;
    margin: 20px auto;
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .profile-picture {
    width: 150px;
    height: 200px;
    background-size: cover;
    border-radius: 5px;
    margin: 10px auto;
    background-position: center;
  }

  .profile-description {
    font-size: 16px;
  }
</style>