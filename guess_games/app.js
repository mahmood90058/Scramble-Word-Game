const msg = document.querySelector(".msg");
const guess= document.querySelector('input');
const btn= document.querySelector(".btn");

let play=false;
let newWords="";
let ranWords="";

const sWords= ['python', 'javascript', 'java','php','nodejs','html','css', 'react', 'angular', 'swift','android','sql'];

const createNewWords=()=>{
    // console.log(sWords[0])
    let ranNum= Math.floor(Math.random() * sWords.length);
    // console.log(ranNum)
    let newsWords= sWords[ranNum];
    // console.log(newsWords)
    // to convert any string to arrat then use split
    // console.log(newsWords.split(""))
    return newsWords;

}

const scrambleWords=(arr)=>{
// reverse the name of charracter
    for(let i = arr.length-1; i>0; i--){
        let temp= arr[i];
        console.log(temp)
        // j ka number hum kuch bhi generate kr rahe hai chuki i ka index 0 hai isliye i ko ek se badhana pada taki multiply zero na aa jaye
        let j= Math.floor(Math.random()*(i+1));
        // console.log(i)
        // console.log(j)
        // swapping/shuffling methode
        arr[i]=arr[j];
        arr[j]= temp;
    }
    // hamara word mil raha hai
    return arr;

}

btn.addEventListener('click',function(){
    if(!play){
        play=true;
        btn.innerHTML="Guess";
        // togle krega jo hidden hai usko unhide kr dega
        guess.classList.toggle('hidden');

        newWords=createNewWords();
        ranWords=scrambleWords( newWords.split("")).join("");
        // console.log(ranWords)
        msg.innerHTML=` Guess the word: ${ranWords}`;
    }else{
        // make for input
        let tempWord= guess.value;
        if(tempWord===newWords){
            // console.log('correct')
            play=false;
            msg.innerHTML=` Awesome its Correct . it is :${newWords} `;
            btn.innerHTML= "Start Again";
            guess.classList.toggle('hidden');
            guess.value="";
        }else{
            // console.log('incorrect')
            msg.innerHTML=` sorry Boss . it is incorrect please try again: ${ranWords} `;
        }
    }
})



