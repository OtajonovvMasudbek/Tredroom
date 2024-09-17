<template>
  <div class="card-container">
    <p class="text-center text-green-600 font-semibold py-5">{{ text }}</p>

    <div class="text-center lg:text-left">
      <img
        class="w-[150px] mx-auto sm:w-[300px] md:max-w-[400px] lg:w-[500px] lg:py-5 lg:mx-0"
        :src="imgSrc"
        :alt="alt"
      />
    </div>

    <div class="text-center lg:text-left">
      <h2
        class="px-5 lg:px-0 text-xl mx-auto font-bold text-white max-w-[300px] md:text-2xl lg:max-w-[400px]"
      >
        {{ title }}
      </h2>
      <p class="text-center text-slate-500 pt-5">{{ item }}</p>
    </div>

    <div class="text-center lg:text-left">
      <button class="flex mx-auto lg:mx-0 items-center text-green-600 py-5 md:py-6">
        {{ buttonText }}
        <i class="pt-1 ri-arrow-right-line"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  props: {
    text: String,
    imgSrc: String,
    alt: String,
    title: String,
    item: String,
    buttonText: String,
  },
  setup(props) {
    const { text, imgSrc, alt, title, item, buttonText } = toRefs(props);

    return {
      text,
      imgSrc,
      alt,
      title,
      item,
      buttonText,
    };
  },
});
</script>

<style scoped>
.card-container {
  background-color: #0d3e46;
  border-radius: 0.75rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  padding: 1rem; /* Add padding to make the card content not touch the edges */
}

.card-container:hover {
  background-color: #1a434b;
  transform: translateY(5px);
}

.card-container img {
  max-width: 100%; /* Ensure image scales down with the container */
  height: auto; /* Maintain aspect ratio */
  padding: 1.25rem;
}

.card-container h2 {
  text-align: center;
  font-size: 1.25rem;
  margin: 0 auto;
  font-weight: bold;
  color: white;
  max-width: 300px;
}

.card-container p {
  text-align: center;
  color: #94a3b8;
  padding-top: 1.25rem;
}

.card-container button {
  display: flex;
  margin: 0 auto;
  align-items: center;
  color: #10b981;
  padding: 1.25rem 0;
}

/* Responsive styles */
@media (max-width: 640px) {
  .card-container {
    padding: 0.5rem;
  }

  .card-container h2 {
    font-size: 1.125rem;
    max-width: 100%;
  }

  .card-container p {
    padding-top: 0.5rem;
  }
}

@media (min-width: 768px) {
  .card-container img {
    max-width: 150px;
  }

  .card-container h2 {
    font-size: 1.5rem;
    max-width: 300px;
  }

  .card-container p {
    padding-top: 1rem;
  }
}

@media (min-width: 1024px) {
  .card-container img {
    max-width: 200px;
  }

  .card-container h2 {
    font-size: 1.75rem;
    max-width: 400px;
  }

  .card-container p {
    padding-top: 1.25rem;
  }
}
</style>
