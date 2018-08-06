<template>
    <div class="scroll" ref="scroll">
        <div class="section">
            <div ref="content">
                <Contentitem v-for="item in types" :key="item.id">
                    <template slot="title">
                        <h3 :ref="item.its">{{item.its}}{{item.title}}</h3>
                        <p>{{item.sTitle}}</p>
                    </template>
                    <Contain :data="item.list" />
                </Contentitem>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex'
import Contentitem from '@/view/home/component/contentH'
import Contain from '@/components/HomeContent'

export default {
    name: '',
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['types'])
    },
    mounted() {

    },
    components: {
        Contentitem,
        Contain
    }
}
</script>

<style scoped>
.section {
    position: relative;
    /*top: 80px;
    bottom: 45px;
    padding-bottom: 22px;
    left: 0;
    width: 100%;
    overflow: auto;*/
}
</style>
