import $ from 'jquery'
import './app3.css'
const $square = $('#app3 .square')

$square.on('click',()=>{
    console.log('14')
    $square.addClass('active')
})

$square.on('click',()=>{
    console.log('3')
    $square.addClass('active')
})


