<template>
  <form @submit.prevent="handleSubmit" class="form-new"> 
    <h1>Cadastro de Talentos</h1>

      <label for="name">Nome Completo</label>
      <input id="name" v-model="name">

      <label for="email">E-mail</label>
      <input id="email" v-model="email">

      <label for="dataNascimento">Data de Nascimento</label>
      <input id="dataNascimento" v-model="date_birth">

      <label for="whatsapp">Whatsapp</label>
      <input id="whatsapp" v-model="phone">

    <label for="area">Área de Interesse</label>
    <select id="area" v-moldel="area">
      <option value="frontend">FrontEnd</option>
      <option value="backend">BackEnd</option>
      <option value="fullstack">FullStack</option>
    </select>

    <label for="nivel">Nivel Profissional</label>
    <select id="nivel" v-moldel="nivel">
      <option value="junior">Júnior</option>
      <option value="pleno">Pleno</option>
      <option value="senior">Senior</option>
    </select>

    <p>Selecione suas habilidades</p>
    <div v-if="area === 'frontend' || area === 'fullstack'">
      <label><input type="checkbox" v-model="skills" value="HTML"/>HTML</label>
      <label><input type="checkbox" v-model="skills" value="CSS"> CSS</label>
      <label><input type="checkbox" v-model="skills" value="JAVASCRIPT"> JAVASCRIPT</label>
      <label><input type="checkbox" v-model="skills" value="VUE"> VUE</label>
    </div>

    <div v-if="area === 'backend' || area === 'fullstack'">
      <label><input type="checkbox" v-model="skills" value="Node"/>Node</label>
      <label><input type="checkbox" v-model="skills" value="Php"> Php</label>
      <label><input type="checkbox" v-model="skills" value="Laravel"> Laravel</label>
      <label><input type="checkbox" v-model="skills" value="Java"> Java</label>
    </div><br>

    <label>Carta de Apresentação</label>
    <textarea v-model="apresentation"></textarea><br>

    <button type="submit">Cadastrar</button>

  </form>

</template>

<script>
  import * as yup from 'yup';

export default {
  data() {
    return{
      name: "",
      email: "",
      date_birth: "",
      phone: "",
      area: "",
      nivel: '',
      skills: [],
      apresentation: ""
    }
  },
  methods: {
    handleSubmit(){
      try {
      const schema = yup.object().shape({
        name:yup.string().required("Nome é obrigatório"),
        email:yup.string().email("E-mail não é válido").required("E-mail é obrigatório"),
        area: yup.string().required("A área é obrigatória")
      })

      schema.validateSynd({
        name: this.name,
        email: this.email,
        area: this.area
      })
    } catch (error){
      alert('Erro no formulário')
    }


    }
  },
  watch: {
    area(newValue, oldValue){
      if (newValue !== oldValue)
        this.skills =[]
    }
  }
}
</script>

<style scoped>
  .form-new{
    display: flex;
    flex-direction: column;
  }

  h1{
    text-align: center;
  }

</style>