<template>
    <div>

 <div class="navbar">
  <h3 class="admin">Dashboard Admin</h3>
 </div>
 <div class="sidebarc">
  <div class="nav"></div>
  <a href="/info-motor"><button class="btn"><i style="margin-right: ; color: white;5px" class="fa fa-list"></i></button><br></a>
  <a href="/beli-motor"><button class="btn"><i style="margin-right: 5px; color: white;" class="fas fa-motorcycle"></i></button><br></a>
  <a href="/peduli-crud"><button class="btn"><i style="margin-right: 5px; color: white;" class="fas fa-hand-holding-usd"></i></button><br></a>
  <a href="/ad-min"><button class="btnn"><i style="margin-right: 5px; color: white;" class="fas fa-sign-out-alt"></i></button><br></a>
 </div>
    <div id="az">
      <div class="bz">
        <form @submit.prevent="add" action="login.php" method="POST">
          <div class="dz">
            <h2 style="text-align: center">
              Tambahkan kegiatan
              <hr size="2px" color="black" />
            </h2>
            <br />
            <p>
              <label>
                <b>Kegiatan:</b>
              </label>
              <br />
              <textarea
                style="width: 300px; padding: 5px"
                placeholder="Kegiatan Yang Akan Dilakukan"
                type="textarea"
                v-model="form.namakegiatan"
                required
              >
              <input/>
              </textarea>
            </p>
            <br />
            <p>
              <label>
                <b>Tempat:</b>
              </label>
              <br />
              <input
                style="width: 300px; padding: 5px"
                placeholder="Dilaksanakan Di..."
                type="text"
                v-model="form.tempat"
                required
              />
            </p>
            <br />
            <p>
              <label>
                <b>Tanggal:</b>
              </label>
              <br />
              <input
                style="width: 300px; padding: 5px"
                placeholder="Masukan Di sini..."
                type="date"
                v-model="form.tanggal"
                required
              />
            </p>
            <br />
            <button
              style="background-color: blue; border-radius: 5px"
              class="btn btn-info"
              type="submit"
              id="f"
              v-show="!updateSubmit"
            >
              Tambahkan Kegiatan
            </button>
            <button
              style="background-color: green; border-radius: 5px"
              class="btn btn-info"
              type="submit"
              id="f"
              v-show="updateSubmit"
              @click="update(form)"
            >
              Update
            </button>
          </div>
        </form>
        <div class="cz">
          <h2 id="abz">Daftar Kegiatan</h2>
          <br />
          <table
            style="
              color: black;
              border: 1px solid black;
              border-collapse: collapse;
            "
          >
            <thead>
              <tr>
                <th class="thh">No</th>
                <th class="thh">Kegiatan</th>
                <th class="thh">Tempat</th>
                <th class="thh">Tanggal</th>
                <th class="thh">Perubahan</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in Kegiatan" :key="user.id">
                <td class="tdd">
                  <b>{{ user.id }}</b>
                </td>
                <td class="tdd">{{ user.namakegiatan }}</td>
                <td class="tdd">{{ user.tempat }}</td>
                <td class="tdd">
                  {{ user.tanggal }}
                </td>
                <td class="tdd">
                  <b>
                    <u>
                      <button
                        style="
                          margin-top: 3px;
                          width: 115px;
                          background-color: green;
                          text-align: center;
                          margin-bottom: 5px;
                          border-radius: 5px;
                        "
                        class="btn btn-success"
                        @click="edit(user)"
                      >
                        Edit
                      </button>
                      <br />
                      <button
                        style="
                          width: 115px;
                          text-align: center;
                          margin-bottom: 3px;
                          background-color: red;
                          border-radius: 5px;
                        "
                        class="btn btn-danger"
                        @click="del(user)"
                      >
                        Hapus
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
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      form: {
        id: "",
        namakegiatan: "",
        tempat: "",
        tanggal: "",
      },
      Kegiatan: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/Kegiatan/")
        .then((res) => {
          this.Kegiatan = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/Kegiatan/", this.form).then((res) => {
        this.load();
        this.form.namakegiatan = "";
        this.form.tempat = "";
        this.form.tanggal = "";
      });
    },
    edit(user) {
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.namakegiatan = user.namakegiatan;
      this.form.tempat = user.tempat;
      this.form.tanggal = user.tanggal;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/Kegiatan/" + form.id, {
          namakegiatan: this.form.namakegiatan,
          tempat: this.form.tempat,
          tanggal: this.form.tanggal,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.namakegiatan = "";
          this.form.tempat = "";
          this.form.tanggal = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete(" http://localhost:3000/Kegiatan/" + user.id).then((res) => {
        this.load();
        let index = this.Kegiatan.indexOf(form.motor);
        this.Kegiatan.splice(index, 1);
      });
    },
  },
};
</script>
<style>
#az {
  background-color: skyblue;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}

.bz {
  display: flex;
  text-align: left;
  padding-left: 30px;
}

.cz {
  margin-left: 40px;
  margin-right: 40px;
  padding-top: 20px;
}

.dz {
  padding: 20px;
  margin-top: 28px;
  border: 2px dotted black;
}

#fz {
  width: 300px;
}

#abz {
  text-align: left;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.thh {
  border: 1px solid black;
  border-collapse: collapse;
  background-color: white;
  padding: 5px;
  text-align: center;
}
.tdd {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
  background-color: white;
}
.sidebarc {
 width: 70px;
 height: 520px;
 background: #3A3A3AFF;
 float: left;
}
</style>