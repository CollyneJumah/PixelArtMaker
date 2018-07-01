// Select color input
var row,col,color;
// Select size input

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
// to cancel the submit action
event.preventDefault();
//getting value of height(rows) & width(cols)  values from users
row=$('#inputHeight').val();
col=$('#inputWeight').val();
makeGrid(row,col);
});
function makeGrid(xaxis,yaxis){
 $('tr').remove();
 for(var i=1;i<=xaxis;i++){
	$('#pixelCanvas').append('<tr id=table' +i +'></tr>');
	for(var j=1;j<=yaxis;j++){
	 $('#table'+i).append('<td></td>');
	}
 }
 //set color from color picker to cell 
 $('td').click(function addColor(){
	color=$('#colorPicker').val();
	if($(this).attr('style')){
	$(this).removeAttr('style');
	}else{
	 $(this).attr('style','background-color:' +color);
	}
 })

}