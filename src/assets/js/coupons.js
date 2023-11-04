export const COUPON_TYPES = {percentOff: 'percent-off', buyOneGetOne: 'buy-one-get-one', dollarOff: 'dollar-off', freeGift: 'free-gift', freeShipping: 'free-shipping'}

export const getTypeQuantity = (coupons, type) => {
    let count = 0
    coupons.forEach(coupon => {
        if(type === coupon.promotion_type)
            count++
    });
    return count
}

export const getTypeData = (coupons, type) => {
    const property = 'promotion_type'
    return {
        minValue: getPropertyMinValue(coupons, property, type),
        maxValue: getPropertyMaxValue(coupons, property, type),
        average: getPropertyAvgValue(coupons, property, type)
    }
}

const getPropertyMinValue = (coupons, property, propertyValue) => {
    let min = null
    coupons.forEach(coupon => {
        if(propertyValue === coupon[property]){
            if(!min || coupon.value < min)
                min = coupon.value
        }
    });
    return min
}

const getPropertyMaxValue = (coupons, property, propertyValue) => {
    let max = 0
    coupons.forEach(coupon => {
        if(propertyValue === coupon[property] && coupon.value > max)
            max = coupon.value
    });
    return max
}

const getPropertyAvgValue = (coupons, property, propertyValue) => {
    return (coupons.reduce((average, coupon) =>  {
        if(propertyValue === coupon[property] && coupon.value)
            return average + coupon.value
        return average
    }, 0) / coupons.length).toFixed(2);
}

export const getRetailersData = (coupons) => {
    const property = 'webshop_id'
    let retailers = []
    let result = {}
    coupons.forEach(coupon => {
        if(!retailers.includes(coupon[property])){
            retailers.push(coupon[property])
            result = {...result, [coupon[property]]: { 
                name:coupon[property], 
                percentOff: { count: 1, minValue: coupon.value, maxValue: coupon.value || 0, average: coupon.value},
                dollarOff: { count: 1, minValue: coupon.value, maxValue: coupon.value || 0, average: coupon.value}}}
        } else {
            const resultRetailer = result[coupon[property]]
            if(coupon.value){
                let type = null
                if(coupon.promotion_type === COUPON_TYPES.percentOfff)
                    type = 'percentOff'
                else if(coupon.promotion_type === COUPON_TYPES.dollarOff)
                    type = 'dollarOff'

                if(type){
                    resultRetailer[type].count++
                    if(!resultRetailer[type].minValue || (coupon.value && coupon.value < resultRetailer[type].minValue)){
                        resultRetailer[type].minValue = coupon.value
                    }
                    if(coupon.value > resultRetailer[type].maxValue){
                        resultRetailer[type].maxValue = coupon.value   
                    }
                    resultRetailer[type].average += coupon.value
                }
            }
        }
    })

    retailers.forEach(retailer => {
        result[retailer].percentOff.average = (result[retailer].percentOff.average / result[retailer].percentOff.count).toFixed(2)
        result[retailer].dollarOff.average = (result[retailer].dollarOff.average / result[retailer].dollarOff.count).toFixed(2)
    })
    return result
}