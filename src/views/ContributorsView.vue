<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
};
</script>

<template>
    <div class="about">
      <h1>Team 16</h1>

      <div class="contributor-container">
        <UserProfile class="contributor-item"
          title="Amber Hankins"
          profile-picture="https://www.nevadacyberclub.com/img/officer-1.jpeg"
          description="Accelerated BS/MS student in Computer Science and Engineering"
        />
        
        <user-profile class="contributor-item"
          title="Paige Mortensen"
          profile-picture="https://www.nevadacyberclub.com/img/officer-4.jpeg"
          description="Accelerated BS/MS student in Computer Science and Engineering"
        />
        
        <UserProfile class="contributor-item"
          title="Marissa Floam"
          profile-picture="https://www.nevadacyberclub.com/img/officer-2.jpeg"
          description="Accelerated BS/MS student in Computer Science and Engineering"
        />

        <UserProfile class="contributor-item"
          title="Nicole Siron"
          profile-picture=""
          description="BS student in Computer Science and Engineering"
        />
      </div>
    </div>
  </template>

<style scoped>
  .contributor-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }

  .contributor-item{
    margin: 5px;
  }
</style>