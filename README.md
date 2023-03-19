<h3 class="content-section__h3"> algorithm_showcase</h3>

<style>
    .content-section__h3 {
        font-size: 1.5rem;
        font-weight: bold;
    }
    .content-section__h2 {
        font-size: 1rem;
        font-weight: bold;
    }
    .content-section__h5 {
        font-size: 0.75rem;
        font-weight: bold;
        text-decoration: underline;
    }
    .content-section__steps-list {
        list-style-type: decimal;
        padding-left: 1rem;
    }
</style>
<br/>
<h2 class="content-section__h2">Step to initialize and run project:</h2>

<br/>

<h5 class="content-section__h5">Command Line</h5>
<ol class="content-section__steps-list">
    <li>Clone the repository with <code>git clone git@github.com:danielshoo/algorithm_showcase.git</code></li>
    <li>Move into the new cloned repo's frontend directory with <code>cd algorithm_showcase/app/frontend</code></li>
    <li>Run the application's frontend build with <code>npm run buildDev</code></li>
    <li>Change directory to the project root with <code>cd ../../</code></li>
    <li>Execute <code>docker build --tag algorithm_showcase docker/web </code></li>
    <li>Execute <code>docker run -p 80:80 algorithm_showcase</code></li>
</ol>

At this point, you can see the results of the project from a browser. E.g: by visiting
http://localhost/
