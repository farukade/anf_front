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
            <div>
              <div class="modal-header">
                <h5 class="modal-title">Add News</h5>
                <button type="button" class="text-danger">
                  <i class="fa-solid fa-close" @click="closeAddNews()"></i>
                </button>
              </div>
              <div class="row p-0 m-1 w-full">
                <div class="p-1">
                  <label for="title">Title</label>
                  <input
                    name="title"
                    type="text"
                    class="form-control"
                    placeholder="Enter subject ..."
                  />
                </div>
              </div>
              <div class="row p-0 m-1 w-full mb-2">
                <div class="w-1/2 p-1">
                  <label for="category">Category</label>
                  <select name="category" id="" class="form-control">
                    <option value="">Select category</option>
                    <option
                      id="category.id"
                      :key="category.id"
                      v-for="category of categories"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                </div>
                <div class="w-1/2 p-1">
                  <label for="image">Featured Image</label>
                  <input type="file" class="form-control" name="image" />
                </div>
                <div class="d-flex">
                  <div class="p-2">
                    <div>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Top Story
                      </label>
                    </div>
                  </div>
                  <div class="p-2">
                    <div>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Featured
                      </label>
                    </div>
                  </div>
                  <div class="p-2">
                    <div>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Editor's pick
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="min-h-[300px] text-secondary">
                <div ref="quillContainer" class="quill-container"></div>
              </div>
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
import BlotFormatter from "quill-blot-formatter";

Quill.register("modules/imageUploader", ImageUploader);
Quill.register("modules/blotFormatter", BlotFormatter);

export default defineComponent({
  name: "AddNews",
  data() {
    return {
      content: {},
      quill: null,
      categories: [
        { id: 1, name: "One" },
        { id: 2, name: "Two" },
        { id: 3, name: "Three" },
      ],
    };
  },
  components: {},
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
    async resizeImage(file, maxWidth, maxHeight) {
      return new Promise((resolve) => {
        const img = new Image();
        const reader = new FileReader();

        reader.onload = function (e) {
          img.src = e.target.result;
        };

        reader.readAsDataURL(file);

        img.onload = function () {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const width = img.width;
          const height = img.height;

          let newWidth = width;
          let newHeight = height;

          if (width > maxWidth) {
            newWidth = maxWidth;
            newHeight = (height * maxWidth) / width;
          }

          if (newHeight > maxHeight) {
            newWidth = (width * maxHeight) / height;
            newHeight = maxHeight;
          }

          canvas.width = newWidth;
          canvas.height = newHeight;

          ctx.drawImage(img, 0, 0, newWidth, newHeight);

          // Convert canvas to Blob
          canvas.toBlob((blob) => {
            const resizedImageUrl = URL.createObjectURL(blob);
            resolve(resizedImageUrl);
          }, file.type);
        };
      });
    },
    async handleFileChange(event) {
      const file = event.target.files[0];

      if (file) {
        const resizedImageData = await this.resizeImage(file, 300, 200);
        // Now you can upload or use the resized image data as needed
        console.log("Resized Image Data:", resizedImageData);
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
        blotFormatter: {},
        // imageUploader: {
        //   upload: (file) => {
        //     return new Promise((resolve, reject) => {
        //       const formData = new FormData();
        //       formData.append("image", file);

        //       const uri = "/upload";
        //       uploadRequest("POST", uri, formData)
        //         .then((data) => {
        //           console.log("data", data);
        //           if (data.success) {
        //             resolve(data.result.url);
        //           } else {
        //             reject("Upload failed");
        //           }
        //         })
        //         .catch((error) => {
        //           console.log("error", error);
        //           reject("Upload failed");
        //         });
        //     });
        //   },
        // },
      },
      theme: "snow",
    });

    if (this.quill) {
      const defaultContents = [{ insert: "Add news here... " }];
      this.quill.setContents(defaultContents);

      const bFormatter = this.quill.getModule("blotFormatter");

      if (bFormatter) {
        bFormatter.addImageClickHandler = (image) => {
          console.log("Selected Image:", image);

          this.resizeImage(image).then((resizedImage) => {
            this.quill.clipboard.dangerouslyPasteHTML(
              this.quill.getSelection().index,
              `<img src="${resizedImage}" alt="Resized Image" />`
            );
          });
        };
      }
    }
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
.fixed-bottom-right {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 10px; /* Optional margin for better visual appearance */
  background-color: #e0e0e0;
  padding: 10px;
}
</style>