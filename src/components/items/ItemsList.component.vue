<template>
  <div>
    <h3>Items - loading: {{ loading }}:</h3>
    <LoaderComponent v-show="loading" />
    <ul>
      <ItemComponent
        v-for="item in items"
        :key="item.id"
        :model="item"
        @select="onItemSelect"
      />
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ItemInterface } from "@/models/items/Item.interface";
import ItemComponent from "@/components/items/children/ItemComponent.vue";
import LoaderComponent from "../shared/LoaderComponent.vue";

export default defineComponent({
  // add the components block here:
  components: {
    ItemComponent,
    LoaderComponent,
  },
  props: {
    items: {
      type: Array as PropType<ItemInterface[]>,
    },
    loading: {
      type: Boolean,
    },
  },
  setup() {
    const onItemSelect = (item: ItemInterface) => {
        item.selected = !item.selected
        console.log('onItemSelect', item.id, item.selected)      
      }

    return {
      onItemSelect,
    };
  },
});
</script>

<style lang="scss">
ul {
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
</style>
