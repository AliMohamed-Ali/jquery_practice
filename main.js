
$(function(){

'use strict';
//Calculate paddding of body
$('body').css("paddingTop",$('.navbar').innerHeight()) ;

//Smoothly Scroll To Element
$('.navbar li a ').click(function(e){
    e.preventDefault()
    $('html ,body').animate({
        scrollTop : $('#' + $(this).data('scroll')).offset().top + 1
    },1000);
}); 
//Add Class active to Navbar Link and Remove from siblings
$('.navbar li a').click(function(){
    // $('.navbar a').removeClass('active');
    // $(this).addClass('active');

    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
})
$(window).scroll(function(){
//Syn scrolltop with links

    $('.block').each(function(){
        if($(window).scrollTop() > $(this).offset().top ){
            var blockId = $(this).attr("id")
            $('.navbar a').removeClass('active');
            $('.navbar li a[data-scroll = "'+blockId+'"] ').addClass('active');
        }
    });
    var scrollTop = $('.scroll-to-top')
    if($(window).scrollTop() > 1000){
        if(scrollTop.is(':hidden')){
            scrollTop.fadeIn(400)
        }
    }else{
        scrollTop.fadeOut(400)
    }
});
//Click  on ScrollTop To Go up
$('.scroll-to-top').click(function(event){
    event.preventDefault()
    $('html ,body').animate({
        scrollTop : 0
    },1000);
})

//Popup
$('.show-popup').click(function(){
    $('.'+$(this).data('popup')).show();
})
$('.popup').click(function(){
    $(this).fadeOut()
})
$('.popup .inner').click(function(e){
    e.stopPropagation();
})
$('.popup .close').click(function(e){
    e.preventDefault(); 
    $(this).parentsUntil(".popup").parent().fadeOut();
})
$(document).keydown(function(e){
    if(e.key == 'Escape'){
        $('.popup').fadeOut()
    }
})
/*
//button with effects
//Border From Direction
//Fill Form Direction
//Bounce
*/
$('.button-effects button').each(function(){
    $(this).prepend('<span></span>')
})
$(".from-left ,.border-left").hover(function(){
    $(this).find('span').eq(0).animate({
        width:'100%'
    },200)
},function(){
    $(this).find('span').eq(0).animate({
        width:'0'
},200)
});
$(".from-top ,.border-top").hover(function(){
    $(this).find('span').eq(0).animate({
        height:'100%'
    },200)
},function(){
    $(this).find('span').eq(0).animate({
        height:'0'
},200)
});
//Bounce Effect Function 
function bounceElement(selector , times , distance , speed){
    for(var i=0; i<times;i++){
        $(selector).animate({
            top : '-=' + distance,
            left : '+=160px'
        },speed).animate({
            top : '+='+distance,
            left : '-=160px'
    
        },speed)
    }
}
$('.once').on('click',function(){
    bounceElement($(this),1,30,400)
})
$('.towice').on('click',function(){
    bounceElement($(this),1,20,400)
})





//Start animated Progress
$('.animated-progress span').each(function(){
    $(this).animate({
        width: $(this).data('progress') + '%'
    },1000,function(){
        $(this).text($(this).data('progress') + '%')
    })
})
//Fixed Menu
// $('.fixed-menu ').css({
//     'left':-$('.fixed-menu').innerWidth()

// })
$('.fixed-menu i').click(function(){
    $(this).parent('.fixed-menu ').toggleClass('is-visible');
    if( $(this).parent('.fixed-menu').hasClass('is-visible')){
    $(this).parent('.fixed-menu ').animate({
        left:0
    },500);
    //to move the body 
    $('body').animate({
        paddingLeft :$(this).parent('.fixed-menu').innerWidth()+'px'
    },700)
    }else{
        $(this).parent('.fixed-menu').animate({
            left:'-' +$(this).parent('.fixed-menu').innerWidth()+'px'
        },500);
        $('body').animate({
            paddingLeft :0
        },300)
    }
    })
    //Change Colors of Page
    $('.change-color li').click(function(){
        $('body').attr('data-default-color',$(this).data('color'))
    })
    //Thumnails
    var numberOfThumnails = $('.thumbnails').children().length,
        marginBetweenThumbnails = '0.5',
        totalMarginBetweeThumbnails = (numberOfThumnails - 1) * marginBetweenThumbnails,
        widthOfThumbnails =  (100-totalMarginBetweeThumbnails)/numberOfThumnails 
        $('.thumbnails img').css({
            'width':widthOfThumbnails + '%',
            'margin-right':marginBetweenThumbnails +'%'
        })
        $('.thumbnails img:last').css({
            'margin-right':0
        })

    $('.thumbnails img').on('click' ,function(){
        $(this).addClass('selected').siblings().removeClass('selected')
        $('.master-img img').hide().attr('src',$(this).attr('src')).fadeIn(500)
    })
    $('.fa-angle-left').click(function(){
        if($('.thumbnails .selected').is(':first-child')){
        $('.thumbnails img:last').click()
        }else{
            $('.thumbnails .selected').prev().click()
        }
    })
    $('.fa-angle-right').click(function(){
        if($('.thumbnails .selected').is(':last-child')){
            $('.thumbnails img').eq(0).click()
            }else{
                $('.thumbnails .selected').next().click()
            }
    })
//Start products
$('.product i, .item i'  ).click(function(){
    $(this).toggleClass('fa-plus fa-minus').next('p').slideToggle()
    
})


$('.items .view-option i').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
    $('.items').removeClass('list-view gird-view').addClass($(this).data('class'))
})

//Error Message 
$('.error-message').each(function(){
    $(this).animate({'right' : 0},500,function(){
        $(this).delay(3000).fadeOut(200)
    });
})
/*

Our Form
practice Example
*/
//Hide Placeholder onv Focus and restore on Blur
var placAtrr = '';
$('[placeholder]').focus(function(){
    placAtrr = $(this).attr('placeholder')
    $(this).attr('placeholder' , '')
}).blur(function(){
    $(this).attr('placeholder' , placAtrr)

})
//Show Message When Be empty
$('[required]').blur(function(){
if($(this).val() == ''){
    $(this).next('span').fadeIn().delay(2000).fadeOut();
}
});

//Add Asterisk To All Required Fiel
$('<span class="asterisk">*</span>').insertBefore(':input[required]')
//Custmize the Asterisk By jquery
$('.asterisk').parent('div').css('position','relative')
$('.asterisk').each(function(){
    $(this).css({
        'position':'absolute',
        'top': '15px',
        'left' : $(this).parent('div').find(':input').innerWidth() - 20,
        'color' : 'red',
        'font-weight':'bold' 
    });
});
//Custmize The Input File

$('.our-form input[type="file"]').wrap("<div class='custom-file'></div>");
$('.custom-file').prepend('<span>Upload Your File</span> ')
$('.custom-file').append('<i class="fas fa-upload fa-lg skin-color"></i> ')
$('.our-form input[type="file"]').change(function(){
    $(this).prev('span').text($(this).val())  
})
//Detect unicode of keyBoard

$('.detect-unico').keyup(function(e){
    var keyBoard = e.keyCode || e.which
    $('.unicode').html('The Unicode For The Key You Pressed Is: ' +keyBoard)
})
//Change Input Direction Depend on First Langua
$('.auto-direction').on('keyup',function(){
    if($(this).val().charCodeAt(0) < 200){
        $(this).css("direction",'ltr')
    }else{
        $(this).css("direction",'rtl')

    }
})
//Convert Input Value To Tags
$('.add-tag').keyup(function(e){
    var keyBoard = e.keyCode || e.which
    if(keyBoard == 188){//if  Pressed Comma
        var thisvalue = $(this).val().slice(0,-1);
        $('.tags').append('<span class="tag-span"><i class="fas fa-times"></i>'+ thisvalue+'</span>')
        $(this).val(" ")
        
    }
});
//Remove Span 
$('.tags ').on('click','.tag-span i',function(){
    $(this).parent('.tag-span').fadeOut(500)
});
//Satr Trimed text
// $('.trimed-texts p').each(function(){
//     if ($(this).text().length > 100){
//         var trimedText = $(this).text().substr(0,100)
//         $(this).text(trimedText + '...')
        

//     }
// })
function trimText(selector,maxlength){
    $(selector).each(function(){
        if ($(this).text().length > maxlength){
            var trimedText = $(this).text().substr(0,maxlength)
            $(this).text(trimedText + '...')
        }
    });
}
trimText('.trimed-texts .p-one',100)
trimText('.trimed-texts .p-two',200)
trimText('.trimed-texts .p-three',300)
//Adjust Element Height
var maxHeight = 0;
$('.same-height p ').each(function(){
    if($(this).height()>maxHeight ){
        maxHeight = $(this).height();
    }
});

$('.same-height p ').height(maxHeight)
//Shuffle Cards
var xIndexValue = 0;
$('.cards .card').on('click',function(){
    $(this).animate({
        left:'20%',
        marginTop: '30px'
        
    },400,function(){
        xIndexValue--
        $(this).css('z-index',xIndexValue)
    }).animate({
        left: $(this).css('left'),
        marginTop: 0
    },400)
});
//Create bklink warning
blinkwarning();


function blinkwarning(){
    $('.blink-warning').fadeOut(1000,function(){
        $(this).fadeIn(1000);
        blinkwarning();
    })
}
//ToDoList
var newTask= $('.task-input');
$('.add-tasks').on('submit',function(ev){
    ev.preventDefault();
    if(newTask.val() != ''){
        $('<li>'+newTask.val()+'</li>').prependTo('.tasks');
        newTask.val("");
    }
});
$('.tasks').on('click','li',function(){
    $(this).css('text-decoration','line-through').delay(200).fadeOut(400 ,function(){
        $(this).remove()
    });
});
//Sart TypeWrite Effect
/*
var theText = $('.typer').data('text'),
    theTextLength = theText.length,
    n=0,
    theTyper=setInterval(() => {
        $('.typer').each(function(){
            $(this).html($(this).html() + theText[n])
        });
        n++
        if(n >= theTextLength){
            clearInterval(theTyper)
        }
    }, 100);
    */

function typeWriter(selector , speed){
    var theText = $(selector).data('text'),
    theTextLength = theText.length,
    n=0,
    theTyper=setInterval(() => {
        $(selector).html($(selector).html() + theText[n])
        n++
        if(n >= theTextLength){
            clearInterval(theTyper)
        }
    }, speed);
}

typeWriter('.typer-one',50)
typeWriter('.typer-two',100)

//Calculate Table Cell Price Values
var theSummry = 0;
$('.price').each(function(){
    theSummry += parseInt($(this).text());
});
$('.the-total').text(theSummry);
//Auto Change Content (Self infoce)
(function autoChange(){
    $('.ticker-list .active').each(function(){
        if(! $(this).is(':last-child')){
            $(this).delay(1000).fadeOut(1000,function(){
                $(this).removeClass('active').next().addClass('active').fadeIn()
                autoChange();
                
            });
        }else{
            $(this).delay(1000).fadeOut(1000,function(){
                $(this).removeClass('active')
                $('.ticker-list li').eq(0).addClass('active').fadeIn()
                autoChange()
            });
        }
    });
}());
//Dynamic Tabs
$('.tabs-list li').on('click',function(){
    // console.log($(this).data('content'));
    $(this).addClass('active').siblings().removeClass('active');
    $('.content-list > div').hide()
    $('.'+$(this).data('content')).fadeIn();
});
//Switch View

$('.switch-tabs').click(function(){
    $('.dynamic-tabs').toggleClass('left-tabs')
});

//Email Suggest Box
var emailProviders =['gmail.com','hotmail.com' ,'outlook.co','yahoo.com'],
    finalString ='',
    inputVal = $('.email-suggest');
$('.email-suggest').on('keyup',function(){
    finalString ='';//Reset Variable

    if(! $(this).next().is('.suggest-box')){
        $('<ul class="suggest-box"></ul>').insertAfter($(this))
    }
    for (var i = 0; i < emailProviders.length; i++) {
        finalString +='<li>' + $(this).val() + '@' + emailProviders[i] +'</li>' 
        
    }
$('.suggest-box').html(finalString);

});
$('body').on('click','.suggest-box li' ,function(){
    inputVal.val($(this).text());
    $(this).parent().fadeOut(200).remove()
})

















});