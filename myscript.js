function down(){
    var w=parseInt(window.innerWidth);
    if (w<=483){
        document.getElementById('side').style.height="464px";
    }
    else if(w>483 && w<650){
        document.getElementById('side').style.height="200px";
    }
    document.getElementById('side').style.transition='height 1s';
    document.getElementById('btn').style.display='none';
    document.getElementById('btn1').style.display='block';
    document.getElementById('sidebar_content').style.visibility='visible';
    document.getElementById('sidebar_content').style.display='flex';
    
    

}
function up(){
    var w=parseInt(window.innerWidth);
    if(w<=650){
        document.getElementById('side').style.height='30px';
        document.getElementById('sidebar_content').style.visibility='hidden';
        document.getElementById('btn1').style.display='none';
    document.getElementById('btn').style.display='block';
    }
}

var arr=['page1','page2','page4'];
var pages=arr.length;
var page_no=0;
function prev(){
     page_no-=1;
     console.log(page_no);
     if(page_no>=0){
        for(let i=0;i<pages;i++){
            document.getElementById(arr[i]).style.display="none";
        }
        document.getElementById(arr[page_no]).style.display="block";
     }else{
         page_no=0;
     }
}
function next(){
            page_no+=1;
            console.log(page_no)
            if(page_no<pages){
                for(let i=0;i<pages;i++){
                    document.getElementById(arr[i]).style.display="none";
                }
                document.getElementById(arr[page_no]).style.display="block";
            }else{
                page_no=pages;
            }
        }

function sidebar_data(id){
    for(let i=0;i<arr.length;i++){
        document.getElementById(arr[i]).style.display='none';
    }
    page_no=arr.indexOf(id);
    document.getElementById(id).style.display='block';
    up();
}