const hourEle=document.querySelector(".hour")
const minuteEle=document.querySelector(".minute")
const secondEle=document.querySelector(".secound")
const timeEle=document.querySelector(".time")
const dateELe=document.querySelector(".date")
console.log(dateELe)
const toggleEle=document.querySelector(".toggle")


toggleEle.addEventListener("click", (e) =>{

	const html=document.querySelector('html')

	if(html.classList.contains('dark'))
	{
		html.classList.remove('dark')
		e.target.innerHTML='dark mode'

	}
	else
	{
		html.classList.add('dark')
		e.target.innerHTML='Light mode'
	}
})

const days=['sun','mon','tue','wed','thr','fri','sat']
const monthList=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];


function setTime(){
	const date=new Date()
	const month=date.getMonth()
	const day=date.getDay()
	const hour=date.getHours()
	const minute=date.getMinutes()
	const second=date.getSeconds()
	const hourForClock=hour % 12
	const ampm=hour >= 12 ? 'PM' : 'AM';
	 

	//hourEle.style.transform=`translate(-50%,-100%) rotate(${hour})`
	 hourEle.style.transform=`translate(-50%,-100%) rotate(${scale(hourForClock,0,11,0,360)}deg)`
	 minuteEle.style.transform=`translate(-50%,-100%) rotate(${scale(minute,0,59,0,360)}deg)`
	 secondEle.style.transform=`translate(-50%,-100%) rotate(${scale(second,0,59,0,360)}deg)` 

	  timeEle.innerHTML=`${hourForClock} : ${minute < 10 ? `0 ${minute}` : minute} ${ampm}`;
	  dateELe.innerHTML=`${monthList[month]} , ${days[day]}`
	  console.log(monthList[month])
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

 const scale = (num, in_min, in_max, out_min, out_max) => (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min 
 //Should be included to use ES6 syntax. – 
// Brandon Keith Biggs
//  Jun 23, 2018 at 17:38

setTime()

setInterval(setTime,1000)