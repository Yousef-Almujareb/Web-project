$(document).ready(function() {
    var html= '<tr><td><input class="btn btn-danger" type="button" name="remove" value="Remove" id="remove" tabindex="-1"></td><td><input type="text" class="form-control" name="name[]" required></td><td><input type="number" class="form-control" name="number" required id="number"></td><td><div class="form-group"><select class="form-control" name="grade" id="sel1"><option>A</option><option>A-</option><option>B+</option><option>B-</option><option>B</option><option>C+</option><option>C-</option><option>C</option><option>D+</option><option>D-</option><option>D</option></select></div></td></tr>';
    var max=50;
    var x= 1;
    $("#add").click(function(){
        if(x <= max) {
            $("#table_field").append(html);
            x++
        }
    })
    $("#table_field").on('keydown','#sel1',function(e){
        if(e.keyCode==9){
            if(x<=max) {
                $('#table_field').append(html);
                x++
            }
        }
    })
    $("#table_field").on('click','#remove',function(){
        $(this).closest('tr').remove();
        x--
    })
})

let test= $("#sel1 option:selected").text()
console.log(test);


var grade= document.getElementsByName("select");
var ArrayGrades=Array.prototype.slice.call(grade);
var credits= document.getElementsByName("number");
console.log(grade);
console.log(credits);




