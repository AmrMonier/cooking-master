<template>
  <main class="container" id="recipes">
      <div class="card">
          <img src="../assets/logo.jpg" alt="" class="card-img-top">
          <div class="card-body">
              <h5 class="card-title">Koshary</h5>
              <!-- <p class="card-text"></p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim provident omnis quam. Iste quod pariatur tempore aliquam dicta ex nisi. -->
                <button class="btn btn-red">View recipe</button>
          </div>
      </div>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
#recipes{
    padding-top: 1rem !important;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
}
.card{
    width: 250px;
    height: 250px;
    margin: 0.25rem 0.5rem;
}
.card-body .btn{
    float: right;
}
.card-title{
    font-size: 1.8rem;
    
    text-align: center;
}
</style>