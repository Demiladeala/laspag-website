import React from 'react'

type Props = {}

export default function formatCurrency(number:number) {
    const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
        currency: "NGN", style: "currency",
    })


  return CURRENCY_FORMATTER.format(number)
}