<template>
  <div
    style="
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: 100vh;
      position: relative;
      opacity: 0.9;
      z-index: 1;
      overflow: hidden;
      background-image: url('https://images.unsplash.com/photo-1504400739660-22ebeb14f00a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    "
  >
    <v-container
      style="
        border: 5px #e0e0e0 solid;
        border-radius: 20px;
        box-shadow: 0px 0 20px #070707;
      "
      class="mt-4"
    >
      <h1
        class="text-uppercase text-center mt-2"
        style="
          background: -webkit-linear-gradient(#cc1111, #8ddad0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        "
      >
        Best chapatis in town
      </h1>
      <br />
      <v-card-text class="text-center text-justify text-white">
        At baba decon delicacys, we are best know for our chapatis. We make them
        with love and care. We have been in the business for over 10 years and
        we have perfected the art of making chapatis.
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          architecto, ipsam sed voluptatibus aliquid ratione autem culpa dolore,
          officiis totam, unde doloribus. Tempora laborum molestias vitae nulla
          dolore a, placeat officiis ab quos officia in voluptatem, unde
          temporibus modi reprehenderit sint, autem at fugit. Pariatur placeat
          cupiditate, blanditiis nulla cumque porro quidem error inventore
          delectus quas aut dolorum iusto voluptas modi, laudantium molestias
          ducimus est odio fugit. Explicabo, cum officia?
        </span>
      </v-card-text>
      <v-divider height="2"></v-divider>
    </v-container>
    <br />
    <br />
    <v-container>
      <h1
        class="text-uppercase text-center mt-2"
        style="
          background: -webkit-linear-gradient(#cc1111, #8ddad0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        "
      >
        Quality, Tried and Tested
      </h1>
      <v-card outlined elevation="22" border="4" hover="" color="transparent">
        <v-card-text class="text-center text-justify text-white">
          <p class="text-center text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            veritatis temporibus expedita tempora quis? Provident veniam qui
            officiis. Omnis, odit. Sunt quaerat excepturi officia molestiae
            pariatur expedita, explicabo alias iusto praesentium. Facilis a
            tempora sapiente maxime dolorem repellat, nisi accusamus architecto
            quidem harum similique et quisquam vel tempore dolores reiciendis ex
            eius voluptates ipsum excepturi at nostrum iste voluptatum. Amet
            eius corporis nam aperiam accusamus? Ullam placeat numquam provident
            deserunt rerum magnam porro vitae id perspiciatis dolor, voluptate
            aliquid assumenda totam doloribus dignissimos! Corrupti laborum
            similique deserunt. Ex, sit sint molestias exercitationem quam
            quidem repellendus quis accusantium, deserunt sapiente placeat!
          </p>
        </v-card-text>
      </v-card>
    </v-container>

    <svg
      style="
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        display: block;
      "
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#263036"
        fill-opacity="1"
        d="M0,64L48,101.3C96,139,192,213,288,234.7C384,256,480,224,576,202.7C672,181,768,171,864,181.3C960,192,1056,224,1152,240C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
      <circle cx="200" cy="200" r="50" fill="#f67e08">
        <animate
          attributeName="r"
          values="50;100;50"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      <text
        x="50%"
        y="50%"
        fill="black"
        font-size="40"
        text-anchor="middle"
        alignment-baseline="middle"
        style="
          font-size: 40px;
          font-weight: 600;
          line-height: 28px;
          text-align: left;
          text-transform: uppercase;
          font-family: 'cabin sketch';
        "
      >
        Best chapatis in town
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: null,
  }),
};
</script>

<style></style>
