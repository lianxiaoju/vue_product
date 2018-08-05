<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style lang='less'>
.title {
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 20px;
  background: #F7F7F7;
  h3{
    font-weight: normal;
    margin-bottom: 2px;
  }
  p{
    color: #666;
    border: 1px solid #666;
    padding: 0 3px;
    font-size: 10px;
  }
}
</style>
