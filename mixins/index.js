export default {
   methods: {
     diffDate(toDate, fromDate = null, unit = 'day') {
      if(!fromDate) {
        fromDate = this.$dayjs()
      }
      return  Math.ceil(this.$dayjs(toDate).diff(fromDate, unit, true))
  }

   }
}
