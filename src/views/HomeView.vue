<template>
  <div class="about">
    <h1>About</h1>
    <p>Welcome to our CS 426 senior capstone project at the University of Nevada, Reno!</p>
    <p class="end-section">Department of Computer Science and Engineering, Spring 2024</p>
    
    <h2>Project description</h2>
    <p class="end-section">
      Wolf Hack Academy is our solution to closing the gap between open cybersecurity
      positions and those knowledgeable enough to fill them. By providing a portable, online
      platform to incoming and current college students with an interest in cyber, we hope to
      bridge the workforce gap and expose students to exciting new careers.<br><br>
      The main goals of our project are to 1) provide a portable service to high school outreach 
      programs and 2) to provide a comprehensible cybersecurity background to UNR’s CSE students. 
      Our intended users are incoming and current college students who have an interest in 
      learning about and being aware of cybersecurity concepts. Providing this accessible 
      material aims to allow students to become interested in cybersecurity as a concept. The 
      current CSE major at UNR does not require any cybersecurity courses, however security is 
      quickly becoming an important topic in industry. Therefore, all programmers need to be 
      aware of basic security concepts; our website hopes to fill this gap. The main 
      functionalities of our website are interactive lesson pages that will provide our 
      educational material, an arcade where users can practice their cyber skills with 
      game-assisted learning, and a community space where users can advertise upcoming cyber 
      competitions and form teams with coaches. We are currently using Django for a combination 
      of backend and middleware support, Vue for frontend development/deployment, and Vuetify to 
      support graphical development. We are coding the frontend portion of our website in HTML, 
      CSS, and TypeScript and the backend/middleware in Python. Our project does not depend on 
      any hardware components.
    </p>

    <h2>Instructors</h2>
    <div class="contributor-container">
      <UserProfile class="contributor-item"
        title="Sara Davis"
        profile-picture="https://www.unr.edu/main/images/colleges-schools/engineering/cse/profiles/Sara-Davis.jpg"
        description="Lecturer"
      />

      <UserProfile class="contributor-item"
        title="Dave Feil-Seife"
        profile-picture="https://www.unr.edu/main/images/colleges-schools/engineering/cse/profiles/DavidFeilSeifer.jpg"
        description="Associate Professor, Graduate Director"
      />

      <UserProfile class="contributor-item"
        title="Devrin Lee"
        profile-picture="https://www.unr.edu/main/images/colleges-schools/engineering/cse/profiles/devrin-lee.jpg"
        description="Teaching Assistant"
      />
    </div>
  </div>
</template>

<style scoped>
  .end-section {
    margin-bottom: 30px;
  }

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