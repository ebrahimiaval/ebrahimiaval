import { SyntheticEvent } from "react";

export default function Home() {
  const onImageErrorHandler = (e: SyntheticEvent<HTMLImageElement>) =>
    (e.currentTarget.style.display = "none");

  return (
    <div className="d-flex justify-center max-w-4xl mx-auto p-4">
      <img
        className="w-32 h-32 rounded-full mx-auto mb-4"
        src="https://avatars2.githubusercontent.com/u/9008892?s=460&v=4"
        alt="Profile"
      />
      <h1 className="text-3xl font-bold text-center text-white mb-4">
        Hi 👋, I'm Mohammad Ebrahimi Aval
      </h1>
      <h2 className="text-xl text-center text-gray-300 mb-8">
        A Front End Developer, who has been pursuing this passion for over 10 years.
      </h2>

      <ul className="space-y-4 mb-8">
        <li className="text-gray-300">
          📝 I regularly write articles on
          <a
            href="https://virgool.io/@ebrahimiaval"
            className="text-blue-400 hover:text-blue-300 ml-1"
          >
            virgool
          </a>
        </li>
        <li className="text-gray-300">
          <span>💬 Ask me about: </span>
          <i className="text-gray-400">
            Javascript, React.js, Next.js, Node.js, Tailwind, Sass, HTML/CSS
          </i>
        </li>
        <li className="text-gray-300">
          <span>📫 How to reach me: </span>
          <a href="mailto:m.ebrahimiaval@gmail.com" className="text-blue-400 hover:text-blue-300">
            m.ebrahimiaval@gmail.com
          </a>
          <span className="mx-2">/</span>
          <a
            href="https://linkedin.com/in/ebrahimiaval"
            className="text-blue-400 hover:text-blue-300"
          >
            linkedin
          </a>
          <span className="mx-2">/</span>
          <a href="https://github.com/ebrahimiaval" className="text-blue-400 hover:text-blue-300">
            GitHub
          </a>
        </li>
        <li className="text-gray-300">
          📄 Know about my experiences:
          <a
            href="https://ebrahimiaval.ir/public/mohammad-mohammad-ebrahimi-aval-frontend-developer-resume-v1.0.0.pdf"
            className="text-blue-400 hover:text-blue-300 ml-1"
          >
            resume-v1.0.0.pdf
          </a>
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-center text-white mb-4">Languages and Tools</h3>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4 mb-8">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width="40"
            height="40"
            onError={onImageErrorHandler}
          />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width="40"
            height="40"
            onError={onImageErrorHandler}
          />
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <img
            src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
            alt="nextjs"
            width="40"
            height="40"
            onError={onImageErrorHandler}
          />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="typescript"
            width="40"
            height="40"
            onError={onImageErrorHandler}
          />
        </a>
        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
            alt="bootstrap"
            width="40"
            height="40"
            onError={onImageErrorHandler}
          />
        </a>
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            width="40"
            height="40"
            onError={onImageErrorHandler}
          />
        </a>
        <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
          <img
            src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
            alt="figma"
            width="40"
            height="40"
            onError={onImageErrorHandler}
          />
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
            width="40"
            height="40"
            onError={onImageErrorHandler}
          />
        </a>
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            width="40"
            height="40"
            onError={onImageErrorHandler}
          />
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="mongodb"
            width="40"
            height="40"
            onError={onImageErrorHandler}
          />
        </a>
        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs"
            width="40"
            height="40"
            onError={onImageErrorHandler}
          />
        </a>
        <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
            alt="postgresql"
            width="40"
            height="40"
            onError={onImageErrorHandler}
          />
        </a>
        <a href="https://redux.js.org" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="redux"
            width="40"
            height="40"
            onError={onImageErrorHandler}
          />
        </a>
        <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
            alt="sass"
            width="40"
            height="40"
            onError={onImageErrorHandler}
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="tailwind"
            width="40"
            height="40"
            onError={onImageErrorHandler}
          />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <img
          className="w-full"
          src="https://github-readme-stats.vercel.app/api?username=ebrahimiaval&show_icons=true&locale=en&theme=dracula"
          alt="GitHub Stats"
          onError={onImageErrorHandler}
        />
        <img
          className="w-full"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=ebrahimiaval&show_icons=true&locale=en&layout=compact&theme=dracula"
          alt="Top Languages"
          onError={onImageErrorHandler}
        />
        <img
          className="w-full"
          src="https://github-readme-streak-stats.herokuapp.com/?user=ebrahimiaval&theme=dracula"
          alt="GitHub Streak"
          onError={onImageErrorHandler}
        />
      </div>

      <div className="text-center mb-8">
        <img
          className="mx-auto"
          src="https://github-profile-trophy.vercel.app/?username=ebrahimiaval&theme=monokai&column=3&margin-w=15&margin-h=15&no-bg=true"
          alt="GitHub Trophies"
          onError={onImageErrorHandler}
        />
      </div>
    </div>
  );
}
