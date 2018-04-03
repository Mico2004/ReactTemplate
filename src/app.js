console.log('app.js running');
var appRoot = document.getElementById('app');
//
var template;

var app ={
    title: 'Mickael Application',
    subtitle: 'Some Informative Text',
    options: [0,1,2,3]
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    console.log("form Sbmitted - "+option);

    if(option){   
        console.log("inside if - "+ option);     
        app.options.push(option);
        
        e.target.elements.option.value = '';
    }
    console.log(app.options[app.options.length-1])
    ReactDOM.render(template, appRoot);

};



const renderList = () => {
     template = (
        <div>
            <h1>This is JSX from app.js after changes</h1>
            <p>this is some additional info</p>
            <p>{app.options[app.options.length-1]}</p>
            <ol>
                <li>blo</li>
                <li>olb</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderList();

var userName = 'Micel Elimelech';
var age = 30;
var loc = 'Netanya';

var user = {
    name: 'Hila',
    age: 27,
    loc: 'Netanya, ben gurion'

}


function getLocation(location) {
    if (location)
        return <p>Location: {location}</p>;
}

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {age}</p>
        {getLocation(user.loc)}
    </div>
);

let count = 0;

var addOne = () => {
    count++;
    renderCounter();
}



const renderCounter = () => {
    const template3 = (
        <div>
            <h1>{app.title}</h1>
            <h1>{app.subtitle}</h1>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>button</button>
        </div>

    );
    console.log("rendering again");
    ReactDOM.render(template3, appRoot);
};

//renderCounter();




