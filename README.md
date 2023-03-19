<h2> algorithm_showcase</h2>

<br/>
<h4>Step to initialize and run this project from the command line:</h4>

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
