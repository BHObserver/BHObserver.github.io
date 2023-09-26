function Home() {
  return (
    <div className="home">
      <div className="heading">
        <h1>Welcome to Math Magicians</h1>
        <p>Your Ultimate Calculator App!</p>
      </div>

      <section id="description">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Versatile Functionality:</strong>
            {' '}
            Math Magicians offers a wide range of functions,
            from basic arithmetic to complex scientific calculations. Whether you&apos;re a student,
            professional, or everyday user, it has you covered.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong>
            {' '}
            Our intuitive and user-friendly interface makes calculating a breeze.
            No more fussing with complicated buttons or confusing
            menus—Math Magicians simplifies the process.
          </li>
          <li>
            <strong>Responsive Design:</strong>
            {' '}
            Access Math Magicians on your computer, tablet, or smartphone.
            Our app adapts to any screen size, ensuring a seamless experience on any device.
          </li>
        </ul>
      </section>

      <section id="why-choose">
        <h2>Why Choose Math Magicians?</h2>
        <p>
          Math Magicians is more than just a calculator;
          it&apos;s a tool designed to simplify your life.
          Whether you&apos;re crunching numbers for work,
          school, or everyday tasks, Math Magicians&apos;s versatility
          and ease of use make it the top choice for users of all levels.
        </p>
        <p>
          Join the millions who have already made Math Magicians
          their go-to calculator app. Start calculating with confidence today!
        </p>
      </section>

      <section id="get-started">
        <h2>Get Started Now</h2>
        <p>
          Click the &quot;Try It Now&quot; button to access Math Magicians instantly,
          or sign up for a free account to unlock even more features and functionality.
        </p>
      </section>

      <footer>
        <p>Math Magicians - Making Math Easy, Anytime, Anywhere.</p>
      </footer>
    </div>
  );
}

export default Home;
