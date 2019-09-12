<template>
    <div>
        <div class="addCar">
         <img :src="require(url)" alt="" />
          <label>
              <slot></slot>
          </label>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        url:String
    }
}
</script>


<style lang="scss" scoped>

</style>