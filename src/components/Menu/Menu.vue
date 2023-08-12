<template>

<nav>
    <ul class="menu">
      <router-link to="/" class="item-menu">
        <li>
          <h2>Home</h2>
          <img :width="50" src="https://img.icons8.com/stickers/100/house.png" alt="home"/>
        </li>
      </router-link>

      <router-link to="talentos/novo" class="item-menu">
        <li>
          <h2>Cadastro</h2>
          <img :width="50" src="https://img.icons8.com/stickers/100/group-folder.png" alt="imagem de pasta"/>
        </li>
      </router-link>

      <router-link to="/sobre" class="item-menu">
        <li>
          <h2>Sobre</h2>
          <img :width="50" src="https://img.icons8.com/dusk/64/map.png" alt="sobre"/>
        </li>
      </router-link>
    </ul>
  </nav>

</template>

<style scoped>
.menu{
  display: flex;
  justify-content: space-between;
  list-style: none;
}

.item-menu{
  display: flex;
  border: 1px solid #000;
  padding: 5px;
  width: 33%;
}
.item-menu li{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 5px;
  width: 33%;
}
</style>