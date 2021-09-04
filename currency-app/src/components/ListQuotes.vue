<template>
  <table class="table">
    <thead>
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Mínimo</th>
        <th>Máximo</th>
        <th>Variação</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(quote, key) in quotes" :key="key">
        <td>{{ key }}</td>
        <td>{{ quote.name }}</td>
        <td>{{ quote.high }}</td>
        <td>{{ quote.low }}</td>
        <td>
          <span
            :class="[
              'label', 'label-rounded', 'text-small',
              {'label-error': quote.pctChange < 0, 'label-success': quote.pctChange > 0}
            ]"
          >
            {{ quote.pctChange }} %
          </span>
        </td>
        <th>
          <a
            v-if="!listenQuotes.includes(key)"
            data-tooltip="Seguir"
            @click="$emit('listen', key)"
            class="btn btn-primary btn-sm tooltip tooltip-left"
          >
            <i class="icon icon-plus"/>
          </a>
        </th>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    quotes: {
      type: Object, required: true,
    },
    listenQuotes: {
      type: Array, required: true,
    }
  },
  emits: ['listen'],
};
</script>