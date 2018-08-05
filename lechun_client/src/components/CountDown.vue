<template>
    <div class="time-box">
        <template v-for="(item, index) in timeArr">
            <span :key="index">{{item}}</span>
            <b :key="index + 99" v-if="index < timeArr.length - 1">:</b>
        </template>
    </div>
</template>
<script>
export default {
    props: ["time"],
    data () {
        return {
            interval: '',
            surplusTime: ''
        }
    },
    watch: {
      surplusTime (newVal, oldVal) {
          if (newVal <= 0) {
              this.$emit('timeEnd')
              clearTimeout(this.interval)
          }
      }  
    },
    mounted () {
        this.setTime()
    },
    methods: {
        setTime () {
            this.surplusTime = this.time - (+new Date())
            this.surplusTime = this.surplusTime <= 0 ? 0 : this.surplusTime
            if (this.surplusTime > 0) {
                this.interval = setTimeout(() => {
                    this.setTime()
                }, 1000);
            }
        }
    },
    computed: {
        timeArr () {
            const hour = parseInt(this.surplusTime / (60*1000*60));
            const minutes = parseInt( (this.surplusTime - (60*1000*60*hour)) / (60*1000) );
            const seconds = parseInt( (this.surplusTime - ((60*1000*60*hour) + minutes*60*1000)) / 1000 );
            return [
                hour < 10 ? '0'+hour : hour, 
                minutes < 10 ? '0'+minutes : minutes, 
                seconds < 10 ? '0'+seconds : seconds
            ]
        }
    }
}
</script>
<style lang="less">
.time-box {
    span {
        color: #fff;
        border-radius: 5px;
        font-size: 12px;
    }
    b{
        margin-right: 5px;
    }
}
</style>
