<script setup lang="ts">
import { useStore } from "@/store/index";

import PostList from "@/components/PostList.vue";
import UserProfileCard from "@/components/UserProfileCard.vue";
import UserProfileCardEditor from "@/components/UserProfileCardEditor.vue";

const store = useStore();

const props = defineProps({
  edit: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <UserProfileCard v-if="!props.edit" :user="store.authUser" />
        <UserProfileCardEditor v-else :user="store.authUser" />
        <p class="text-xsmall text-faded text-center">
          Member since june 2003, last visited 4 hours ago
        </p>

        <div class="text-center">
          <hr />
          <router-link :to="{ name: 'ProfileEdit' }" class="btn-green btn-small">
            Edit Profile
          </router-link>
        </div>
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> Joker's recent activity </span>
          <a href="#">See only started threads?</a>
        </div>

        <hr />

        <PostList :posts="store.authUser.Posts" />
      </div>
    </div>
  </div>
</template>
