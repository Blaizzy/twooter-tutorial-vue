<template>
    <form class="create-twoot-panel" @submit.prevent="createNewTwoot" :class="{'--exceeded': newTwootCharacterCount>180}">
        <label for="newTwoot"><strong>New Twoot</strong> ({{newTwootCharacterCount}}/180)</label>
        <textarea id="newTwoot" rows="4" v-model="state.newTwootContent"/>

        <div class="create-twoot-panel__submit">
            <div class="create-twoot-type">
                <label for="newTwootType"><strong>Type:</strong></label>
                <select id="newTwootType" v-model="state.selectedTwootType">
                    <option :value="option.value" v-for:="option in state.twootType">
                    {{ option.name }}
                    </option>
                </select>
                
            </div>
            <button>
                Twoot!
            </button>
        </div>
        
    </form>
</template>

<script>
import {reactive, computed} from 'vue';

export default {
    name: 'CreateTwootPanel',
    setup(props, ctx) {
        // compositionAPI
        // data
        const state = reactive({
            newTwootContent: '',
            selectedTwootType: 'instant',
            twootType: [
                { value: 'draft', name: 'Draft' },
                { value: 'instant', name: 'Instant Twoot' }
            ],
        })
        // computed
        const newTwootCharacterCount = computed(() => state.newTwootContent.length)

        //methods
        function createNewTwoot() {
            if(state.newTwootContent && state.selectedTwootType !== 'draft') {
                ctx.emit('add-twoot', state.newTwootContent)
            }
            state.newTwootContent = "";
        }

        return {
            state,
            newTwootCharacterCount,
            createNewTwoot
        }
    },
    // data() {
    //     return {
    //         newTwootContent: '',
    //         selectedTwootType: 'instant',
    //         twootType: [
    //             { value: 'draft', name: 'Draft' },
    //             { value: 'instant', name: 'Instant Twoot' }
    //         ],
    //     }
    // },
    // methods: {
    //     createNewTwoot() {
    //         if(this.newTwootContent && this.selectedTwootType !== 'draft') {
    //             this.$emit('add-twoot', this.newTwootContent)
    //         }
    //         this.newTwootContent = " "
    //     }
    // },
    // computed: {
    //     newTwootCharacterCount() {
    //         return this.newTwootContent.length;
    //     }
    // },

}
</script>

<style lang='scss'>
.create-twoot-panel {
    margin-top: 20px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;

    textarea {
        border: 1px solid #DFE3E8;
        border-radius: 5px;
    }

    .create-twoot-panel__submit {
        display: flex;
        justify-content: space-between;

        .create-twoot-type {
            padding: 10px 0;
        }

        button {
            padding: 5px 20px;
            margin: auto 0;
            border-radius: 5px;
            border: none;
            background-color: deeppink;
            color: white;
            font-weight: bold;
        }
    }

    &.--exceeded {
        color: red;
        border-color:  red;

        .create-twoot-panel__submit {
            button {
                background-color: red;
                color: white;
            }
        }
    }
}
</style>