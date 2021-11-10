<template>
  <div id="a">
    <div class="b">
      <form @submit.prevent="add" action="login.php" method="POST">
        <div class="d">
          <h4>
            Tambahkan Motor Baru
            <hr size="2px" color="black" />
          </h4>
          <p>
            <label><b>Nama Motor:</b></label
            ><br />
            <input
              style="width: 300px"
              placeholder="Masukkan Jenis Motor..."
              type="text"
              v-model="form.namamotor"
              required
            />
          </p>
          <p>
            <label><b>CC:</b></label
            ><br />
            <input
              style="width: 300px"
              placeholder="CC..."
              type="text"
              v-model="form.cc"
              required
            />
          </p>
          <p>
            <label><b>Tahun Produksi:</b> </label><br />
            <input
              style="width: 300px"
              placeholder="Tahun Produksi..."
              type="text"
              v-model="form.tahunproduksi"
              required
            />
          </p>
          <p>
            <label><b>Harga:</b></label
            ><br />
            <input
              style="width: 300px"
              placeholder="Masukkan Harga Motor..."
              type="text"
              v-model="form.harga"
              required
            />
          </p>
          <p>
            <label><b>Gambar:</b></label
            ><br />
            <input
              style="width: 300px"
              placeholder="Masukkan Link Gambar..."
              type="text"
              v-model="form.gambar"
              required
            />
          </p>
          <button
            class="btn btn-info"
            type="submit"
            id="f"
            v-show="!updateSubmit"
          >
            Tambah Motor 
          </button>
          <button
            class="btn btn-info"
            type="submit"
            id="f"
            v-show="updateSubmit"
            @click="update(form)"
          >
            Update
          </button>
        </div>
        <p><i>*Syarat & Ketentuan Berlaku</i></p>
      </form>

      <div class="c">
        <h2 id="ab">Daftar Motor Siap Jual</h2>
        <table
        border="1">
          <thead >
            <tr>
              <th >No</th>
              <th >Nama Motor</th>
              <th >CC</th>
              <th >Tahun Produksi</th>
              <th >Harga</th>
              <th>Gambar</th>
              <th >Perubahan</th>
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
              <td>
                <b>
                  <u>
                    <button
                      style="
                        width: 115px;
                        text-align: center;
                        margin-bottom: 5px;
                        background-color: lime
                      "
                      class="btn btn-success"
                      @click="edit(user)"
                    >
                      Ubah
                    </button>
                    <br />
                    <button
                      style="width: 115px; text-align: center; background-color: gold"
                      class="btn btn-danger"
                      @click="del(user)"
                    >
                      Sold Out
                    </button>
                  </u>
                </b>
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
<style>
#a {
  border-radius: 25px;
  background-color: rgb(180, 70, 70);
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  color: white;
}
.b {
  display: flex;
  text-align: left;
  padding-left: 30px;
}
.c {
  width: 900px;
  margin-left: 40px;
  margin-right: 40px;
  padding-top: 20px;
  font-family: "Courier New", Courier, monospace;
  text-align: center;
}
.d {
  padding: 20px;
  margin-top: 28px;
  border: 2px dotted black;
}
#f {
  width: 300px;
}
#ab {
  text-align: left;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
i{
  color: blue
}
table {
  width: 700px;
}
</style>


