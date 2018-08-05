<template>
    <label class="check-item">
        <input type="checkbox" :name="name" v-model="val"  />
        <i></i>
    </label>
</template>

<script>
    export default {
        props: {
            name: String,
            checked: Boolean,
            value: [String,Boolean,Array]
        },
        data () {
            return {
                val: this.value
            }
        },
        watch: {
            val (newVal) {
                this.$emit('input', newVal)
            },
            value (newVal) {
                this.val = newVal
            }
        }
    }
</script>

<style scoped lang="less">
.check-item {
    display: inline-block;
    vertical-align: middle;
    margin-top: -2px;
    margin-right: 5px;
    input {
        display: none;
        & + i::before {
            content: '';
            display: block;
            width: 16px;
            height: 16px;
            background: #ccc;
            border-radius: 100%;
        }
        &:checked + i::before{
            content: '✔';
            background: #f00;
            position: relative;
            color: #fff;
        }
    }
}
</style>