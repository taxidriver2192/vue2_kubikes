<template>
    <nav class="navbar fixed-bottom navbar-expand-lg navbar-light bg-light ">
          <button style="text-align: center; background: none; border: none;" id="NAVOverview"
            v-on:click="OverviewPage">
            <i class="fas fa-map-marker-alt" style="font-size: 40px;"></i><br>
            Kort
          </button>
          <button style="text-align: center; background: none; border: none;" id="NAVQR" v-on:click="QRPage">
            <i class="fas fa-qrcode" style="font-size: 40px;"></i><br>
            Scan Cykel
          </button>
          <button style="text-align: center; background: none; border: none;" id="NAVProfile" v-on:click="Profile">
            <i class="fas fa-user-alt" style="font-size: 40px;"></i><br>
            Profil
          </button>
          <button style="text-align: center; background: none; border: none;" id="NAVSettings" v-on:click="Settings">
            <i class="fas fa-wrench" style="font-size: 40px;"></i><br>
            Indstillinger
          </button>
        </nav>
</template>

<script>
export default {
    name: NavBar
}
</script>

<style>

</style>