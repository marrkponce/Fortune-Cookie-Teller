document.getElementById('crack').addEventListener('click', crackOpen);

const fortuneGenerator = () => {
    
    let randomNumber = Math.floor(Math.random() * 25);
    let num = randomNumber
    
    switch(num){
        case 0:
            return 'Face the truth with dignity';
            break;
        case 1:
            return 'A gathering of Friends will bring you luck.';
            break;
        case 2:
            return 'If you have an idea, make it into a reality.';
            break;
        case 3:
            return 'Be the change you want to see in the world';
            break;
        case 4:
            return 'Travel is in your future';
            break;
        case 5:
            return 'To achieve wisdom, you must first desire it';
            break;
        case 6:
            return 'Be thankful, even if your life is not perfect';
            break;
        case 7:
            return 'The best way to predict the future is by creating it';
            break;
        case 8:
            return 'Do not hesitate to pick a difficult problem';
            break;
        case 9:
            return 'You have a good reason to be self confident';
            break;
        case 10:
            return 'True happiness makes us wise.';
            break;
        case 11:
            return 'You can learn much from people who are different from you.';
            break;
        case 12:
            return 'Focus on your health and well-being now.';
            break;
        case 13:
            return 'Do not let ambitions overshadow small success.';
            break;
        case 14:
            return 'Do not just think, act!';
            break;
        case 15:
            return 'Expect much of yourself and little of others.';
            break;
        case 16:
            return 'Good to begin well, better to end well.';
            break;
        case 17:
            return 'It is better to be an optimist and proven a fool than to be a pessimist and be proven right.';
            break;
        case 18:
            return 'Love is a warm fire to keep the soul warm.';
            break;
        case 19:
            return 'Physical activity will dramatically improve your outlook today.';
            break;
        case 20:
            return 'Remember the birthday but never the age.';
            break;
        case 21:
            return 'Success is failure turned inside out.';
            break;
        case 22:
            return 'The harder you work, the luckier you get.';
            break;
        case 23:
            return 'To know oneself, one should assert oneself.'
            break;
        case 24:
            return 'Your ability is appreciated.';
            break;
        default: 
            return 'Try Again'
    }
} 

function crackOpen(){
    
    const fortuneDisplay = document.getElementById('cookie');
    const fortune = fortuneGenerator();

   
    if (fortuneDisplay.innerHTML !== '') {
        fortuneDisplay.innerHTML = '';
      }else{
        fortuneDisplay.innerHTML = fortune;

      }

}

