<template>
    <div>

 <div class="navbar">
  <h3 class="admin">Dashboard Admin</h3>
 </div>
 <div class="sidebar">
  <div class="nav"></div>
  <a href="/info-motor"><button class="btn"><i style="margin-right: ; color: white;5px" class="fa fa-list"></i></button><br></a>
  <a href="/beli-motor"><button class="btn"><i style="margin-right: 5px; color: white;" class="fas fa-motorcycle"></i></button><br></a>
  <a href="/peduli-crud"><button class="btn"><i style="margin-right: 5px; color: white;" class="fas fa-hand-holding-usd"></i></button><br></a>
  <a href="/ad-min"><button class="btnn"><i style="margin-right: 5px; color: white;" class="fas fa-sign-out-alt"></i></button><br></a>
 </div>

<div class="hokairi">
  <h1>SELAMAT DATANG ADMIN!!!!</h1>
</div>




    </div>
</template>

<script>
    export default {
        name: 'Dasboard'
    }
</script>

<style>

* {
 padding: 0;
 margin: 0;
}
body {
 background: #E7E7E7FF;
}
.navbar {
 width: 100%;
 height: 60px;
 background: #3A6EFFFF;
 border-bottom: 2px solid #585858FF;
}
.sidebar {
 width: 70px;
 height: 557px;
 background: #3A3A3AFF;
 float: left;
}
.admin {
 color: white;
 font-size: 35px;
 line-height: 60px;
 margin-left: 20px;
}
.btn {
 width: 70px;
 height: 40px;
 background: #3A3A3AFF;
 border: none;
 border-bottom: 1px solid #666666FF;
 color: white;
 cursor: pointer;
 outline-color: #3A3A3AFF;

}
.btnt {
 width: 70px;
 height: 40px;
 background: #2D2D2DFF;
 border: none;
 border-bottom: 1px solid #666666FF;
 color: white;
 cursor: pointer;
 outline-color: #2D2D2DFF;
 
}
.btnn {
 width: 70px;
 height: 40px;
 background: #595959FF;
 border: none;
 border-bottom: 1px solid #666666FF;
 color: white;
 cursor: pointer;
 outline-color: #595959FF;
}
.btn:hover {
 background: #595959FF;
}
.btnn:hover {
 background: #353535FF;
}
.title {
 width: 120px;
 height: 150px;
 float: right;
}
.insert {
 margin-top: 40px;
 margin-left: 20px;
 width: 150px;
 height: 30px;
 background: #507AC7FF;
 border:none;
 color: white;
 font-weight: bold;
 box-shadow: 2px 2px 4px grey;
 cursor: pointer;
}
.insert:hover {
 background: #335FFFFF;
}
.in {
 width: 400px;
 margin-left: 50px;
 margin-top: 50px;
 height: 40px;
 background: none;
 border :1px solid #55B6FFFF;
 border-radius: 20px;
 outline:none;
 text-align: center;
}
.inn {
 width: 400px;
 margin-left: 50px;
 margin-top: 10px;
 height: 40px;
 background: none;
 border :1px solid #55B6FFFF;
 border-radius: 20px;
 text-align: center;
 outline: none;
}
.innn {
 margin-left: 50px;
 margin-top: 10px;
}
.sbm {
 width: 148px;
 height: 30px;
 background-color: #5180EEFF;
 border: none;
 color: white;
 font-weight: bold;
 box-shadow: 2px 2px 3px grey;
}
.hokairi {
 background-color: white;
 padding: 260px;
}
</style>