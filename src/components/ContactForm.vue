<template>
  <form>
    <h1>{{ data.fields.title }}</h1>
    <div>
      <label for="email">{{ data.fields.emailPlaceholder }}</label>
      <input name="email" spellcheck="false" maxlength="255" tabindex="1" type="email" :placeholder="data.fields.emailPlaceholder">
    </div>
    <div>
      <label for="message">{{ data.fields.messagePlaceholder }}</label>
      <textarea name="message" spellcheck="true" rows="5" cols="50" tabindex="2" :placeholder="data.fields.messagePlaceholder"></textarea>
    </div>
    <button type="submit">{{ data.fields.buttonValue }}</button>
  </form>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
label {
  display: none;
}
</style>



