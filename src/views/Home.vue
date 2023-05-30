  <template>
  <div class="content">
    <section class="main-contain">
      <div class="description">
        <h1 class="description__title">Empresa x</h1>
        <p class="description__text">
          Nossa plataforma foi idealizada para facilitar a vida da sua empresa.
          <br />Foque na sua necessidade ao invés de negociação de preços.<br />
          Com a nossa plataforma, achamos o melhor preço para você.
        </p>
        <router-link class="btn__register" to="/DemandView"
          >TEST TABLE</router-link
        >
      </div>
    </section>
  </div>
</template>



<script>
import OptionPage from "./OptionPage.vue";

export default {
  name: "Home",
  components: {
    OptionPage,
  },
};
</script>


<style lang="scss" scoped>
@import "/src/style/variables.scss";
.description {
  border-radius: 20px;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.description__title {
  font-size: 4em;
  color: rgb(255, 255, 255);
  margin-bottom: 30px;
}

.description__text {
  text-align: center;
  font-size: 2em;
  font-weight: 700;
  color: rgb(255, 255, 255);
}

.img__box {
  width: 400px;
  height: 350px;
}

.img__box-home {
  height: 350px;
}

.btn__register {
  font-size: 25px;
  font-weight: 700;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid #fff;
  background-color: $persian-color;
  height: 70px;
  width: 300px;
  text-decoration: none;
  color: #fff;
  margin-top: 30px;
  transition: 0.5s;
}

.btn__register:hover {
  background-color: #ffffff96;
  color: #000;
}
</style>
