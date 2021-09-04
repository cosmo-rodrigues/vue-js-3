<template>
  <div>
    <ListQuotes :quotes="quotes" :listen-quotes="listenQuotes"/>
    <div class="mt-2 text-right">
      <cite class="text-small">
        Atualizará novamente em <b>{{ nextUpdateTime }} segundos</b>
      </cite>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import ListQuotes from './ListQuotes';

export default {
  components: { ListQuotes },
  setup() {
    const quotes = ref({});
    const nextUpdateTime = ref(30)
    return { quotes, nextUpdateTime };
  },
  props: {
    listenQuotes: {
      type: Array, required: true,
    }
  }
};
</script>
