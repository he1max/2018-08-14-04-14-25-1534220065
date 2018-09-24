module.exports = function main(a) {
	let b=[];
	let c=[];
	let d=[];
    let fl=['._.','...','._.','._.','...','._.','._.','._.','._.','._.'];
	let sl=['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'];
	let tl=['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|'];             
	for(let i=0;i<a.length;i++){
		b.push(fl[parseInt(a[i])]);
		c.push(sl[parseInt(a[i])]);
		d.push(tl[parseInt(a[i])]);                             //输入对应led显示
	}
	let b1=b.join(' ');
	let c1=c.join(' ');
	let d1=d.join(' ');
	let sum=b1+'\n'+c1+'\n'+d1+'\n';                            //连接
	return sum;
};