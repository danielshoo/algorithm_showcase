### [UNDER DEVELOPMENT]
There are currently no algorithms being showcased in this project and there is no reason to run it except to see the nginx server running. <br />
If you are interested in seeing what algorithms are to come, see the `docker/web/app/frontend/js/lib` directorys where the following aglgorithms were implemented:
1. insertionSort
2. quickSort
3. mergeSort
<br />
<br />


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
