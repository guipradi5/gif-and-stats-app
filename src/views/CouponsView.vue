<template>
  <main>
    <h1>Coupons</h1>

    <section v-if="couponsData" class="coupons-stats">
      <div>There's a total of {{couponsData.count}} coupons</div>
      <div>
        <h3>For the "percent-off" coupons, we have the following statistics:</h3>
        <ul>
          <li>Count: {{couponsData.typeCount.percentOff}}</li>
          <li>Minimum Discount: {{couponsData.percentOffData.minValue}}%</li>
          <li>Maximum Discount: {{couponsData.percentOffData.maxValue}}%</li>
          <li>Average Discount: {{couponsData.percentOffData.average}}%</li>
        </ul>
      </div>
      <div>
        <h3>For the "dollar-off" coupons, we have the following statistics:</h3>
        <ul>
          <li>Count: {{couponsData.typeCount.dollarOff}}</li>
          <li>Minimum Discount: {{couponsData.dollarOffData.minValue}}$</li>
          <li>Maximum Discount: {{couponsData.dollarOffData.maxValue}}$</li>
          <li>Average Discount: {{couponsData.dollarOffData.average}}$</li>
        </ul>
      </div>
      
      <div>
        <h3>For each retailer here are the following statistics:</h3>
        <div v-for="retailer in couponsData.retailers" :key="retailer.name">
          <h4>{{retailer.name}}</h4>
          <div>
            <h5>Percent Off Discounts</h5>
            <ul>
              <li>Coupons: {{retailer.percentOff.count}}</li>
              <li>Minimum Discount: {{retailer.percentOff.minValue}}%</li>
              <li>Maximum Discount: {{retailer.percentOff.maxValue}}%</li>
              <li>Average Discount: {{retailer.percentOff.average}}%</li>
            </ul>
          </div>
          <div>
            <h5>Dollar Off Discounts</h5>
            <ul>
              <li>Coupons: {{retailer.dollarOff.count}}</li>
              <li>Minimum Discount: {{retailer.dollarOff.minValue}}%</li>
              <li>Maximum Discount: {{retailer.dollarOff.maxValue}}%</li>
              <li>Average Discount: {{retailer.dollarOff.average}}%</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="coupons-graph">
    </section>
  </main>
</template>

<script setup>
import { getCouponsData } from "@/api/api";
import { onMounted, ref } from "vue";

const couponsCount = ref(0)
const couponsData = ref(null)

onMounted(async () => {
  couponsData.value = await getCouponsData()
})

</script>


<style scoped lang="scss">
main {
  padding: 0 30px;
  h3, h4, h5{
    margin-bottom: 0.3em;
  }
}
</style>
