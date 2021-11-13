<template>
  <div id="a">
    <div class="b">
      <div class="c">
        <h2 id="ab">Daftar Motor Siap Jual</h2>
        <table style="width: 1140px;"
        border="1">
          <thead >
            <tr>
              <th >No</th>
              <th >Nama Motor</th>
              <th >CC</th>
              <th >Tahun Produksi</th>
              <th >Harga</th>
              <th>Gambar</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="user in Project6" :key="user.id">
              <td>
                <b>{{ user.id }}</b>
              </td>
              <td>{{ user.namamotor }}</td>
              <td>{{ user.cc }}</td>
              <td>
                {{ user.tahunproduksi }}
              </td>
              <td>
                {{ user.harga }}
              </td>
              <td>
                <img :src="user.gambar" width="80px" height="80px">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "Motorr",
  data() {
    return {
      form: {
        id: "",
        namamotor: "",
        cc: "",
        tahunproduksi: "",
        harga: "",
        gambar: ""
      },
      Project6: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/Project6")
        .then((res) => {
          this.Project6 = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/Project6", this.form).then((res) => {
        this.load();
        this.form.namamotor = "";
        this.form.cc = "";
        this.form.tahunproduksi = "";
        this.form.harga = "";
        this.form.gambar = "";
      });
    },
    edit(user) {
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.namamotor = user.namamotor;
      this.form.cc = user.cc;
      this.form.tahunproduksi = user.tahunproduksi;
      this.form.harga = user.harga;
      this.form.gambar = user.gambar;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/Project6/" + form.id, {
          namamotor: this.form.namamotor,
          cc: this.form.cc,
          tahunproduksi: this.form.tahunproduksi,
          harga: this.form.harga,
          gambar: this.form.gambar
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.namamotor = "";
          this.form.cc = "";
          this.form.tahunproduksi = "";
          this.form.harga = "";
          this.form.gambar = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/Project6/" + user.id).then((res) => {
        this.load();
        let index = this.Project6.indexOf(form.namamotor);
        this.Project6.splice(index, 1);
      });
    },
  },
};
</script>