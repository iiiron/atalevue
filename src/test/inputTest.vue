<template>
  <div>
    <basic-input v-model="input"></basic-input>
    <bank-card :value="input" :model="3"></bank-card>
  </div>
</template>

<script>
import basicInput from "@/components/input/basicInput"
import bankCard from '@/components/dataTag/bankCard'

export default {
  data(){
    return {
      input: ''
    }
  },
  components:{
    basicInput,
    bankCard
  }
}
</script>

<style>
	
</style>