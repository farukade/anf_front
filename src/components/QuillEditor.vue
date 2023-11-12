
<script>
import { ref, defineComponent } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import BlotFormatter from "quill-blot-formatter";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  setup: () => {
    const modules = {
      name: "imageUploader",
      module: ImageUploader,
      options: {
        upload: (file) => {
          return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("image", file);

            axios
              .post("/upload-image", formData)
              .then((res) => {
                console.log(res);
                resolve(res.data.url);
              })
              .catch((err) => {
                reject("Upload failed");
                console.error("Error:", err);
              });
          });
        },
      },
    };
    return { modules };
  },
};
</script>