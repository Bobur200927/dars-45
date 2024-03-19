
// ? ================ Gruppalar ==================

// 1. Kutubxonalar
// 2. O'zgaruvchilar
// 3. Functions
// 4. Skriptlar


// ? ============== Jquery ==============
// Selector


console.log($('h1'));
$('h1').text('salom dunyo')
$('h1').html('<i>salom dunyo</i>')
$('h1').attr('test', '<i>salom dunyo</i>')
console.log($('h1').attr('test'));

$('h1').on('click', function(){
    $(this).css({color: 'red'})

    $(this).hide(2000)
})

$('button').on('click', function(){
    $('h1').show(2000)
    $('h1').css({color:'black'})
})