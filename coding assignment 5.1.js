var para=`Nature is the ultimate source of our living. Both living and non-living things include nature, and everyone is interdependent, which helps maintain the ecosystem. Plants, animals, and humans all depend on nature for their survival. It supplies oxygen, sunlight, soil, water, and other necessary components.`
para=para.toLowerCase();

para=para.replace(/[,.!#$@%&""]/g,'')
console.log(para);

para=para.split(" ");

var newarray=[]
var number='5';
var count=1;
for(let i=0;i<para.length;i++){
	if(para[i]!=number){
        for(let j=i+1;j<para.length;j++){
			if(para[i]==para[j]){
				count++;
				para[j]=number;
			}
		}
		
		newarray.push([para[i],count]);
		count=1;
	}
}
console.log(newarray);

for(let x=0;x<newarray.length;x++){
	for(let y=x+1;y<newarray.length;y++ ){
		if(newarray[x][1]<newarray[y][1]){
			let temp=newarray[x];
			newarray[x]=newarray[y];
			newarray[y]=temp;
		}
	}
}
var top=newarray.slice(0,3);
console.log(top);

var text=""

for(let z=0;z<newarray.length;z++){
	
	text=text+"<h3>"+newarray[z][0]+"---"  +newarray[z][1] + "times "+"</h3>"+"<hr>"
}
document.getElementById('count').innerHTML=text;
