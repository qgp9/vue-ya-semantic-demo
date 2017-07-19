<template>
<div class="ui text container" style="margin-top:100px;">

  <!--
  Modal 1
  -->
  <a class="ui primary button" @click="active1=true">Modal 1</a>
  <semantic-modal vertical flip inverted v-model="active1">
    <div class="header">Select a Photo</div>
    <div class="image content">
      <div class="ui medium image">
        <img src="http://semantic-ui.com/images/avatar2/large/rachel.png"/>
      </div>
      <div class="description">
        <div class="ui header">Default Profile Image</div>
        <p>
          We've found the following a href="https://www.gravatar.com"target="_blank"gravatara image associated with your e-mail address
        </p>
        <p>
          Is it okay to use this photo?
        </p>
      </div>
    </div>
    <div class="actions">
      <div class="ui black deny button" @click="active1=false">
        Nope
      </div>
      <div class="ui positive right labeled icon button" @click="active1=false">
        Yep, that's menu
        <i class="checkmark icon"></i>
      </div>
    </div>
  </semantic-modal>

  <!--
  Modal 2
  -->
  <a class="ui primary button" @click="active2=true">modal 2</a>

  <semantic-modal basic fade down :click-away="false" :esc-escape="false" :active.sync="active2">
    <div class="ui icon header">
      <i class="archive icon"></i>
      Prohibit escaping by click-away and esc key
    </div>
    <div class="content">
      <p>
        Your inbox is getting full, would you like us to enable automatic archiving of old messages?
      </p>
    </div>
    <div class="actions">
      <div class="ui red basic cancel inverted button" @click="active2=false">
        <i class="remove icon"></i>
        No
      </div>
      <div class="ui green ok inverted button" @click="active2=false">
        <i class="checkmark icon"></i>
        Yes
      </div>
    </div>
  </semantic-modal>

  <!--
  Modal 3
  -->
  <a class="ui primary button" @click="active3=true">Modal 3</a>
  <semantic-modal basic vertical flip :active.sync="active3">
    <div class="header">
      Header
      <div class="content">
        Content
      </div>
    </div>
  </semantic-modal>

  <!--
  Modal 4
  -->
  <a class="ui primary button" @click="active4=true">Modal 4</a>
  <semantic-modal fullscreen horizontal flip v-model="active4">
    <div class="ui icon header">
      <i class="archive icon">Archive Old Messages</i>
    </div>
    <div class="content">
      <p>
        Your inbox is getting full, would you like us to enable automatic archiving of old messages?
      </p>
    </div>
    <div class="actions">
      <div class="ui red basic cancel inverted button" @click="active4=false">
        <i class="remove icon"></i>
        No
      </div>
      <div class="ui green ok inverted button" @click="active4=false">
        <i class="checkmark icon"></i>
        Yes
      </div>
    </div>
  </semantic-modal>

  <!--
  Modal 5
  -->
  <a class="ui primary button" @click="active5=true">Modal 5</a>

  <semantic-modal mini fly right :active.sync="active5">
    <div class="ui header">Delete Your account</div>
    <div class="content">Are you sure you want to delete your account</div>
    <div class="actions">
      <div class="ui negative button" @click="active5=false">No</div>
      <div class="ui positive right labeled icon button" @click="active5=false">
        Yes
        <i class="checkmark icon"></i>
      </div>
    </div>
  </semantic-modal>

  <!--
  Modal 6
  -->
  <a class="ui primary button" @click="active6=true">Modal 6</a>

  <semantic-modal small slide up :active.sync="active6">
    <div class="ui header">Delete Your account</div>
    <div class="content">Are you sure you want to delete your account</div>
    <div class="actions">
      <div class="ui negative button" @click="active6=false">No</div>
      <div class="ui positive right labeled icon button" @click="active6=false">
        Yes
        <i class="checkmark icon"></i>
      </div>
    </div>
  </semantic-modal>

  <!--
  Modal 7
  -->
  <a class="ui primary button" @click="active7=true">Modal 7</a>

  <semantic-modal longer tada :active.sync="active7">
    <div class="header">header</div>
    <div class="scrolling content">
      <p v-for="i in 100">very long content</p>
    </div>
  </semantic-modal>

</div>
</template>

<script>
import SemanticModal from 'vue-ya-semantic-modal'

export default {
  name: 'Modal',
  data () {
    return {
      basic: true,
      active1: false,
      active2: false,
      active3: false,
      active4: false,
      active5: false,
      active6: false,
      active7: false,
      active8: false,
      active9: false
    }
  },
  methods: {
    close (name) {
      this.$refs[name].$emit('close')
      setTimeout(() => { this.active = false }, 500)
    }
  },
  components: {
    SemanticModal: SemanticModal()
  }
}
</script>
