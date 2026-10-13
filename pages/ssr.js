// This function runs on the server for every request.
export async function getServerSideProps() {
    // Fetch a random joke from the API.
    const res = await fetch(
      'https://official-joke-api.appspot.com/random_joke'
    );
  
    // Convert the response into a JavaScript object.
    const joke = await res.json();
  
    // Pass the joke to the page component.
    return {
      props: {
        joke,
      },
    };
  }
  
  // Display the joke received from the server.
  export default function SSRPage({ joke }) {
    return (
      <div>
        <h1>Server-Side Rendering (SSR)</h1>
        <p>{joke.setup}</p>
        <p><strong>{joke.punchline}</strong></p>
      </div>
    );
  }