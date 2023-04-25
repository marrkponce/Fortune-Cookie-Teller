document.getElementById('crack').addEventListener('click', crackOpen);

const fortuneGenerator = () => {
    
    let randomNumber = Math.floor(Math.random() * 10);
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
            return 'You have a good reason to be self confident'
            break;
        default: 
            return 'Try Again'
    }
} 

function crackOpen(){
    document.getElementById('cookie').innerHTML = fortuneGenerator()
}