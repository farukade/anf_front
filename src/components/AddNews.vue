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
          <div id="form" class="modal-content mb-10 p-3">
            <div class="modal-header">
              <h5 class="modal-title">Add News</h5>
              <button type="button" class="text-danger">
                <i class="fa-solid fa-close" @click="closeAddNews()"></i>
              </button>
            </div>
            <div class="row p-3 w-full">
              <div class="w-1/2 p-2">
                <label for="title">Title</label>
                <input
                  name="title"
                  type="text"
                  class="form-control"
                  placeholder="Enter subject ..."
                />
              </div>
              <div class="w-1/2 p-2">
                <label for="category">Category</label>
                <input
                  name="category"
                  type="text"
                  class="form-control"
                  placeholder="Select category ..."
                />
              </div>
            </div>
            <div class="min-h-[300px] text-secondary">
              <!-- <QuillEditor
                v-model:content="content"
                toolbar="full"
                :options="options"
              /> -->
              <!-- <div id="editor" toolbar="full"></div> -->
              <div ref="quillContainer" class="quill-container"></div>
            </div>
            <div class="modal-footer p-2 z-50 cursor-pointer">
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
import { defineComponent } from "vue";
import { Quill } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import ImageUploader from "quill-image-uploader";
import { notifyError, request, uploadRequest } from "../utils/utils";

export default defineComponent({
  name: "AddNews",
  props: {},
  data() {
    return {
      content: {},
    };
  },
  components: {},
  setup: () => {
    const modules = {
      name: "imageUploader",
      module: ImageUploader,
      options: {
        upload: (file) => {
          return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("image", file);

            const uri = "/upload";
            uploadRequest("POST", uri, formData)
              .then((data) => {
                console.log("data", data);
                if (data.success) {
                  resolve(data.result.url);
                } else {
                  reject("Upload failed");
                }
              })
              .catch((error) => {
                console.log("error", error);
                reject("Upload failed");
              });
          });
        },
      },
    };
    return { modules };
  },
  methods: {
    closeAddNews() {
      this.$store.commit("updateAddingNewPost", false);
    },
    async savePost() {
      try {
        const data = {};
        const uri = "/news";
        const rs = await request("POST", uri, true, data);
        if (rs.success) {
          notifySuccess("Post added!");
          this.closeAddNews();
        } else {
          notifyError(rs.message);
        }
      } catch (error) {
        console.log(error);
        notifyError(error.message);
      }
    },
  },
  mounted() {
    this.quill = new Quill(this.$refs.quillContainer, {
      debug: "info",
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          [{ header: 1 }, { header: 2 }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ direction: "rtl" }],
          [{ size: ["small", false, "large", "huge"] }],
          [{ color: [] }, { background: [] }],
          [{ font: [] }],
          [{ align: [] }],
          ["clean"],
          ["link", "image", "video"],
        ],
      },
      theme: "snow",
    });
    const defaultContents = [{ insert: "Hello, this is the default content." }];
    this.quill.setContents(defaultContents);

    // Optionally disable editor
    // this.quill.disable();
  },
  beforeUnmount() {
    if (this.quill) {
      this.quill.destroy();
    }
  },
  created() {
    if (this.quill) {
      this.quill.on("editor-change", function (eventName, ...args) {
        if (eventName === "text-change") {
          // args[0] will be delta
        } else if (eventName === "selection-change") {
          // args[0] will be old range
        }
      });
    }
  },
});
</script>

<style>
#form {
  overflow-y: scroll;
  max-height: 80vh;
}
.quill-container .ql-editor {
  min-height: 300px;
}
</style>