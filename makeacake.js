$(document).ready(function(){
    layer1 = $('#layer1')
    layer2 = $('#layer2')
    layer3 = $('#layer3')
    layer4 = $('#layer4')
    layer5 = $('#layer5')
    sidelayer = $('#sideLayer')

    chocSponge = $('#chocSponge')
    vanSponge = $('#vanSponge')

    chocCream = $('#chocCream')
    vanCream = $('#vanCream')
    cofCream = $('#cofCream')

    schocCream = $('#schocCream')
    svanCream = $('#svanCream')
    scofCream = $('#scofCream')

    whiteChocCigar = $('#whiteChocCigar')
    darkChocCigar=$('#darkChocCigar')
    darkChocCurl =$('#darkChocCurl')
    chocSprinkles = $('#chocSprinkles')
    darkChoc=$('#darkChoc')


    $("input[name='sponge']").click(function(){
        if(vanSponge.is(':checked'))
        {
            layer1.attr("src","images/createacake/vanillaBottom.png")
            layer3.attr("src","images/createacake/vanillaMiddle.png")
            layer5.attr("src","images/createacake/vanillaTop.png")

        }
        if(chocSponge.is(':checked'))
        {
            layer1.attr("src","images/createacake/chocolateBottom.png")
            layer3.attr("src","images/createacake/chocolateMiddle.png")
            layer5.attr("src","images/createacake/chocolateTop.png")
        }
    })

    $("input[name='flcream']").click(function(){
        if(chocCream.is(':checked'))
        {
        
            layer4.attr("src","images/createacake/chocolateBottomc.png")
        }
        if(vanCream.is(':checked'))
        {
            layer4.attr("src","images/createacake/freshBottom.png")
        }
        if(cofCream.is(':checked'))
        {
            layer4.attr("src","images/createacake/coffeeBottom.png")
        }
    })

    $("input[name='slcream']").click(function(){
        if(schocCream.is(':checked'))
        {
            layer2.attr("src","images/createacake/chocolateTopc.png")
        }
        if(svanCream.is(':checked'))
        {
            layer2.attr("src","images/createacake/freshTop.png")
        }
        if(scofCream.is(':checked'))
        {
            layer2.attr("src","images/createacake/coffeeTop.png")
        }
    })


    $("input[name='sideDec']").click(function(){

        if(whiteChocCigar.is(':checked'))
        {
            if(vanSponge.is(':checked')){
                sidelayer.attr("src","images/createacake/B01-s03.png")
            }else{
                sidelayer.attr("src","images/createacake/B02-s03.png")
            }
            $('#step1').hide()
        }

        if(darkChocCigar.is(':checked'))
        {
            if(vanSponge.is(':checked')){
                sidelayer.attr("src","images/createacake/B01-s01.png")
            }else{
                sidelayer.attr("src","images/createacake/B02-s01.png")
            }
            $('#step1').hide()
        }

        if(darkChocCurl.is(':checked'))
        {
            if(vanSponge.is(':checked')){
                sidelayer.attr("src","images/createacake/B01-s04.png")
            }else{
                sidelayer.attr("src","images/createacake/B02-s04.png")
            }
            $('#step1').hide()
        }
        if(chocSprinkles.is(':checked'))
        {
            if(vanSponge.is(':checked')){
                sidelayer.attr("src","images/createacake/B01-s10.png")
            }else{
                sidelayer.attr("src","images/createacake/B02-s10.png")
            }
            $('#step1').hide()
        }
        if(darkChoc.is(':checked'))
        {
            if(vanSponge.is(':checked')){
                sidelayer.attr("src","images/createacake/B01-s08.png")
            }else{
                sidelayer.attr("src","images/createacake/B02-s08.png")
            }
            $('#step1').hide()
        }
        // if(scofCream.is(':checked'))
        // {
        //     layer2.attr("src","images/createacake/coffeeTop.png")
        // }
    })

    var topdec ;
   
    $("input[name='topDec']").click(function(){
        topdec = $("input[name='topDec']:checked").val()
        if(whiteChocCigar.is(':checked'))
        {
            sidelayer.attr("src","images/createacake/final/"+topdec+"1.png")
        }

        if(darkChocCigar.is(':checked'))
        {
            sidelayer.attr("src","images/createacake/final/"+topdec+"2.png")
        }

        if(darkChocCurl.is(':checked'))
        {
            sidelayer.attr("src","images/createacake/final/"+topdec+"3.png")
        }
        if(chocSprinkles.is(':checked'))
        {
            sidelayer.attr("src","images/createacake/final/"+topdec+"4.png")
        }
        if(darkChoc.is(':checked'))
        {
            sidelayer.attr("src","images/createacake/final/"+topdec+"5.png")
        }


       
        // if(scofCream.is(':checked'))
        // {
        //     layer2.attr("src","images/createacake/coffeeTop.png")
        // }
    })
})

