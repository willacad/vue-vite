  <template>
  <div class="content">
    <section class="main-contain">
      <div class="description">
        <h1 class="description__title">Melhor pedido</h1>
        <p class="description__text">
          Nossa plataforma foi idealizada para facilitar a vida da sua empresa.
          <br />Foque na sua necessidade ao invés de negociação de preços com
          a<br />
          nossa plataforma, achamos o melhor preço para você.
        </p>
      </div>
      <div class="img__box">
        <img
          class="img__box-home"
          src="/src/assets/image/ipad.png"
          alt=""
          srcset=""
        />
      </div>
    </section>
  </div>
</template>



<script>
export default {
  name: "Home",
};
</script>


<style lang="scss" scoped>
.main-contain {
  height: 25em;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 40%;
}

.description__text {
  text-align: center;
  font-size: 25px;
  font-weight: 400;
}

.img__box {
  width: 400px;
  height: 350px;
}

.img__box-home {
  height: 350px;
}
</style>
