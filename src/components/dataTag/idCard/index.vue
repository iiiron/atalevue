<template>
  <div v-html="card"></div>
</template>

<script>
import lodash from 'lodash'
import weLodash from '../../../utils/weLodash.js'
export default{
  name: 'IdCard',
  props: {
    value: {
      type: String,
      default: ''
    },
    model: {
      type: Number,
      default: 0
    },
    formatList: {
      type: Array,
      default: function () {
        return [{
          model: 1,
          format: [
            '_*_*_*_*_*_*_*_*_*_****%%%%',
            '_*_*_*_*_*_*_*_*_*_*_*_*_*_*%%%%'
          ]
        }, {
          model: 2,
          format: [
            '%%%%_*_*_*_*_*_*_****%%%%',
            '%%%%_*_*_*_*_*_*_*_*_*_*%%%%'
          ]
        }]
      }
    }
  },
  data: function () {
    return {
      findFormat: (content, model, formatList) => {
        var def = '%%%%%%%%%%%%%%%%%%'
        try {
          var f = lodash.find(formatList, (val, ind) => {
            return val.model === model
          })
          if (content.length === 15) {
            return f.format[0]
          } else if (content.length === 18) {
            return f.format[1]
          } else {
            return def
          }
        } catch (e) {
          return def
        }
      }
    }
  },
  computed: {
    card: function () {
      return weLodash.fillIn(this.value, this.findFormat(this.value, this.model, this.formatList)).replace(/ /g, '&nbsp;')
    }
  }
}
</script>

<style scode>

</style>
