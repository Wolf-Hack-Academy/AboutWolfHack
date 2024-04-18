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
          profile-picture="https://media.licdn.com/dms/image/D4E03AQHe6TNCemTZYQ/profile-displayphoto-shrink_800_800/0/1707262294726?e=1718841600&v=beta&t=wYuI6y9K-NVgybqkaBKde6zJktBw3Q5Y-Lz0afQ2XzI"
          description="BS student in Computer Science and Engineering"
        />
      </div>

      <h1>External Advisors</h1>

      <div class="contributor-container">
        <UserProfile class="contributor-item"
        title="Dr. Shamik Sengupta"
        profile-picture="https://www.unr.edu/main/images/colleges-schools/engineering/cse/profiles/ShamikSengupta.jpg"
        description="Executive Director of the UNR Cybersecurity Center, Professor of Computer Science and Engineering"
        />

        <UserProfile class="contributor-item"
        title="Bill Doherty"
        profile-picture="https://www.unr.edu/main/images/colleges-schools/engineering/cybersecurity/profile/billdoherty.jpg"
        description="Adjunct Faculty, Cyber Club Coach"
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

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
};
</script>