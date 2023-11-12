<template>
  <div class="table-responsive table-striped my-5">
    <table class="table">
      <thead class="bg-anfDeepBlue text-white">
        <tr>
          <th>#ID</th>
          <th>DATE ADDED</th>
          <th>USERNAME</th>
          <th>EMAIL</th>
          <th>TYPE</th>
          <th>STATUS</th>
          <th>CREATED BY</th>
          <th>UPDATED BY</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody v-for="item of items" :key="item.id">
        <tr>
          <td>{{ item.id }}</td>
          <td>{{ moment(item.createdAt).format("DD MMM YYYY HH:mm") }}</td>
          <td>
            {{ item.username }}
          </td>
          <td>
            {{ item.email }}
          </td>
          <td>{{ item.type }}</td>
          <td>
            <span v-show="item.status" class="badge bg-success">active</span>
            <span v-show="!item.status" class="badge bg-secondary"
              >in-active</span
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
  name: "UserTable",
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
