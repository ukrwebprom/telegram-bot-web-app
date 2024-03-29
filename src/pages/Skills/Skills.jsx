import './skills.scss';

export const Skills = () => {
    return(
        <div className='skills'>
            <h2 className='hard'>hard skills</h2>
            <ul>
                <li>HTML5</li>
                <li>CSS/SASS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node.js</li>
            </ul>
            <h2 className='medium'>medium skills</h2>
            <ul>
                <li>Responsive / Adaptive design</li>
                <li>REST API</li>
                <li>Websockets</li>
                <li>Firebase</li>
                <li>Git</li>
                <li>Extensive skills in design area</li>
            </ul>
            <h2 className='soft'>soft skills</h2>
            <ul>
                <li>Friendliness</li>
                <li>Self-motivation</li>
                <li>Fast learner</li>
                <li>Meeting deadlines</li>
                <li>Focus on the task</li>
                <li className='exclude'>Nine to five mentality</li>
            </ul>
        </div>
    )
}