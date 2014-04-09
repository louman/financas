// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
  applyMasks();
});


function applyMasks() {
  $.mask.definitions['0'] = "[0-9]";
  $('[mask_it=date]').mask('99/99/9999');
  maskMoney();
  $('[mask_it=number]').keyup(function() {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
  });
}

function maskMoney() {
  $('[mask_it=money]').autoNumeric('init', {aSep: '', aDec: ','});
}