<template>
  <div class="table-responsive table-striped my-5">
    <table class="table">
      <thead class="bg-anfDeepBlue text-white">
        <tr>
          <th>#ID</th>
          <th>DATE POSTED</th>
          <th>SUBJECT</th>
          <th>CONTENT</th>
          <th>CATEGORY</th>
          <th>TYPE</th>
          <th>POSTED BY</th>
          <th>UPDATED BY</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody v-for="item of items" :key="item.id">
        <tr>
          <td>{{ item.id }}</td>
          <td>{{ moment(item.createdAt).format("DD MMM YYYY HH:mm") }}</td>
          <td>
            <a @click="openItem(item)">
              {{ truncate(item.subject, 30) }}
            </a>
          </td>
          <td>
            <a @click="openItem(item)">
              {{ truncate(item.content, 60) }}
            </a>
          </td>
          <td>{{ startCase(item.category.name) }}</td>
          <td class="flex flex-column">
            <span v-show="item.isFeatured" class="badge bg-success mt-1"
              >featured</span
            >
            <span v-show="item.isTopStory" class="badge bg-warning mt-1"
              >top story</span
            >
            <span v-show="item.isEditorsPick" class="badge bg-info mt-1"
              >editors pick</span
            >
          </td>
          <td>{{ item.createdBy }}</td>
          <td>{{ item.lastChangedBy }}</td>
          <td class="space-x-3 cursor-pointer">
            <i class="fa-solid fa-trash text-danger"></i>
            <i class="fa-solid fa-edit text-anfDeepBlue"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import { startCase } from "lodash";
import moment from "moment";
import { truncate } from "../utils/utils";

export default {
  name: "NewsTable",
  props: {
    items: Array,
    openItem: Function,
  },
  data() {
    return {
      startCase,
      moment,
      truncate,
    };
  },
};
</script>
