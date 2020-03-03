<template>
  <div>
    <b-button
      v-b-popover.hover.top="'I am popover directive content!'"
      title="Popover Title"
    >Hover Me</b-button>

    <b-button id="popover-asd">Hover Me</b-button>
    <b-popover target="popover-asd" triggers="hover" placement="top">
      <template v-slot:title>Popover Title</template>
      I am popover
      <b>component</b> content!
    </b-popover>
  </div>
</template>