'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Project = function Project() {

    this.question = '.js-question'; // Выбор вопроса
    this.scroll = '.js-scroll'; // Кнопка для скролла
    this.init();

};

Project.prototype = {
    init: function init() {

        $(document).on('click', this.question, $.proxy(this.eventQuestion, this)); // Событие выбара вопроса
        $(document).on('click', this.scroll, $.proxy(this.eventScroll, this)); // Событие выбара вопроса


        svg4everybody();
        // слайдеры

    },
   

    // Событие выбара вопроса
    eventQuestion: function(e) {
        e.preventDefault();

        var $this = $(e.target).closest('.question__item');




        if($this.hasClass('question__item_open')){
            $this.removeClass('question__item_open');
 
        } else{
            $this.closest('.question__list').find('.question__item_open').removeClass('question__item_open');
            $this.addClass('question__item_open');
        }
    },
    eventScroll: function(e){
    
        $('html, body').animate({
            scrollTop: $('.info').offset().top
        }, {
            duration: 370,   // по умолчанию «400» 
            easing: "linear" // по умолчанию «swing» 
        });
    
        return false;
    },
   

       


};
$(document).ready(function () {
    new Project();

});