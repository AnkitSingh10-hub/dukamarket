<template>
  <q-input
    v-bind="$attrs"
    v-model="syncValue"
    :error-message="errorMessage"
    :error="!!errorMessage"
    :label="props.label"
    :class="{
      'q-field--required': props.qvValidate && props.qvValidate.includes('required')
    }"
  >
    <template v-for="(_, slot) of slots" :key="slot" v-slot:[slot]="scope">
      <slot v-if="scope" :name="slot" v-bind="scope" />
      <slot v-else :name="slot" />
    </template>
  </q-input>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, useSlots } from 'vue'
defineComponent({
  inheritAttrs: false
})
</script>

<script lang="ts" setup>
import type { QInputSlots } from 'quasar'
import { useField } from 'vee-validate'
// eslint-disable-next-line
const slots: QInputSlots = useSlots() as any
const props = defineProps({
  modelValue: {
    type: [String, Number, Object],
    required: true
  },
  label: {
    type: String,
    required: true
  },
  vid: {
    type: String,
    default: function (props: any) {
      return props.label
    }
  },
  qvValidate: {
    type: String,
    required: false
  }
})

const emits = defineEmits(['update:modelValue'])

const syncValue = computed({
  get() {
    return value.value
  },
  set(data: any) {
    value.value = data
    emits('update:modelValue', data)
  }
})

const { errorMessage, value } = useField<any>(props.vid, props.qvValidate)

onMounted(() => {
  if (props.modelValue) {
    value.value = props.modelValue
  }
})
</script>
