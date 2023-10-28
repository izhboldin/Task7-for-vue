<template>
    <div>
        <ul>
            <li v-for='(data, index) in slotsData' v-bind:key="index"> 
                <slot :item="data"></slot>
            </li>
        </ul>
        <slot name='mess' :message="str"></slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            slotsData: ['q', 'w', 'e', 'r'],
            str: 'hello',
        }
    },
}
</script>
<style lang="">
    
</style>