<template>
    <div class="lg:flex bg-green-50 w-full items-center  py-20 px-10  justify-between">
        <h1 class="lg:text-5xl text-4xl font-bold lg:text-left text-center text-slate-800">
            Why join a trading<br>community?
        </h1>
        <p class="pt-10 lg:pt-0 lg:text-left text-center" >
            Himenaeos nibh orci taciti dapibus habitant euismod ut, neque sollicitudin integer <br> felis senectus eleifend ultrices tincidunt fames dictum. Pharetra porttitor metus <br> conubia curae risus fringilla posuere aenean non, suscipit a nostra pretium.
        </p>
    </div>

    <div class=" grid lg:grid-cols-4 grid-cols-2 mx-auto pb-20 lg:px-10 gap-5 bg-green-50 justify-center">
        <Card
        imageSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-023.png"
        title="Daily Pre-Market Prep"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
        />
        <Card
        imageSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-024.png"
        title="Daily Pre-Market Prep"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
        />
        <Card
        imageSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-026.png"
        title="Daily Pre-Market Prep"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
        />
        <Card
        imageSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-025.png"
        title="Daily Pre-Market Prep"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
        />
    </div>
</template> 

<script setup>
  import Card from "../membership/Common/Card.vue";
</script>