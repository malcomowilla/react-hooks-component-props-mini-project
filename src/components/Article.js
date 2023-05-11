function Article({title, date="January 1, 1970", preview, minutes}){
const MINUTES_PER_COFFEE = 5;
  const MINUTES_PER_BENTO = 10;

const totalCoffees = Math.ceil(minutes / MINUTES_PER_COFFEE)
  const totalBentos = Math.ceil(minutes / MINUTES_PER_BENTO);
let emojiIndicator = ''

 if (minutes <= 30) {
    for (let i = 0; i < totalCoffees; i++) {
      emojiIndicator += '☕️';
    }
  } else {
    for (let i = 0; i < totalBentos; i++) {
      emojiIndicator += '🍱';
    }
  }

    return(
        <article>
            <h3>{title}</h3>
            <small>{date} </small>
            <p>{preview} </p>
            <div>{emojiIndicator}{minutes} min read</div>
        </article>
    )
}

export default Article