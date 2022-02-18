function show(){
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    let radius = document.getElementById('radius').value;
    let color = document.getElementById('color').value;
    let block = document.getElementById('black');
    
    block.style.height =height+'px';
    block.style.width =width+'px';
    block.style.borderRadius =radius+'%';
    block.style.backgroundColor = color;
    block.style.display= 'block';
    block.style.transition='all 3s linear';
    block.style.marginTop = "50px"
}