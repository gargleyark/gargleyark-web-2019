<template>
  <article>
    <h1>{{ data.fields.title }}</h1>
    <div class="name">
      <label for="name" :class="{showLabel: name}">{{ data.fields.namePlaceholder }}</label>
      <input name="name" v-model="name" spellcheck="false" maxlength="255" tabindex="1" type="text" :placeholder="data.fields.namePlaceholder">
    </div>
    <div class="email">
      <label for="email" :class="{showLabel: email}">{{ data.fields.emailPlaceholder }}</label>
      <input name="email" v-model="email" spellcheck="false" maxlength="255" tabindex="1" type="email" :placeholder="data.fields.emailPlaceholder" :class="{invalid: invalidEmail}">
    </div>
    <div class="message">
      <label for="message" :class="{showLabel: message}">{{ data.fields.messagePlaceholder }}</label>
      <textarea name="message" v-model="message" spellcheck="true" rows="5" cols="50" tabindex="2" :placeholder="data.fields.messagePlaceholder"></textarea>
    </div>
    <Button :value="data.fields.buttonValue" :clickEvent="submit"/>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </article>
</template>

<script>
import Button from '~/components/Button'

export default {
  props: {
    data: Object
  },
  components: {
    Button
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      errorMessage: '',
    }
  },
  computed: {
    invalidEmail() {
      return this.email.length > 1 && !this.email.match(/\w\@\w+\.\w+/)
    }
  },
  methods: {
    submit() {
      const badInputs = []
      if (!this.email.length || this.invalidEmail) {
        badInputs.push('email')
      }
      if (!this.message.length) {
        badInputs.push('message');
      }
      if (!this.name.length) {
        badInputs.push('name');
      }
      if (badInputs.length > 1) {
        badInputs[badInputs.length - 1] = `and ${badInputs[badInputs.length - 1]}`
      }

      if (!badInputs.length) {
        this.name = ''
        this.email = ''
        this.message = ''
        this.errorMessage = ''
      } else {
        this.errorMessage = `Unable to send with invalid ${badInputs.join(', ')}.`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  opacity: 0;
  transition: opacity 0.3s;
  color: #999;
  font-size: 14px;
  margin-left: 8px;

  &.showLabel {
    opacity: 1;
  }
}

textarea {
  resize: vertical;
}

h1 {
  padding-left: 8px;
  margin-bottom: 8px;
  font-size: 32px;
}

input,
textarea {
  color: #999;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #999;
  padding: 8px;
  display: block;
  margin-bottom: 32px;
  width: 90%;
  transition: border-bottom 0.3s, color 0.3s;

  &.invalid {
    color: #cb242d;
    border-bottom: 1px solid #cb242d;
  }

  &:focus {
    color: #333;
    border-bottom: 1px solid #333;
  }
}
</style>



