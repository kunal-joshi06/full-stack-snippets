import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> Useful Snippets</span>
    </h1>
    <p className="desc text-center">
      SnippetIo is an open-source snippet tool for modern world to discover,
      create and share creative and useful snippets.
    </p>

    <Feed />
  </section>
);

export default Home;
