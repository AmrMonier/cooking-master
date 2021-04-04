<template>
<div class="container-fluid search-box">
      <div class="row">
        <div class="col col-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
          />
        </div>
        <div class="col col-3">
          <select class="form-select">
            <option selected disabled hidden>Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col col-3">
          <select class="form-select">
            <option selected disabled hidden>Culture food</option>
              
                        <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col col-3">
          <select class="form-select">
            <option selected disabled hidden>Main ingredient</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>  
</template>

<script>
export default {
    name: 'SearchComponent'
}
</script>

<style scoped>
.search-box {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid var(--grey);
}   
.search-box input, .search-box select{
    border: none;
}
.search-box input:focus, .search-box select:focus{
    outline: none;
    box-shadow: 0 0 0 2px var(--white);
}
select:invalid{
    color: var(--grey);
}
</style>