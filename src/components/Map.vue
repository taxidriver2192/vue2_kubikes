<template>
  <div>
      <h1>test overskrift</h1>
      <p>{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longitude</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            coordinates:{
                lat: 0,
                lng: 0
            }
        }
    },
    created() {
        // get user coordinates from browser request
        this.$getLocation({})
            .then(coordinates => {
                this.coordinates = coordinates;
            });

    
    }
}
</script>

<style>

</style>