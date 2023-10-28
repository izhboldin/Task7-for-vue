<template>
    <div>
        <button @click="openModal">Открыть модальное окно</button>
        <div class="modal" v-if="isModalOpen">
            <div class="modal-content">
                <span class="close" @click="closeModal">&times;</span>
                <slot name='header' :modal="modal.header"></slot>
                <hr>
                <slot name='body' :modal="modal.body"></slot>
                <hr>
                <slot name='footer' :modal="modal.footer"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isModalOpen: false,
            modal: {
                header: 'header',
                body: 'body',
                footer: 'footer',
            }
        }
    },
    methods: {
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },
    },
}
</script>
<style>
.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
    background-color: #fff;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover {
    color: black;
}
</style>