<template>
  <div>
    <div
      id="modal-back"
      ref="modalBack"
      :class="{ 'modal-back': $store.getters.getAddingNewPost }"
    >
      <div
        class="modal fade show"
        :class="{ 'modal-back': $store.getters.getAddingNewPost }"
        id="successModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="successModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog min-w-[1000px] text-primary flex"
          role="document"
        >
          <div class="modal-content mb-10">
            <div class="modal-header">
              <h5 class="modal-title">Add News</h5>
              <button type="button" class="text-primary">
                <i class="fa-solid fa-close" @click="closeAddNews()"></i>
              </button>
            </div>
            <div class="min-h-[300px]">
              <QuillEditor theme="snow" />
            </div>
            <div class="modal-footer p-2">
              <button
                type="button"
                class="btn btn-secondary active"
                @click="closeAddNews()"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary active">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNews",
  props: {},
  data() {
    return {};
  },
  methods: {
    closeAddNews() {
      this.$store.commit("updateAddingNewPost", false);
    },
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Acme", sans-serif;
  background-repeat: no-repeat;
  /* background-image: url("https://source.unsplash.com/random"); */
  background-size: cover;
}
.modal-back {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.651);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-on {
  position: absolute;
  min-height: 150px;
  min-width: 250px;
  background-color: #fff;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  color: green;
  text-align: center;
  justify-self: center;
  align-self: center;
  padding: 50px;
}
.modal-off {
  display: none;
}
#form-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  width: 100%;
  text-align: center;
  margin: 20px auto;
}
form {
  width: 20%;
  min-width: 300px;
  background-color: #2201f9be;
  padding: 40px;
  color: #fff;
  border-radius: 5px;
}
#response {
  color: rgb(255, 77, 77);
  font-size: 1rem;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  top: 10px;
  margin: 10px auto;
  width: 100%;
  height: 30px;
  text-align: center;
}
#username-input {
  width: 100%;
  height: 35px;
  margin: 5px 0 20px 0;
}
#password-input {
  width: 100%;
  height: 35px;
  margin: 5px 0 20px 0;
}
label {
  margin-left: 5px;
  margin-right: 10px;
}
#login {
  cursor: pointer;
  border: none;
  box-shadow: none;
  border-radius: 5%;
  width: 100%;
  height: 35px;
  background-color: red;
  color: #fff;
  margin: 5px 0 20px 0;
  font-size: 20px;
}
input:focus {
  outline: none;
  border: 2px solid red;
}
input {
  padding: 5px;
  border-radius: 5px;
  border: none;
}
</style>
