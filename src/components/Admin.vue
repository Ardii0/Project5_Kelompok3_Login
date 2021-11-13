<template>
    <div class="kotak_login">
 <p class="tulisan_login">Silahkan login</p>

  <label>Username</label>
  <input type="text" name="username" v-model="form.username" class="form_login" placeholder="Masukan Username atau Email...">

  <label>Password</label>
  <input type="password" name="password" v-model="form.password" class="form_login" placeholder="Masukan Password...">

  <input type="button" @click="login()" class="tombol_login" value="LOGIN">

  <br>
  <br>
</div>
</template>

<script >
import axios from "axios"
    export default {
        name: "Admin",
        data() {
            return {
                form: {
                    username: "",
                    password: ""
                },
                users: []
            }
        },
        
        methods: {
            async getUser() {
                const user = await axios.get('http://localhost:3000/users')
                this.users = user.data
            },
            
            login() {
                const hasil = this.users.find((data) => data.username === this.form.username )
                if (hasil === undefined) {
                    alert("Username Or Password Not Found")
                } else {
                    this.$router.push("/das-board")
                }
            }
        },
        mounted() {
            this.getUser()
        },
    }
</script>

<style>
h1{
 text-align: center;
 font-weight: 300;
}
 
.tulisan_login{
 text-align: center;
 text-transform: uppercase;
}
 
.kotak_login{
 color: white;
 width: 350px;
 background: red;
 margin: 80px auto;
 padding: 30px 20px;
 border-radius: 10px;
}
 
label{
 font-size: 11pt;
}
 
.form_login{
 box-sizing : border-box;
 width: 100%;
 padding: 10px;
 font-size: 11pt;
 margin-bottom: 20px;
}
 
.tombol_login{
 background: #46de4b;
 color: white;
 font-size: 11pt;
 width: 100%;
 border: none;
 border-radius: 3px;
 padding: 10px 20px;
}
 
.link{
 color: #232323;
 text-decoration: none;
 font-size: 10pt;
}
</style>