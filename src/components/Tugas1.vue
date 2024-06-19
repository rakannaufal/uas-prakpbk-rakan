<template>
  <q-page>
    <section class="home" id="home">
      <main class="content">
        <h1>I'm M <span>Rakan</span> Naufal</h1>
        <p>
          I am a web developer with a passion for building dynamic and
          functional websites. I am also an Informatic Engineering student,
          combining technical and creative skills.
        </p>
        <a
          href="https://rakan-projectcv.netlify.app/"
          class="cta"
          target="_blank"
          >Link Tugas 1</a
        >
      </main>
    </section>
  </q-page>
</template>

<script>
export default {
  name: "Tugas1",
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  background-color: #d9d9d9;
  color: #949494;
}

h1 {
  overflow: hidden;
  border-right: 0.15em solid #949494;
  white-space: nowrap;
  margin: 0 auto;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  font-weight: bold;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #949494;
  }
}

.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url("./public/header-bg.png");
  background-size: cover;
  background-position: center;
  position: relative;
}

.home::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 30%;
  bottom: 0;
  background: linear-gradient(
    0deg,
    hsl(0, 0%, 60%) 4%,
    rgba(217, 217, 217, 0) 40%
  );
}

.home .content {
  padding: 1.4rem 7%;
  max-width: 60rem;
}

.home .content h1 {
  font-size: 4.5em;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
  line-height: 1.2;
}

.home .content h1 span {
  color: #949494;
}

.home .content p {
  font-size: 1.4rem;
  margin-top: 1rem;
  line-height: 1.4;
  font-weight: 400;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.5);
}

.cta {
  margin-top: 1rem;
  display: inline-block;
  padding: 1rem 3rem;
  font-size: 1.4rem;
  color: #fff;
  background-color: #949494;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
  text-decoration: none;
  font-weight: bold;
}
</style>
