<template>
    <div id='NavBar'>
        <router-link to= "/QR" id="QR link">
            <h1> QR Skanner</h1>
        </router-link>
        <router-link to="/Cycles" id="cycles list link">
            <h1>Kort</h1>
        </router-link>
        <router-link to="/Profil" id="profil link">
            <h1>Profil</h1>
        </router-link>
        <router-link to="/Settings" id="settings link">
            <h1>Indstillinger</h1>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>

</style>