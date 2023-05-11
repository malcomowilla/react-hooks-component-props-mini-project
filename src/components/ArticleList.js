import Article from "./Article";

function ArticleList(props){
    
    return(
        <main>
            {props.posts.map((post)=>(
               <Article title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} key={post.id} />
            ))}

        </main>
    )
}

export default ArticleList 