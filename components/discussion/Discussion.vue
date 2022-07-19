<template>
  <div class="mb-4">
  <card-component v-if="discussions.length === 0">
    No Discussions... Please add a comment to start a discussion
  </card-component>

  <article v-else :key="discussion.id" v-for="discussion in discussions" class="media">
    <figure class="media-left">
      <p v-if="discussion.sender_type === 'customer' " class="image is-64x64">
        <img class="is-rounded"  :src="discussion.customer.user.profile_picture_url">
      </p>
      <p  v-else-if="discussion.sender_type === 'vendor' " class="image is-64x64">
        <img class="is-rounded"  :src="discussion.advertisement.vendor.user.profile_picture_url">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <strong v-if="discussion.sender_type === 'customer' ">{{discussion.customer.user.name}}</strong>
        <strong v-else-if="discussion.sender_type === 'vendor' ">{{discussion.advertisement.vendor.name}}  <b-tag type="is-primary">vendor</b-tag></strong>
        <div>
          <p>{{discussion.message}}</p>
          <div>
            <small>{{$dayjs().from($dayjs(discussion.created_at), true)}}</small>
          </div>
        </div>
      </div>

    </div>
  </article>
  </div>
</template>

<script>
export default {
  name: "Discussion",
  props: {
    discussions: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
